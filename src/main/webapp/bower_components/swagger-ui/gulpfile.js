'use strict';

var gulp = require('gulp');
var es = require('event-stream');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var less = require('gulp-less');
var handlebars = require('gulp-handlebars');
var wrap = require('gulp-wrap');
var declare = require('gulp-declare');
var watch = require('gulp-watch');
var connect = require('gulp-connect');
var header = require('gulp-header');
<<<<<<< HEAD
var pkg = require('./package.json');
var order = require('gulp-order');
var jshint = require('gulp-jshint');
=======
var order = require('gulp-order');
var jshint = require('gulp-jshint');
var pkg = require('./package.json');

>>>>>>> 533092147c410637b99bf57166ee237aec486555
var banner = ['/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @version v<%= pkg.version %>',
  ' * @link <%= pkg.homepage %>',
  ' * @license <%= pkg.license %>',
  ' */',
  ''].join('\n');

/**
 * Clean ups ./dist folder
 */
gulp.task('clean', function() {
  return gulp
    .src('./dist', {read: false})
    .pipe(clean({force: true}))
    .on('error', log);
});

/**
<<<<<<< HEAD
 * Processes Handlebars templates
 */
function templates() {
  return gulp
    .src(['./src/main/template/**/*'])
    .pipe(handlebars())
    .pipe(wrap('Handlebars.template(<%= contents %>)'))
    .pipe(declare({
      namespace: 'Handlebars.templates',
      noRedeclare: true, // Avoid duplicate declarations
    }))
    .on('error', log);
}

/**
=======
>>>>>>> 533092147c410637b99bf57166ee237aec486555
 * JShint all *.js files
 */
gulp.task('lint', function () {
  return gulp.src('./src/main/javascript/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

/**
 * Build a distribution
 */
<<<<<<< HEAD
gulp.task('dist', ['clean','lint'], function() {

  return es.merge(
      gulp.src([
        './src/main/javascript/**/*.js',
        './node_modules/swagger-client/browser/swagger-client.js'
      ]),
      templates()
=======
gulp.task('dist', ['clean', 'lint'], _dist);
function _dist() {
  return es.merge(
    gulp.src([
        './node_modules/es5-shim/es5-shim.js',
        './src/main/javascript/**/*.js',
        './node_modules/swagger-client/browser/swagger-client.js'
      ]),
      gulp
        .src(['./src/main/template/**/*'])
        .pipe(handlebars())
        .pipe(wrap('Handlebars.template(<%= contents %>)'))
        .pipe(declare({
          namespace: 'Handlebars.templates',
          noRedeclare: true, // Avoid duplicate declarations
        }))
        .on('error', log)
>>>>>>> 533092147c410637b99bf57166ee237aec486555
    )
    .pipe(order(['scripts.js', 'templates.js']))
    .pipe(concat('swagger-ui.js'))
    .pipe(wrap('(function(){<%= contents %>}).call(this);'))
<<<<<<< HEAD
    .pipe(header(banner, { pkg: pkg } ))
=======
    .pipe(header(banner, { pkg: pkg }))
>>>>>>> 533092147c410637b99bf57166ee237aec486555
    .pipe(gulp.dest('./dist'))
    .pipe(uglify())
    .on('error', log)
    .pipe(rename({extname: '.min.js'}))
    .on('error', log)
    .pipe(gulp.dest('./dist'))
    .pipe(connect.reload());
<<<<<<< HEAD
});
=======
}
gulp.task('dev-dist', ['lint', 'dev-copy'], _dist);
>>>>>>> 533092147c410637b99bf57166ee237aec486555

/**
 * Processes less files into CSS files
 */
<<<<<<< HEAD
gulp.task('less', ['clean'], function() {

=======
gulp.task('less', ['clean'], _less);
function _less() {
>>>>>>> 533092147c410637b99bf57166ee237aec486555
  return gulp
    .src([
      './src/main/less/screen.less',
      './src/main/less/print.less',
      './src/main/less/reset.less',
      './src/main/less/style.less'
    ])
    .pipe(less())
<<<<<<< HEAD
    .on('error', log)
    .pipe(gulp.dest('./src/main/html/css/'))
    .pipe(connect.reload());
});

=======
    .on('error', function(err){ log(err); this.emit('end');})
    .pipe(gulp.dest('./src/main/html/css/'))
    .pipe(connect.reload());
}
gulp.task('dev-less', _less);
>>>>>>> 533092147c410637b99bf57166ee237aec486555

/**
 * Copy lib and html folders
 */
<<<<<<< HEAD
gulp.task('copy', ['less'], function() {

  // copy JavaScript files inside lib folder
  gulp
    .src(['./lib/**/*.{js,map}'])
=======
gulp.task('copy', ['less'], _copy);
function _copy() {
  // copy JavaScript files inside lib folder
  gulp
    .src(['./lib/**/*.{js,map}', './node_modules/es5-shim/es5-shim.js'])
>>>>>>> 533092147c410637b99bf57166ee237aec486555
    .pipe(gulp.dest('./dist/lib'))
    .on('error', log);

  // copy `lang` for translations
  gulp
    .src(['./lang/**/*.js'])
    .pipe(gulp.dest('./dist/lang'))
    .on('error', log);

  // copy all files inside html folder
  gulp
    .src(['./src/main/html/**/*'])
    .pipe(gulp.dest('./dist'))
    .on('error', log);
<<<<<<< HEAD
=======
}
gulp.task('dev-copy', ['dev-less', 'copy-local-specs'], _copy);

gulp.task('copy-local-specs', function () {
  // copy the test specs
  return gulp
    .src(['./test/specs/**/*'])
    .pipe(gulp.dest('./dist/specs'))
    .on('error', log);
>>>>>>> 533092147c410637b99bf57166ee237aec486555
});

/**
 * Watch for changes and recompile
 */
<<<<<<< HEAD
gulp.task('watch', function() {
  return watch(['./src/**/*.{js,less,handlebars}'], function() {
    gulp.start('default');
  });
=======
gulp.task('watch', ['copy-local-specs'], function() {
  return watch([
    './src/**/*.{js,less,handlebars}',
    './src/main/html/*.html',
    './test/specs/**/*.{json,yaml}'
    ],
    function() {
      gulp.start('dev-dist');
    });
>>>>>>> 533092147c410637b99bf57166ee237aec486555
});

/**
 * Live reload web server of `dist`
 */
gulp.task('connect', function() {
  connect.server({
    root: 'dist',
    livereload: true
  });
});

function log(error) {
  console.error(error.toString && error.toString());
}

<<<<<<< HEAD

gulp.task('default', ['dist', 'copy']);
gulp.task('serve', ['connect', 'watch']);
=======
gulp.task('default', ['dist', 'copy']);
gulp.task('serve', ['connect', 'watch']);
gulp.task('dev', ['default'], function () {
  gulp.start('serve');
});
>>>>>>> 533092147c410637b99bf57166ee237aec486555
