// Starts a local server at localhost:3000.
var gulp        = require('gulp'),
    browserSync = require('browser-sync').create(),
    cfg         = require('../config.json');

// Static server
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: cfg.build.root + "/",
        },
        notify: false,
        files: [
            cfg.build.root + '/*.html',
            cfg.build.css + '/*.css',
            cfg.build.js + '/*.js',
            cfg.build.images + '/**/*.*'
        ]
    });
});
