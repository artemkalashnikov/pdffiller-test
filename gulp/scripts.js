// Copies Javascript to ./build directory, transpiles Javascript to ES2015 and uglifies it.
var gulp         = require('gulp'),
    babel        = require('gulp-babel'),
    uglify       = require('gulp-uglifyjs'),
    rename       = require('gulp-rename'),
    concat       = require('gulp-concat'),
    cfg          = require('../config.json');

gulp.task('scripts', function(){
    // take js files from config
    console.log(cfg.js);
    return gulp.src(cfg.js)
        // concat them to one file
        .pipe(concat('app.js'))
        // use babel to transpile JS
        .pipe(babel({
            presets: ['es2015']
        }))
        // save JS
        .pipe(gulp.dest(cfg.build.js))
        // compress JS
        .pipe(uglify())
        // rename compressed JS
        .pipe(rename({
            extname: '.min.js'
        }))
        // save renamed and compressed JS
        .pipe(gulp.dest(cfg.build.js));
});

gulp.task('scripts:watch', function () {
    gulp.watch(cfg.src.js + '/**/*', ['scripts']);
});
