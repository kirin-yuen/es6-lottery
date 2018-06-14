# es6-lottery
es6 彩票项目

#### 目录结构
* `app` -> 前端源码
* `server` -> express 服务器程序
* `tasks` -> gulp 构建脚本


#### 利用 gulp 进行任务构建
* 自动编译 app 中 js 文件夹中 es6 -> es5 并拷贝到 express 里面的 public
* app 中 views css 文件夹中内容拷贝到 express 里面的 public
* 启动 express 服务
* 文件更新后通知服务器进行实时更新
