var gulp = require('gulp');

// templates
var htmlmin = require('gulp-htmlmin');
var htmlImport = require('gulp-html-import');

gulp.task('templates', function() {
  gulp.src('./dev/*.html')
    .pipe(htmlImport('./dev/html/'))
    .pipe(htmlmin({
        // collapseWhitespace: true
    }))
    .pipe(gulp.dest('./site/'));
});


// styles
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');

gulp.task('styles', function() {
    gulp.src('./dev/scss/style.scss')
        .pipe(sass({
            errLogToConsole: true,
            includePaths: ['./dev/scss'],
            outputStyle: 'compressed'
        }))
        .pipe(prefix("last 2 version"))
        .pipe(gulp.dest('./site/assets/'));
});

// images 
var imagemin = require('gulp-imagemin');

gulp.task('images', function () {
    gulp.src('./dev/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./site/images'));

});

// scripts
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('scripts', function() {
    gulp.src(['./dev/js/jquery.min.js', './dev/js/*.js'])
        .pipe(concat('script.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./site/assets/'));
});

gulp.task('watch', function() {
    gulp.watch('./dev/js/**/*.js', ['scripts']);
    gulp.watch('./dev/scss/**/*.scss', ['styles']);
    gulp.watch('./dev/**/*.html', ['templates']);
    gulp.watch('images/**/*.{png,jpg,jpeg,gif,svg}', {cwd: './dev/'}, ['images']);
    
});

gulp.task('default', ['styles', 'scripts', 'images', 'templates']);
gulp.task('dev', ['default', 'watch']);
gulp.task('prod', ['default']);
