const gulp = require('gulp');
// const del = require('del');
const eslint = require('gulp-eslint');

// Configuration

const files = {
  projectSources: [
    'server.js',
    'src/**/*.js',
    'SwaggerBackend/**/*.js',
    'db/models/*.js',
    'e2e/*.js',
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

// const compilationMode = 'dev';
// const targetDirectory = 'build/';
// const tempDirectory = 'build/';

// Cleanup

/* function clean() {
  return del(['build', 'bin', 'dist', 'test-results']);
}*/

/**
 * Code validation
 * @return {Pipe}
 **/
function validateSources() {
  return gulp.src(files.projectSources)
      .pipe(eslint({configFile: '.eslintrc.js'}))
      .pipe(eslint.format())
      .pipe(eslint.failAfterError());
}

/**
 * @return {Pipe}
 */
function validateGulpfile() {
  return gulp.src(['gulpfile.js'])
      .pipe(eslint({configFile: '.eslintrc.js'}))
      .pipe(eslint.format())
      .pipe(eslint.failAfterError());
}

const codeValidation = gulp.parallel(validateSources, validateGulpfile);


// /**
//  * Assets
//  * @return {Pipe}
//  */
// function copyProjectAssets() {
//   return gulp.src(files.projectAssets)
//       .pipe(gulp.dest(targetDirectory + 'assets'));
// }
//
// /**
//  * @return {Pipe}
//  */
// function copyVendorAssets() {
//   return gulp.src(files.vendorAssets)
//       .pipe(gulp.dest(targetDirectory + 'fonts'));
// }
//
// const copyAssets = gulp.parallel(copyProjectAssets, copyVendorAssets);


// Common task definition

gulp.task('default', codeValidation);
// gulp.task('default', gulp.series('build'));
