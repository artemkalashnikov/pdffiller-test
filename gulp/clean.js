// Deletes ./build directory.
var gulp  = require('gulp'),
    clean = require('gulp-clean'),
    cfg   = require('../config.json');

// This task deletes build dir.
gulp.task('clean', function () {
    return gulp.src(cfg.build.root, {read: false})
        .pipe(clean());
});
