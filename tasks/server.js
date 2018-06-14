const gulp = require('gulp'),
    gulpIf = require('gulp-if'),
    liverelaod = require('gulp-livereload'),
    liveServer = require('gulp-live-server'),
    args = require('./util/args');

gulp.task('server', (cb) => {
    if (!args.watch) return cb();

    // 创建并启动服务器
    var server = liveServer.new(['--harmony', 'server/bin/www']);
    server.start();

    // 监听前端资源文件变化通知服务器
    gulp.watch(['server/public/**/*.js', 'server/views/**/*.ejs'], (file) => {
        server.notify.apply(server, [file]);
    });

    // 监听服务器文件变化重启服务器
    gulp.watch(['server/routes/**/*.js', 'server/app.js'], () => {
        server.start.bind(server)();
    });
});