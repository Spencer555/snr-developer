const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin'); // Import the ESLint plugin

module.exports = {
    mode: 'development', // Change to 'production' for production builds
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js',
    },
    devServer: {
        static: {
            directory: path.join(__dirname, './dist'),
        },
        compress: true,
        port: 9000,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'], // Corrected to include dots before extensions
    },
    plugins: [
        new ESLintPlugin({
            extensions: ['js', 'jsx'], // Specify the file extensions to lint
            exclude: 'node_modules', // Exclude the node_modules folder
        }),
    ],
};
