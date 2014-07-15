var gulp = require('gulp');
var jscs = require('gulp-jscs');

gulp.task('lint', function() {
  return gulp.src([
    'src/*.js',
    'test/*.js'
  ]).pipe(jscs());
});
