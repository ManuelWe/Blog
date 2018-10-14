const gulp = require('gulp');
const del = require('del');
const eslint = require('gulp-eslint');
const tslint = require('gulp-tslint');
const typedoc = require('gulp-typedoc');
const exec = require('child_process').exec;


const files = {
    projectTsSources: [
        'e2e/src/*.ts',
        'src/**/*.ts',
        'src/*.ts',
    ],
};


/**
 * Delete docs and builded angular files
 * @return {Stream}
 */
function clean() {
    return del(['dist', 'docs']);
}


/**
 * Typescript style validation
 * @return {Stream}
 */
function validateTsSources() {
    return gulp.src(files.projectTsSources)
        .pipe(tslint({
            formatter: 'verbose',
        }))
        .pipe(tslint.report());
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
 * Karma Frontend Unit Tests
 */
gulp.task('executeFrontendUnitTests', function(cb) {
    exec('ng test --watch=false', function(err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});


/**
 * Protractor E2E Tests
 */
gulp.task('executeE2ETests', function(cb) {
    exec('ng e2e', function(err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});


/**
 * Builds Angular into dist folder
 */
gulp.task('buildAngular', function(cb) {
    exec('ng build', function(err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});


/**
 * Generate Documentation from ts files
 * @return {Stream}
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


// Common task definition
gulp.task('validate', gulp.parallel(validateTsSources, validateGulpfile));
gulp.task('test', gulp.parallel('executeFrontendUnitTests', 'executeE2ETests'));
gulp.task('doc', gulp.series(clean, generateTsDocumentation));
gulp.task('build', gulp.series('buildAngular'));
gulp.task('default', gulp.series('validate', 'test', 'doc', 'build'));
