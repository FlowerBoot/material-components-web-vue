// 代码压缩
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
// gzip压缩
const CompressionWebpackPlugin = require('compression-webpack-plugin')
// 是否为生产环境
const isProduction = process.env.NODE_ENV !== 'development'
// 本地环境是否需要使用cdn
const devNeedCdn = true
module.exports = {
    productionSourceMap: false,
    // 修改 src 目录 为 examples 目录
    pages: {
        index: {
            entry: 'examples/main.js',
            template: 'public/index.html',
            filename: 'index.html'
        }
    },
    // 扩展 webpack 配置，使 packages 加入编译
    chainWebpack: config => {
        config.module
            .rule('js')
            .include
            .add('/packages')
            .end()
            .use('babel')
            .loader('babel-loader')
            .loader('sass-loader')
            .tap(options => {
                // 修改它的选项...
                return options
            })
    },
    // configureWebpack: config => {
    //     // 代码压缩
    //     config.plugins.push(
    //         new UglifyJsPlugin({
    //             uglifyOptions: {
    //                 //生产环境自动删除console
    //                 compress: {
    //                     warnings: false, // 若打包错误，则注释这行
    //                     drop_debugger: true,
    //                     drop_console: true,
    //                     pure_funcs: ['console.log']
    //                 }
    //             },
    //             sourceMap: false,
    //             parallel: true
    //         })
    //     )

    //     // gzip压缩
    //     const productionGzipExtensions = ['html', 'js', 'css']
    //     config.plugins.push(
    //         new CompressionWebpackPlugin({
    //             filename: '[path].gz[query]',
    //             algorithm: 'gzip',
    //             test: new RegExp(
    //                 '\\.(' + productionGzipExtensions.join('|') + ')$'
    //             ),
    //             threshold: 10240, // 只有大小大于该值的资源会被处理 10240
    //             minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理
    //             deleteOriginalAssets: false // 删除原文件
    //         })
    //     )
    // }
}
