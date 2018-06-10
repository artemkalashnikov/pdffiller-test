// Generates CSS files out of SASS files, autoprefixing needed rules and minifying CSS.
var gulp         = require('gulp'),
	sass         = require('gulp-sass'),
	cfg          = require('../config.json'),
	postcss      = require('gulp-postcss'),
	autoprefixer = require('autoprefixer'),
    rename       = require('gulp-rename'),
    minifycss    = require('gulp-csso');


gulp.task('sass', function () {
  return gulp.src(cfg.src.sass + '/**/*.{scss,sass}')
    // check for errors
    .pipe(sass().on('error', sass.logError))
    // apply autoprefixer
    .pipe(postcss([ autoprefixer() ]))
    // save prefixed css
    .pipe(gulp.dest(cfg.build.css))
    // minify css file
    .pipe(minifycss())
    // rename css file
    .pipe(rename({
        extname: '.min.css'
    }))
    // save minified css file to another file in same dir
    .pipe(gulp.dest(cfg.build.css));
});

gulp.task('sass:watch', function () {
 	gulp.watch(cfg.src.sass + '/**/*.{scss,sass}', ['sass']);
});
