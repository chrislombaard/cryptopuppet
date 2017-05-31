// #############
// SETUP

const BASE_PROJECT_NAME = 'crumpet';

const
    Path = require('path'),

    // Custom Helpers
    Helpers = require('./build-helpers/webpack/helpers'),

    // Webpack Utils
    Merge = require('webpack-merge'),
    Validate = require('webpack-validator'),

    // Grab dependencies dict from package.json
    Dependencies = Object.keys(require('./package.json')).dependencies || {};

// Set environment variables
const LifecycleEvent = process.env.npm_lifecycle_event;
const Argv = require('yargs')
    .default('projectName', BASE_PROJECT_NAME)
    .default('projectAspect', 'website')
    .argv;

const MotePath = `/mote/projects/${Argv.projectName}/${Argv.projectAspect}`;
const PublicStaticPath = `/static/${BASE_PROJECT_NAME === Argv.projectName ? BASE_PROJECT_NAME : BASE_PROJECT_NAME + '/' + Argv.projectName}/generated_statics/bundles/`;

const ProjectPaths = {
    root: Path.join(__dirname, MotePath),
    src: Path.join(__dirname, MotePath + '/src'),
    dist: Path.join(__dirname, `${BASE_PROJECT_NAME}${PublicStaticPath}`)
};

function filenamePattern(prefix, ext) {
    return `${prefix}.[name].[chunkhash].${ext}`;
}

function bundlenamePattern(prefix) {
    return `./${prefix}-bundlemap.json`;
}



// #############
// WEBPACK BUILD

const BASE_CONFIG = {
    entry: {
        main: ProjectPaths.src + '/main.js'
    },
    output: {
        path: ProjectPaths.dist,
        filename: filenamePattern(`${Argv.projectName}-${Argv.projectAspect}`, 'js'),
        publicPath: PublicStaticPath
    },
    resolve: {
        extensions: [
            '',
            '.js',
            '.jsx',
            '.css',
            '.scss',
            '.sass',
            '.json'
        ],
        modulesDirectories: [
            'node_modules',
            ProjectPaths.src + '/patterns'
        ]
    },
    module: {
        loaders: [
            {
                test: /\.svg/,
                loader: 'svg-url-loader'
            }
        ],
        preLoaders: [
            {
                test: /\.j[s|sx]$/,
                loaders: ['eslint'],
                include: ProjectPaths.src
            },
            {
                test: /\.scss$/,
                loaders: ['postcss'],
                include: ProjectPaths.src
            }
        ]
    }
}

// Stitch together the correct config based on the environment.
function configBuilder(process, config) {
    let mergedConfig;

    switch (process) {
        // ################
        // Production Build
        case 'build':
            mergedConfig = Merge(
                config,
                {
                    devtool: 'source-map',
                    entry: {
                        // Because we are inlining these into main.js if env === 'development',
                        // these will throw an error because entry points may not be required as modules.
                        // Workaround is to wrap the path in an array as per:
                        // https://github.com/webpack/webpack/issues/300
                        styles: [ Path.join(__dirname, MotePath + '/src', 'styles.scss') ]
                    },
                    postcss: function() { // TODO: Make this a part of extractCSS and setupCSS
                        return [
                            require('autoprefixer'),
                            require('pixrem'),
                            // require('cssnano')
                        ]
                    }
                },
                Helpers.clean(ProjectPaths.dist),
                Helpers.setFreeVariable(
                    'process.env.NODE_ENV',
                    'production'
                ),
                Helpers.setupJS(ProjectPaths.src),
                Helpers.lintCSS({
                    configFile: '.stylelintrc',
                    fileGlob: [
                        MotePath + '/src/*.s?(a|c)ss',
                        MotePath + '/src/+(helpers|patterns)/*.s?(a|c)ss'
                    ]
                }),
                Helpers.globSass(),
                Helpers.extractCSS({
                    filename: filenamePattern(`${Argv.projectName}-${Argv.projectAspect}`, 'css'),
                    include: [
                        Path.join(__dirname, MotePath + '/src/styles.scss')
                    ],
                    path: ProjectPaths.src
                }),
                Helpers.minify(),
                Helpers.trackBundles({
                    path: ProjectPaths.dist,
                    filename: bundlenamePattern(`${Argv.projectName}-${Argv.projectAspect}`)
                })
            );
            break;


        // #################
        // Development Build
        case 'build:dev':
            mergedConfig = Merge(
                config,
                {
                    devtool: 'eval-source-map',
                    entry: [
                        'webpack-dev-server/client?http://localhost:3000',
                        'webpack/hot/only-dev-server',
                        ProjectPaths.src + '/main'
                    ],
                    output: {
                        filename: '[name].js',
                        chunkFilename: '[hash].js', // Used for require.ensure,
                        publicPath: 'http://localhost:3000' + PublicStaticPath
                    },
                    postcss: function() {
                        return [
                            require('autoprefixer'),
                            require('pixrem')
                        ]
                    }
                },
                Helpers.dashboard(),
                Helpers.devServer({
                    publicPath: BASE_CONFIG.output.publicPath
                }),
                Helpers.setFreeVariable(
                    'process.env.NODE_ENV',
                    'development'
                ),
                Helpers.setupJS(ProjectPaths.src),
                Helpers.lintCSS({
                    configFile: '.stylelintrc',
                    fileGlob: [
                        MotePath + '/src/*.s?(a|c)ss',
                        MotePath + '/src/+(helpers|patterns)/*.s?(a|c)ss'
                    ]
                }),
                Helpers.globSass(),
                Helpers.setupCSS({
                    path: ProjectPaths.src,
                    include: [
                        Path.join(__dirname, MotePath + '/src', 'styles.scss')
                    ]
                }),
                Helpers.trackBundles({
                    path: ProjectPaths.dist,
                    filename: bundlenamePattern(`${Argv.projectName}-${Argv.projectAspect}`)
                })
            );
            break;
    }

    return mergedConfig;
}


module.exports = Validate(configBuilder(LifecycleEvent, BASE_CONFIG));
