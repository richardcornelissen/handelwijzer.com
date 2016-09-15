// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');


gulp.task('sass', function() {
    gulp.src('css/**/*.scss')
        .pipe(sass())
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.init())
        .pipe(cleanCSS())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(function(f) {
            return f.base;
        }))
});

gulp.task('css-minify', function(){
    gulp.src(['css/**/*.css', '!css/**/*.min.css'])
        .pipe(rename({suffix: '.min'}))
        .pipe(cleanCSS())//TODO sourcemaps
        .pipe(gulp.dest(function(f) {
            return f.base;
        }))
});

gulp.task('default', ['sass'], function() {
    gulp.watch('css/**/*.scss', ['sass']);
    gulp.watch(['css/**/*.css', '!css/**/*.min.css'], ['css-minify']);
})