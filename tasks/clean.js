const gulp = require('gulp'),
    del = require('del'),
    args = require('./util/args');

gulp.task('clean', (cb) => {
    return del(['server/public', 'server/views']);
});