const path = require('path')

const config = {
  entry: './src/index.js',
  output: {
    // path.join() 去拼接路径
    // __dirname 当前文件的绝对路径
    filename: 'bundle.js',
    path: path.join(__dirname, './dist')
  },
  module: {
    rules: [
      {
        // sass-loader node-sass两个依赖都需要安装
        test: /\.(scss|sass)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false
            }
          }
        ]
      },
      // {
      //   test: /\.(png|svg|jpg|gif)$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         esModule: false
      //       }
      //     }
      //   ]
      // },
      {
        test: /\.(jpg|png|gif)$/i,  //i表示忽略图片格式大小写，例如.PNG
        use: [{
          loader: 'url-loader',  // url-loader依赖于file-loader所以这两个包都需要下载
          options: {
            limit: 5 * 1024,//如果图片小于5k，就使用base64处理，
            name: '[name].[ext]',//取hash值的前10位，[ext]:取原来的扩展名.jpg .png
            outputPath: 'imgs/'
          }
        }]
      }
    ]
  }
}

module.exports = config