const
    Webpack = require('webpack'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    BundleTracker = require('webpack-bundle-tracker'),
    StyleLint = require('stylelint-webpack-plugin'),
    Dashboard = require('webpack-dashboard/plugin');

exports.clean = function(path) {
    return {
        plugins: [
            new CleanWebpackPlugin([path], {
                root: process.cwd() //point to project
            })
        ]
    }
}

exports.dashboard = function() {
    return {
        plugins: [
            new Dashboard()
        ]
    }
}

exports.globSass = function() {
    return {
        module: {
            preLoaders: [{
                test: /\.s[c|a]ss$/,
                loader: 'import-glob-loader'
            }]
        }
    }
}

exports.extractCSS = function(opts) {
    console.log(opts.include[0]);

    return {
        plugins: [
            // Output extracted CSS to a file
            new ExtractTextPlugin(opts.filename)
        ],
        module: {
            loaders: [
                {
                    test: /\.s[c|a]ss$/,
                    loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss!sass?sourceMap'),
                    include: opts.include
                }
            ]
        }
    }
}

exports.setupCSS = function(opts) {
    return {
        module: {
            loaders: [
                {
                    test: /\.s[c|a]ss$/,
                    loader: 'style!css?sourceMap!postcss!sass?sourceMap',
                    include: opts.include
                }
            ]
        }
    }
}

exports.lintCSS = function(opts) {
    return {
        plugins: [
            new StyleLint({
                configFile: opts.configFile,
                files: opts.fileGlob,
                failOnError: true,
                syntax: 'scss'
            })
        ]
    }
}

exports.setupJS = function(paths) {
    return {
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    include: paths,
                    loader: 'babel'
                },
                {
                    test: /\.jsx$/,
                    include: paths,
                    loader: 'babel'
                }
            ]
        }
    }
}

exports.minify = function() {
    /* eslint-disable camelcase  */
    /* Disabled due to drop_console key throwing error. */
    return {
        plugins: [
            new Webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false,
                    drop_console: true
                },
                mangle: {
                    except: ['webpackJsonp']
                }
            })
        ]
    };
    /* eslint-enable */
}

exports.setFreeVariable = function(key, value) {
    const env = {};

    env[key] = JSON.stringify(value);

    return {
        plugins: [
            new Webpack.DefinePlugin(env)
        ]
    };
}

exports.extractBundle = function(options) {
    const entry = {};

    entry[options.name] = options.entries;

    return {
        // Define entry point for splitting
        entry: entry,
        plugins: [
            // Extract bundle and manifest files. Manifest is needed for reliable caching.
            new Webpack.optimize.CommonsChunkPlugin({
                names: [options.name, 'manifest']
            })
        ]
    };
}

exports.trackBundles = function(opts) {
    return {
        plugins: [
            new BundleTracker(opts)
        ]
    }
}

exports.devServer = function(opts) {
    return {
        devServer: {
            publicPath: opts.publicPath,
            // Enable history API fallback so HTML5 History API based
            // routing works. This is a good default that will come
            // in handy in more complicated setups.
            historyApiFallback: true,
            // Unlike the cli flag, this doesn't set
            // HotModuleReplacementPlugin!
            hot: true,
            inline: true,
            // Parse host and port from env to allow customization.
            //
            // If you use Vagrant or Cloud9, set
            // host: opts.host || '0.0.0.0';
            //
            // 0.0.0.0 is available to all network devices
            // unlike default `localhost`.
            host: '0.0.0.0', // Defaults to `localhost`
            port: 3000 // Defaults to 8080
        },
        plugins: [
            // Enable multi-pass compilation for enhanced performance
            // in larger projects. Good default.
            new Webpack.HotModuleReplacementPlugin({
                multiStep: true
            })
        ]
    }
}
