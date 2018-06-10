// Default task, that runs build task, watches for changes and starts a local server.
var gulp = require('gulp');
var runseq = require('run-sequence');

gulp.task('default', function(){
    runseq(
    	'build',
        'watch',
        'server'
    );
});
