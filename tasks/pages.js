const gulp = require('gulp'),
    gulpIf = require('gulp-if'),
    liverelaod = require('gulp-livereload'),
    args = require('./util/args');

gulp.task('pages', () => {
    return gulp.src('app/**/*.ejs')
        .pipe(gulp.dest('server'))
        .pipe(gulpIf(args.watch, liverelaod()));
});