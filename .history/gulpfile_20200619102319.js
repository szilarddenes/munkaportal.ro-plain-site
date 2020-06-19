const gulp = require('gulp');

gulp
  .src('./**/', {cwd: '../'})
  .pipe(gulp.dest('../target/dist'))
;
/*
 -- TOP LEVEL FUNCTIONS --
gulp.task -define tasks
gulp.src - points to files to use
gulp.dest - points tofolder to output
gulp.watch - watch files and folders for changes

*/
// //basic paths
// const path = require('path');
// const appRoot = require('app-root-path');

// gulp.task('pathOut', function() {

//     // Function to calculate directory depth
//     const dirDepth = (myDir) => {
//         return myDir.split(path.sep).length;
//     };

//     console.log('Current directory = ' + __dirname);
//     console.log('Root direcotry = ' + appRoot.path);
//     console.log('Depth difference = ' + (dirDepth(__dirname) - dirDepth(appRoot.path)));

//     var rel = '..' + path.sep;
//     var depth = dirDepth(__dirname) - dirDepth(appRoot.path);
//     var relPath = rel.repeat(depth);

//     console.log('Relative path from current folder to root is: ' + relPath);

//     var pkg = require(relPath + 'package.json');

//     console.log('Test to see if it works: ' + pkg.name);
//     done();
// });


//logs message

gulp.task('message', function(done) {
    return console.log('Gulp is running...yeee ');
    done();
});

// gulp.task('default', function(done) {
//     return console.log('Gulp is running...yeee ');
//     done();
// });



//copyhtml file 

gulp.task('copyHtml', function(masol) {
    gulp.src('test/*.html')
    // gulp.src("../munkaportalv2/*.html")
        .pipe(gulp.dest('dist'));
    masol();
});