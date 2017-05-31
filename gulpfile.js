const Gulp = require('gulp');
const theo = require('theo');
const Path = require('path');
const Del = require('del');
const SvgStore = require('gulp-svgstore');
const SvgMin = require('gulp-svgmin');
const Cheerio = require('gulp-cheerio');


const Argv = require('yargs')
    .default('projectName', 'spliceworks')
    .default('projectAspect', 'website')
    .argv;

const MotePath = `/mote/projects/${Argv.projectName}/${Argv.projectAspect}`;
const DjangoStaticDir = `/${Argv.projectName}/static/${Argv.projectName}/`;
const PublicStaticPath = `/static/${Argv.projectName}/generated_statics/bundles/`;


const ProjectPaths = {
    root: Path.join(__dirname, MotePath),
    src: Path.join(__dirname, MotePath + '/src'),
    dist: Path.join(__dirname, DjangoStaticDir + '/generated_statics')
};

const TokenConfig = [
    ['web', 'scss'],
    ['web', 'map.scss'],
    ['web', 'common.js']
];

Gulp.task('pre-bundle', ['design-tokens', 'symbols'], function () {
    console.log('!!!gulp pre-bundle task finished successfully!!!')
});

Gulp.task('design-tokens', function () {
    Del([ProjectPaths.src + '/tokens/formats']).then(function () {
        for (tokenType in TokenConfig) {
            let tokenTransform = TokenConfig[tokenType][0];
            let tokenFormat = TokenConfig[tokenType][1];

            Gulp.src(ProjectPaths.src + '/tokens/manifest.yml')
                .pipe(theo.plugins.transform(tokenTransform))
                .pipe(theo.plugins.format(tokenFormat))
                .pipe(Gulp.dest(ProjectPaths.src + '/tokens/formats'));
        }
    });
});

Gulp.task('symbols', ['sprite-symbols', 'individual-symbols'], function () {
    console.log('!!!gulp pre-bundle task finished successfully!!!')
});

Gulp.task('sprite-symbols', function () {
    return Gulp.src(ProjectPaths.src + '/symbols/**/*.svg')
        .pipe(Cheerio({
            run: function ($) {
                $('svg:not(.KeepFills) [fill]')
                    .removeAttr('fill');
            },
            parserOptions: {
                xmlMode: true
            }
        }))
        .pipe(SvgMin(function (file) {
            const prefix = Path.basename(file.relative, Path.extname(file.relative));
            return {
                plugins: [{
                    cleanupIDs: {
                        prefix: prefix + '-',
                        minify: true
                    }
                }]
            }
        }))
        .pipe(SvgStore())
        .pipe(Gulp.dest(ProjectPaths.dist))
});

Gulp.task('individual-symbols', function () {
    return Gulp.src(ProjectPaths.src + '/symbols/**/*.svg')
        .pipe(Cheerio({
            run: function ($) {
                $('svg:not(.KeepFills) [fill]')
                    .removeAttr('fill');
            },
            parserOptions: {
                xmlMode: true
            }
        }))
        .pipe(SvgMin(function (file) {
            const prefix = Path.basename(file.relative, Path.extname(file.relative));
            return {
                plugins: [{
                    cleanupIDs: {
                        prefix: prefix + '-',
                        minify: true
                    }
                }]
            }
        }))
        .pipe(Gulp.dest(ProjectPaths.dist));
});