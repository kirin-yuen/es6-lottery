const gulp = require('gulp'),
    gulpSequence = require('gulp-sequence');

gulp.task('build', gulpSequence('clean', 'css', 'pages', 'scripts', ['browser', 'server']));