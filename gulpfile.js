const gulp = require('gulp');
const del = require('del');
const eslint = require('gulp-eslint');
const jsdoc = require('gulp-jsdoc3');
const tslint = require('gulp-tslint');
const typedoc = require('gulp-typedoc');
const mocha = require('gulp-mocha');


const files = {
  projectJsSources: [
    'server.js',
    'src/**/*.js',
    'SwaggerBackend/**/*.js',
    'db/models/*.js',
    'e2e/*.js',
  ],
  projectTsSources: [
    'e2e/src/*.ts',
    'src/**/*.ts',
  ],
};


/**
 * Cleanup
 * @return {*}
 */
function clean() {
  return del(['build', 'bin', 'dist', 'test-results']);
}

/**
 * Javascript Code validation
 * @return {*}
 **/
function validateJsSources() {
  return gulp.src(files.projectJsSources)
      .pipe(eslint({configFile: '.eslintrc.js'}))
      .pipe(eslint.format())
      .pipe(eslint.failAfterError());
}

/**
 * Typescript Code validation
 * @return {*}
 */
function validateTsSources() {
  return gulp.src(files.projectTsSources)
      .pipe(tslint({
        formatter: 'verbose',
      }))
      .pipe(tslint.report());
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

const codeValidation = gulp.parallel(validateJsSources, validateTsSources, validateGulpfile);


/**
 * @return {*}
 */
function executeBackendUnitTests() {
  return gulp.src(files.projectJsSources, {read: false})
      .pipe(mocha({exit: true}));
}

const executeTests = gulp.parallel(executeBackendUnitTests);


/**
 * @return {*}
 */
function generateJsDocumentation() {
  let config = require('./jsdocConfig');
  return gulp.src(['README.md', './SwaggerBackend/**/*.js'], {read: false})
      .pipe(jsdoc(config));
}

/**
 * @return {*}
 */
function generateTsDocumentation() {
  return gulp
      .src(files.projectTsSources)
      .pipe(typedoc({
        module: 'commonjs',
        target: 'es6',
        out: 'docs/Frontend',
        name: 'Blog',
        experimentalDecorators: true,
      }))
  ;
}

const documentation = gulp.parallel(generateJsDocumentation, generateTsDocumentation);


// Common task definition
// TODO validation
gulp.task('build', gulp.series(clean, codeValidation, executeTests, documentation));
gulp.task('default', gulp.series(codeValidation));
