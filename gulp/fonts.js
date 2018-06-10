// Copies fonts to ./build directory.
var gulp     = require('gulp'),
    cfg      = require('../config.json'),
    clean    = require('gulp-clean');

gulp.task('fonts', function(){
    gulp.src(cfg.build.fonts, {read: false})
        .pipe(clean());
    return gulp.src(cfg.src.fonts+'/**/*')
        .pipe(gulp.dest(cfg.build.fonts));
});

gulp.task('fonts:watch', function () {
  gulp.watch(cfg.src.fonts+'/**/*', ['fonts']);
});
