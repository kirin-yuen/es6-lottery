const gulp = require('gulp'),
    gulpIf = require('gulp-if'),
    liverelaod = require('gulp-livereload'),
    args = require('./util/args');

gulp.task('css', () => {
    return gulp.src('app/**/*.css')
        .pipe(gulp.dest('server/public'))
        .pipe(gulpIf(args.watch, liverelaod()));
});