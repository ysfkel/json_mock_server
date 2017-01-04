var gulp = require('gulp');
var merge = require('gulp-merge-json');
var cust = require('./customer.js')
var run = require('gulp-run');
var shell = require('gulp-shell')


var exec = require('child_process').exec;



gulp.task('run-num', function() {

    var cmd = new run.Command('node customer.js>db.json'); // create a command object for `cat`. 

    cmd.exec('start');
})




gulp.task('default', function() {
    gulp.src('./mock/files/**/*.json')
        .pipe(merge('db.json'))
        .pipe(gulp.dest('./mock/data'))
})