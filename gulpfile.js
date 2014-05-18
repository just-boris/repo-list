/*jshint node:true*/
var fs = require('fs'),
    path = require('path'),
    gulp = require('gulp'),
    clean = require('gulp-clean'),
    layoutize = require("gulp-layoutize");

function getFrameworks() {
    var ignoredDirs = ['node_modules', 'dist', 'assets'];
    return fs.readdirSync('./').filter(function(name) {
        return name.charAt(0) !== '.' && ignoredDirs.indexOf(name) === -1 && fs.statSync(name).isDirectory();
    });
}

gulp.task('layoutize', ['clean'], function() {
    return gulp.src(['index.html', '*/index.html', '!dist/**'])
        .pipe(layoutize({
            templatePath: 'layout.tpl.html',
            engine: 'ejs',
            locals: {
                frameworks:  getFrameworks(),
                isActive: function(file, framework) {
                    return file.path.indexOf(framework) > -1;
                }
            }
        }))
        .pipe(gulp.dest('dist/'))
});

gulp.task('clean', function() {
    return gulp.src('dist/', {read: false})
        .pipe(clean());
});

gulp.task('copy', ['clean'], function() {
    return gulp.src(['*/**', '!*/index.html', '!node_modules/**', '!dist/**'])
        .pipe(gulp.dest('dist/'))
});


gulp.task('default', ['copy', 'layoutize']);
