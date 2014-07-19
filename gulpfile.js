var gulp = require('gulp');
var jscs = require('gulp-jscs');
var jscov = require('gulp-jscoverage');

gulp.task('jscs', function() {
  return gulp.src([
    'lib/*.js',
    'test/*.js'
  ]).pipe(jscs());
});

gulp.task('jscov', function() {
  gulp.src('lib/*.js')
    .pipe(jscov('index.js'))
    .pipe(gulp.dest('./lib-cov'));
});
