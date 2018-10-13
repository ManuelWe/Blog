const gulp = require('gulp');
const del = require('del');
const eslint = require('gulp-eslint');
const jsdoc = require('gulp-jsdoc3');
const mocha = require('gulp-mocha');
const jsValidate = require('gulp-jsvalidate');


const files = {
  projectJsSources: [
    'server.js',
    'controllers/*.js',
    'service/*.js',
    'tests/*.js',
    'utils/*.js',
  ],
  filesToDocument: [
    '../README.md',
    'controllers/*.js',
    'service/*.js',
    'utils/*.js',
  ],
};


/**
 * Delete documentation
 * @return {*}
 */
function clean() {
  return del(['docs']);
}


/**
 * Javascript style validation
 * @return {Stream}
 **/
function validateJsSourcesStyle() {
  return gulp.src(files.projectJsSources)
      .pipe(eslint({configFile: '.eslintrc.js'}))
      .pipe(eslint.format())
      .pipe(eslint.failAfterError());
}


/**
 * Javascript syntax validation
 * @return {Stream}
 */
function validateJsSourcesSyntax() {
  return gulp.src(files.projectJsSources)
      .pipe(jsValidate());
}


/**
 * gulpfile style validation
 * @return {Stream}
 */
function validateGulpfile() {
  return gulp.src(['gulpfile.js'])
      .pipe(eslint({configFile: '.eslintrc.js'}))
      .pipe(eslint.format())
      .pipe(eslint.failAfterError());
}


/**
 * Mocha backend unit tests
 * @return {Stream}
 */
function executeBackendUnitTests() {
  return gulp.src(files.projectJsSources, {read: false})
      .pipe(mocha({exit: true}));
}


/**
 * Generate documentation from js files
 * @return {Stream}
 */
function generateJsDocumentation() {
  let config = require('./jsdocConfig');
  return gulp.src(files.filesToDocument, {read: false})
      .pipe(jsdoc(config));
}


// Common task definition
gulp.task('validate', gulp.parallel(validateJsSourcesStyle, validateJsSourcesSyntax, validateGulpfile));
gulp.task('test', executeBackendUnitTests);
gulp.task('doc', gulp.series(clean, generateJsDocumentation));
gulp.task('default', gulp.series('validate', 'test', 'doc'));
