/**
 *  Welcome to your gulpfile!
 *  The gulp tasks are splitted in several files in the gulp directory
 *  because putting all here was really too long
 */

'use strict';

var gulp = require('gulp');
var connect = require('gulp-connect-php');
var wrench = require('wrench');

/**
 * Create a task to serve the app
 * Source : https://scotch.io/tutorials/use-gulp-to-start-a-laravel-php-server
 */
gulp.task('connect', function() {

    // start the php server
    // make sure we use the public directory since this is Laravel
    connect.server({
        base: '../api/server.php'
    });

});

// Launch the Laravel server.
gulp.task('default', ['connect']);

/**
 *  This will load all js or coffee files in the gulp directory
 *  in order to load all gulp tasks
 */
wrench.readdirSyncRecursive('./gulp').filter(function(file) {
 	return (/\.(js|coffee)$/i).test(file);
}).map(function(file) {
 	require('./gulp/' + file);
});


/**
 *  Default task clean temporaries directories and launch the
 *  main optimization build task
 */
gulp.task('default', ['clean'], function () {
 	gulp.start('build');
});
