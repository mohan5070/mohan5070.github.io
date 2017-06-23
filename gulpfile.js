var gulp = require('gulp'),
 less = require('gulp-less'),
livereload = require('gulp-livereload');

livereload({ start: true });
/* Task to compile less */
gulp.task('compile-less', function() {
  gulp.src('./less/style.less')
    .pipe(less({
        paths: [
          '.',
          './node_modules/bootstrap-less/bootstrap'
        ]
      }))
    .pipe(gulp.dest('./css/'))
    .pipe(livereload());
});

gulp.task('html', function() {
  gulp.src('./*.html')
      .pipe(livereload());
});

/* Task to watch less changes */
gulp.task('watch-less', function() {
  livereload.listen();
  gulp.watch('./less/*.less' , ['compile-less']);
  gulp.watch('./*.html', ['html']);
});



gulp.task('default', ['watch-less']);