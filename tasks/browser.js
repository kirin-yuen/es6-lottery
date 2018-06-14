const gulp = require('gulp'),
    gulpIf = require('gulp-if'),
    liverelaod = require('gulp-util'),
    args = require('./util/args');

gulp.task('browser', (cb) => {
    if (!args.watch) return cb();

    gulp.watch('app/**/*.js', ['scripts']);
    gulp.watch('app/**/*.ejs', ['pages']);
    gulp.watch('app/**/*.css', ['css']);
});