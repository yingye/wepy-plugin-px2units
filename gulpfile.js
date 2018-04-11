const gulp = require("gulp");
const plumber = require("gulp-plumber");
const gutil = require("gulp-util");
const babel = require("gulp-babel");

gulp.task("build", () => {
  return gulp.src('./src/**/*.js')
    .pipe(plumber({
      errorHandler (err) { gutil.log(err.message + '\r\n' + err.codeFrame); }
    }))
    .pipe(babel())
    .pipe(gulp.dest('dist'));
});

gulp.task("default", ["build"]);
