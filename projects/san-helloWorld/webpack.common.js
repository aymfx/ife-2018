const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    entry: {
        app: './src/main.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'test-ife',
            template: 'index.html',
        }),
        new CleanWebpackPlugin(['public']),

    ],
    module: {
        rules: [{
                test: /\.san$/,
                loader: 'san-loader'
            }, {
                test: /\.css$/,
                use: [
                    'style-loader', 'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }

        ]
    },
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'public'),
        chunkFilename: '[name].bundle.js'
    },
    optimization: {
        runtimeChunk: false,
        splitChunks: {
            chunks: 'all',
            minSize: 30000,
            minChunks: 3,
            maxAsyncRequests: 5,
            maxInitialRequests: 2,
            name: true,
            cacheGroups: {
                commons: {
                    name: 'commons',
                    chunks: 'all',
                    minChunks: 3,
                    enforce: true
                },
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                }
            }
        }
    }

};