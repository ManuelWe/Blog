var gulp = require('gulp');
var del = require('del');
var eslint = require('gulp-eslint');

// Configuration

var files = {
  projectSources: [
    'src/**/*.js',
    '!src/**/*.spec.js',
  ],
  projectTestSources: [
    'src/**/*.spec.js',
    'e2e-tests/**/*.js',
  ],
  projectAssets: [
    'src/assets/**',
  ],
  vendorAssets: [
    'node_modules/bootstrap/fonts/*',
  ],
};

var compilationMode = 'dev';
var targetDirectory = 'build/';
var tempDirectory = 'build/';
var webConfigDirectory;

// Cleanup

function clean() {
  return del(['build', 'bin', 'dist', 'test-results']);
}

// Code validation

function validateSources() {
  return gulp.src(files.projectSources)
    .pipe(eslint({ configFile: '.eslintrc.json' }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
}

function validateGulpfile() {
  return gulp.src(['gulpfile.js'])
    .pipe(eslint({ configFile: '.eslintrc.json' }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
}

var codeValidation = gulp.parallel(validateSources, validateGulpfile);

// Assets

function copyProjectAssets() {
  return gulp.src(files.projectAssets)
    .pipe(gulp.dest(targetDirectory + 'assets'));
}

function copyVendorAssets() {
  return gulp.src(files.vendorAssets)
    .pipe(gulp.dest(targetDirectory + 'fonts'));
}

var copyAssets = gulp.parallel(copyProjectAssets, copyVendorAssets);


// Common task definition

gulp.task('build', gulp.series(clean, codeValidation, codeCompilation));
gulp.task('default', gulp.series('build'));
