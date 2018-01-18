var gulp = require('gulp');
var less = require('gulp-less');
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");

gulp.task('less', function() {
    gulp.src('less/style.less')
        .pipe(less())
        .pipe(gulp.dest('css'))
        .pipe(plumber())
        .pipe(postcss([
      autoprefixer()
    ]))
});