const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

    context: __dirname,

    devtool: 'inline-source-map',

    devServer: {
        historyApiFallback: true,
        contentBase: './',
        headers: { 'Access-Control-Allow-Origin': '*' },
        stats: { colors: true }
    },

    entry: [
        './index.js'
    ],

    output: {
        path: path.join(__dirname, 'build'),
        filename: "app.js",
        publicPath: "/assets/"
    },

    module: {

        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel",
                include: __dirname,
                query: {
                    presets: ['es2015', 'es2016', 'react', 'react-hmre']
                }
            }, {
                test: /\.less$/,
                loader: "style!css-loader!less-loader"
            }, {
                test: /(\.css)$/,
                // ExtractTextPlugin does not work with HMR, but it will be included in webpack prod config
                // loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss')
                loader: 'style!css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss'
            }, {
                test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
                loader: 'file'
            }
        ]

    },

    resolve: {
        extensions: ['', '.jsx', '.scss', '.js', '.json'],
        modulesDirectories: [
            'node_modules',
            path.resolve(__dirname, './node_modules')
        ]
    },

    postcss: [autoprefixer],

    plugins: [
        new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify('development')}),
        new ExtractTextPlugin('app.css', {allChunks: true}),
        new webpack.NoErrorsPlugin()
    ]

};
