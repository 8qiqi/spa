# 第 2 章：自动化构建

## 任务 1：阅读参考资料

- 自动化构建：https://en.wikipedia.org/wiki/Build_automation
- 持续集成：https://en.wikipedia.org/wiki/Continuous_integration
- Grunt：https://www.gruntjs.net/
- Travis-CI: https://travis-ci.org/
- Google PageSpeed Insights: https://developers.google.com/speed/pagespeed/insights/
- 站长工具：http://tool.chinaz.com/

## 任务 2：在线电子书

要求：
- 在 GitHub 上创建 book 仓库
- 在 book 仓库的 master 分支放置电子书的章节和目录的 MarkDown 文档
- 在 book 仓库的 gh-pages 分支放置 gitbook build 后的 HTML 文件
- 电子书的前两章用手动构建，并完成第一次发布上线
- 用 Chrome 浏览器查看在线电子书
- 增加电子书的第三章，继续使用手动构建，并完成第二次发布上线
- 用 Chrome 浏览器查看更新后的电子书
- 体验手动构建的繁琐，考虑哪些构建过程可以自动化完成
- 阅读 [Travis-CI gh-gage 自动部署文章](https://segmentfault.com/a/1190000015274243)
- 配置电子书 book 仓库启用 Travis-CI
- 获取个人 GitHub 账户开发者 API token
- 配置 book 仓库的 Travis-CI 环境变量
- 在 book 仓库的 master 分支，添加 .travis.yml 和 package.json 文件
- 在 book 仓库增加第四章的 MarkDown 文件
- 将 master 分支的变更推送 GitHub 服务器
- 在 Travis-CI 网站查看自动构建脚本执行的情况
- 用 Chrome 浏览器查看自动构建后的电子书

## 任务 3：LESS 预处理

要求：
- 阅读 [grunt-contrib-less 插件文档](https://www.npmjs.com/package/grunt-contrib-less)
- 在 GitHub 上创建 grunt-demo 仓库
- 在 grunt-demo 仓库添加 less 分支
- 在 less 分支添加 index.html 页面和 LESS 样式
- 安装 grunt-contrib-less 插件
- 添加 Gruntfile.js，实现 LESS 预处理
- 执行自动化任务，观察自动化构建执行的效果

## 任务 4：HTML 静态代码检查

要求：
- 阅读 [grunt-htmlhint 插件文档](https://www.npmjs.com/package/grunt-htmlhint)
- 阅读 [htmlhint 规则文档](https://segmentfault.com/a/1190000013276858)
- 在 grunt-demo 仓库添加 htmlhint 分支
- 在 htmlhint 分支复制 rectangle 仓库的 index.html、rectangle.css 和 rectangle.js 三个代码文件
- 添加 .htmlhintrc 配置文件
- 安装 grunt、grunt-htmlhint 插件
- 添加 Gruntfile.js，对 HTML 代码做静态代码检查
- 执行自动化任务，观察自动化构建执行的效果

## 任务 5：CSS 静态代码检查

要求：
- 阅读 [grunt-contrib-csslint 插件文档](https://www.npmjs.com/package/grunt-contrib-csslint)
- 阅读 [csslint 规则文档](https://github.com/CSSLint/csslint/wiki/Rules)
- 在 grunt-demo 仓库添加 csslint 分支
- 在 csslint 分支复制 rectangle 仓库的 index.html、rectangle.css 和 rectangle.js 三个代码文件
- 添加 .csslintrc 配置文件
- 安装 grunt、grunt-contrib-csslint 插件
- 添加 Gruntfile.js，对 CSS 代码做静态代码检查
- 执行自动化任务，观察自动化构建执行的效果

## 任务 6：JavaScript 静态代码检查

要求：
- 阅读 [grunt-eslint 插件文档](https://www.npmjs.com/package/grunt-eslint)
- 阅读 [eslint 规则文档](http://eslint.cn/docs/rules/)
- 在 grunt-demo 仓库添加 eslint 分支
- 在 eslint 分支复制 rectangle 仓库的 index.html、rectangle.css 和 rectangle.js 三个代码文件
- 添加 .eslintrc.json 配置文件
- 安装 grunt、grunt-eslint 插件
- 添加 Gruntfile.js，对 JavaScript 代码做静态代码检查
- 执行自动化任务，观察自动化构建执行的效果

## 任务 7：矩形计算器 v0.2

要求：
- 切换到 rectangle 项目仓库
- 添加自动化构建脚本 Gruntfile.js
- 对 HTML、CSS 和 JavaScript 代码实现静态代码检查
- 添加 Travis CI 配置脚本，实现代码在 gh-pages 分支的自动发布
- 用 chrome 浏览器查看自动化构建并发布的 rectangle 应用

## 任务 8：阅读单元测试参考资料

- 单元测试准则：https://github.com/yangyubo/zh-unit-testing-guidelines/blob/master/readme.rst
- JavaScript与QA工程师(理论篇) ：https://github.com/hubvue/nota/issues/26
- 自动化、跨浏览器的 JavaScript 单元测试：https://www.zcfy.cc/article/learning-how-to-set-up-automated-cross-browser-javascript-unit-testing-mdash-philip-walton
- Mocha 官网：https://mochajs.org/
- Mocha 中文文档：https://segmentfault.com/a/1190000011362879
- Chai 官网：https://www.chaijs.com/
- Istanbul 官网：https://istanbul.js.org/
- Istanbul 教程：http://www.ruanyifeng.com/blog/2015/06/istanbul.html
- Sinon 官网：https://sinonjs.org/
- Sinon 指南：https://www.zcfy.cc/article/sinon-tutorial-javascript-testing-with-mocks-spies-stubs-422.html

## 任务 9：服务端代码单元测试

要求：
- 在 grunt-demo 仓库，创建 mocha-be 分支
- 创建被测模块 add.js，被测模块暴露出 add 方法，实现 z = x + y
- 对 add.js 模块，编写 mocha 单元测试脚本
- 执行 mocha 命令，运行单元测试，查看单元测试输出结果
- 增加代码覆盖率测试
- 运行 mocha 命令，查看代码覆盖率报告
- 添加 grunt 插件支持，实现 grunt 单元测试

## 任务 10：服务端代码单元测试

要求：
- 在 grunt-demo 仓库，创建 entropy 分支
- 获取 entropy.js 被测程序，地址：https://github.com/wangding/nodejs-demo/blob/master/24-project/entropy.js
- 重构 entropy.js 代码，使其易于实施单元测试
- 添加 mocha 单元测试代码，执行单元测试
- 运行 grunt mocha 单元测试，查看单元测试输出结果
- 查看代码覆盖率报告 

## 任务 8：打包合并

要求：
- 创建测试项目
- 添加 Gruntfile.js，实现打包合并
- 执行自动化任务，观察自动化构建执行的效果

## 任务 9：压缩图片

要求：
- 创建测试项目
- 添加 Gruntfile.js，实现图片压缩
- 执行自动化任务，观察自动化构建执行的效果

## 任务 10：合并子图

要求：
- 创建测试项目
- 添加 Gruntfile.js，实现子图合并
- 执行自动化任务，观察自动化构建执行的效果

## 任务 11：自定义任务

要求：
- 创建测试项目
- 添加 Gruntfile.js，实现自定义任务
- 执行自动化任务，观察自动化构建执行的效果

## 任务 12：矩形计算器 v0.3

要求：
- 切换到 rectangle 项目仓库
- 添加自动化构建脚本 Gruntfile.js
- 对 HTML、CSS 和 JavaScript 代码实现压缩优化
- 添加 Travis CI 配置脚本，实现代码在 gh-pages 分支的自动发布
- 用 chrome 浏览器查看自动化构建并发布的 rectangle 应用

## 任务 13：矩形计算器 v0.4

要求：
- 增加网站图标，Chrome 开发者工具的控制台窗口，不要输出错误
- 添加页面初始焦点，初始焦点设置为第一个文本框
- 计算结果文本框不可编辑
- 设备自适应，页面在手机上可以正常显示
- 增加必填字段提示
- 不用考虑数据合法性校验
- 将 master 分支的代码变更推送 GitHub
- 用 Chrome 浏览器观察自动化构建并发布的 rectangle 应用

## 任务 14：矩形计算器 v1.0

要求：
- 重构 js 代码，提升代码的可测性
- 为 js 代码增加单元测试脚本
- 修改持续集成 .travis.yml 和 Gruntfile.js，添加单元测试自动化任
- 将 master 分支的代码变更提交仓库
- 用 Chrome 浏览器观察自动化构建并发布的 rectangle 应用



