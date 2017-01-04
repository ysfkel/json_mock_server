var gulp = require('gulp');
var merge = require('gulp-merge-json');



gulp.task('default', function() {
    gulp.src('./mock/files/**/*.json')
        .pipe(merge('db.json'))
        .pipe(gulp.dest('./mock/data'))
})