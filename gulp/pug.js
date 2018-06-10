// Generates HTML files out of PUG templates.
var gulp    = require('gulp');
var pug     = require('gulp-pug');
var cfg     = require('../config.json'),
    plumber = require('gulp-plumber');

gulp.task('pug', function() {
    return gulp.src(cfg.src.pug + '/pages/*.pug')
    .pipe(plumber())
    .pipe(pug({
    pretty: true
    }))
    .pipe(gulp.dest(cfg.build.root));
});

gulp.task('pug:watch', function () {
    gulp.watch(cfg.src.pug + '/**/*.{jade,pug}', ['pug']);
});
