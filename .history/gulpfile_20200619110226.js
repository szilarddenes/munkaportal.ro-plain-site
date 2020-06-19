const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

gulp.src('./**/', { cwd: '../' }).pipe(gulp.dest('../gdist'));
/*
 -- TOP LEVEL FUNCTIONS --
gulp.task -define tasks
gulp.src - points to files to use
gulp.dest - points tofolder to output
gulp.watch - watch files and folders for changes */

//logs message

gulp.task('message', function (done) {
  return console.log('Gulp is running...yeee ');
  done();
});

//copyhtml file

gulp.task('copyHtml', function (masol) {
  gulp
    .src('*.html')
    // gulp.src("../munkaportalv2/*.html")
    .pipe(gulp.dest('gdist'));
  masol();
});

// optimize images

gulp.task('imageMin', () =>
  gulp.src('img/*').pipe(imagemin()).pipe(gulp.dest('gdist/img'))
);

// minify js
gulp.task('minify', function(){
    gulp.src('/js/*.js')
    pipe(uglify)

});