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
 * Cleanup
 * @return {*}
 */
function clean() {
  return del(['build', 'bin', 'dist', 'docs']);
}

/**
 * Javascript Code validation
 * @return {*}
 **/
function validateJsSourcesStyle() {
  return gulp.src(files.projectJsSources)
      .pipe(eslint({configFile: '.eslintrc.js'}))
      .pipe(eslint.format())
      .pipe(eslint.failAfterError());
}

/**
 *
 * @return {*}
 */
function validateJsSourcesSyntax() {
  return gulp.src(files.projectJsSources)
      .pipe(jsValidate());
}


/**
 * gulpfile validation
 * @return {*}
 */
function validateGulpfile() {
  return gulp.src(['gulpfile.js'])
      .pipe(eslint({configFile: '.eslintrc.js'}))
      .pipe(eslint.format())
      .pipe(eslint.failAfterError());
}

const codeValidation = gulp.parallel(validateJsSourcesStyle, validateJsSourcesSyntax, validateGulpfile);


/**
 * @return {*}
 */
function executeBackendUnitTests() {
  return gulp.src(files.projectJsSources, {read: false})
      .pipe(mocha({exit: true}));
}

const executeTests = executeBackendUnitTests;


/**
 * @return {*}
 */
function generateJsDocumentation() {
  let config = require('./jsdocConfig');
  return gulp.src(files.filesToDocument, {read: false})
      .pipe(jsdoc(config));
}

const documentation = generateJsDocumentation;


// Common task definition
// TODO validation
gulp.task('build', gulp.series(clean, codeValidation, executeTests, documentation));
gulp.task('default', gulp.series(codeValidation));
