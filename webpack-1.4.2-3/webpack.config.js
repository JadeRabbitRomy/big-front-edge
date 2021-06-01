const path = require('path')

console.log(path.resolve()) //D:\big-front-edge\webpack-1.4.2-3

console.log(path.join(__dirname, './dist')) //更倾向用这种方式 //D:\big-front-edge\webpack-1.4.2-3\dist

const config = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, './dist')
    },
    module: {
        rules: [
            {
                // sass-loader node-sass 两个依赖都需要安装
                test: /\.(scss|sass)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
              },
        ]
    }
}

module.exports = config