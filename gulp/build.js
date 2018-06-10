// Builds the project and includes only needed files for it.
var gulp = require('gulp');
var runseq = require('run-sequence');

gulp.task('build', function(){
    runseq(
        'clean',
        'pug',
        'sass',
        'images',
        'fonts',
        'scripts'
    );
});
