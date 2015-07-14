var gulp = require('gulp'),
  stylus = require('gulp-stylus'),
  autoprefix = require('gulp-autoprefixer');

var paths = {
  stylus: ['stylus/*.styl']
};

//stylus to css
gulp.task('stylus', function() {
  return gulp.src(paths.stylus)
    .pipe(stylus())
    .pipe(autoprefix('last 2 versions'))
    .pipe(gulp.dest('stylesheets'));
});

gulp.task('watch', function() {
  gulp.watch(paths.stylus, ['stylus']);
});

gulp.task('default', ['stylus']);
