const gulp = require('gulp');
const del = require('del');
const eslint = require('gulp-eslint');
const tslint = require('gulp-tslint');
const typedoc = require('gulp-typedoc');
const validate = require('gulp-html-angular-validate');


const files = {
  projectTsSources: [
    'e2e/src/*.ts',
    'src/**/*.ts',
  ],
  projectHtmlSources: [
    'src/**/*.html',
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

/**
 * @return {*}
 */
function validateHtmlFiles() {
  const options = {
    angular: true,
    customattrs: ['*'],
    customtags: ['*'],
    emitError: true,
    /* reportFn: function(fileFailures) {
      for (let i = 0; i < fileFailures.length; i++) {
        let fileResult = fileFailures[i];
        gutil.log(fileResult.filepath);
        for (let j = 0; j < fileResult.errors.length; j++) {
          let err = fileResult.errors[j];
          if (err.line !== undefined) {
            gutil.log('[line' +err.line +', col: ' + err.col +'] ' +err.msg);
          } else {
            gutil.log(err.msg);
          }
        }
      }
    },*/
  };
  return gulp.src(files.projectHtmlSources)
      .pipe(validate(options));
}

const codeValidation = gulp.parallel(validateTsSources, validateHtmlFiles, validateGulpfile);

/* TODO add karma
function executeBackendUnitTests() {
  return gulp.src(files.projectJsSources, {read: false})
      .pipe(mocha({exit: true}));
}

const executeTests = gulp.parallel(executeBackendUnitTests);
*/


/**
 * @return {*}
 */
function generateTsDocumentation() {
  return gulp
      .src(files.projectTsSources)
      .pipe(typedoc({
        module: 'commonjs',
        target: 'es6',
        out: 'docs',
        name: 'Blog',
        experimentalDecorators: true,
      }))
  ;
}

const documentation = generateTsDocumentation;


// Common task definition
// TODO validation
gulp.task('build', gulp.series(clean, codeValidation, documentation));
gulp.task('default', gulp.series(codeValidation));
