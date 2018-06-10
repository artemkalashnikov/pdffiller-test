// Watches for changes in PUG templates, SASS and Javascript files, images and fonts.
var gulp = require('gulp');
var runseq = require('run-sequence');

gulp.task('watch', function(){
    runseq(
        'pug:watch',
        'sass:watch',
        'scripts:watch',
        'images:watch',
        'fonts:watch'
    );
});
