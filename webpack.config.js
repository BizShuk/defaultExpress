var path = require('path');
var common = require('./common');

module.exports = {
    entry: {
        main: './src/main.js'
        // others
        // react is treated like a module
//        vendors: ['react']
    },

    output: {
        // [name] => use entry key for each entry
        // [hash]
        // [chunkhash]
        filename: '[name].js',      // output filename
        path: common.js_path        // output dir
    },
    module: {
        loaders: [
            {   test: /\.js[x]?$/,  exclude: ['node_modules'],  loader: 'babel-loader' ,
                query:{ presets:['es2015','react'] }
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            }
        ]
//      no scan this module
//        noParse: [react_path]

    },
    resolve: {
        root: path.resolve(__dirname),
        modulesDirectories: ['node_modules'],
        extensions: ['','.js','.jsx','.json']
//        alias: {
//            'react': react_path
//        }
    },
    resolveLoader: {
        root: path.join(__dirname,'node_modules')
    },
    plugins: [] // [list of plugin](https://webpack.js.org/plugins)
}
