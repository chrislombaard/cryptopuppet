var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        app: "./src/main.js",
    },
    output: {
        path: __dirname + "/crumpet/static/bundles/",
        publicPath: "/bundles/",
        filename: "bundle.js",
    },
    devServer: {
        compress: true,
        contentBase: __dirname + "/crumpet/static/",
        port: 3001,
        disableHostCheck: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["latest", "stage-0", "react"]
                        }
                    },
                ]
            },
        ]
    },
    module: {
        rules: [
            {
                test: /\.s[c|a]ss$/,
                exclude: /(node_modules)/,
                use: ExtractTextPlugin.extract({
                    use: [
                        'css-loader',
                        'sass-loader',
                    ],
                    fallback: [
                        'style-loader'
                    ]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('styles.css'),
    ]
};
