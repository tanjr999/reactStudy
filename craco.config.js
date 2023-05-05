// 添加自定义的webpack配置

const path = require('path')

module.exports = {
    // webpack配置
    webpack: {
        // 配置别名
        alias: {
            // 约定使用@符号表示src文件所在路径
            '@': path.resolve(__dirname, 'src')
        }
    }
}