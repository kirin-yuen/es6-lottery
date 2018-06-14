const gulp = require('gulp'),
    gulpIf = require('gulp-if'),
    concat = require('gulp-concat'),
    webpack = require('webpack'),
    webpackStream = require('webpack-stream'),
    named = require('vinyl-named'),
    liverelaod = require('gulp-livereload'),
    plumber = require('gulp-plumber'), // 改变 gulp 默认处理错误机制
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    args = require('./util/args');

import { log, colors } from 'gulp-util';

gulp.task('scripts', () => {
    return gulp.src('app/js/index.js')
        .pipe(plumber({
            errorHandle: () => {}
        }))
        .pipe(named())
        .pipe(webpackStream({
            module: {
                rules: [{
                    test: /\.js$/,
                    use: 'babel-loader'
                }]
            }
        }), null, (err, status) => {
            log(`Finished ${colors.cyan('scripts')}`, status.toString({
                chunks: false
            }))
        })
        .pipe(gulp.dest('server/public/js'))
        .pipe(rename({
            basename: 'cp',
            extname: '.min.js'
        }))
        .pipe(uglify({
            compress: {
                properties: false
            },
            output: {
                'quote_keys': true
            }
        }))
        .pipe(gulp.dest('server/public/js'))
        .pipe(gulpIf(args.watch, liverelaod()));
});