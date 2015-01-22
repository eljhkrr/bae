var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	minifycss = require('gulp-minify-css'),
	minifyhtml = require('gulp-minify-html'),
	imagemin = require('gulp-imagemin'),
	pngquant = require('imagemin-pngquant');

var options = ['-o5'];

gulp.task('minify-js', function(){
	gulp.src('src/js/*')
		.pipe(uglify())
		.pipe(gulp.dest('build/js'));
});

gulp.task('minify-css', function(){
	return gulp.src('src/css/*.css')
		.pipe(minifycss())
		.pipe(gulp.dest('build/css'));
});

gulp.task('minify-html', function(){
	gulp.src('src/*.html')
		.pipe(minifyhtml())
		.pipe(gulp.dest('build'));
	gulp.src('src/templates/*.html')
		.pipe(minifyhtml())
		.pipe(gulp.dest('build/templates'));
});

gulp.task('imagemin', function(){
	return gulp.src('src/images/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('build/images'));
});



gulp.task('default', ['minify-css', 'minify-js', 'minify-html', 'imagemin']);
