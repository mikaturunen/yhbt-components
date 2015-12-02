"use strict";

/**
 * Gulp usage file for the whole project.
 */

var gulp = require("gulp");
var ts = require("gulp-typescript");
var eventStream = require("event-stream");
var jade = require("gulp-jade");
var tslint = require("gulp-tslint");
var sequence = require("run-sequence").use(gulp);
var babel = require("gulp-babel");
var path = require("path");

// Load the shared constants among the gulp files
var constants = require("../shared/gulp-common.json");

// JADE COMPILATION
gulp.task(constants.jadeTaskName, function() {
    return gulp
        .src("./**/*.jade")
        .pipe(jade())
        .pipe(gulp.dest(constants.releaseLocation));
});

// TYPESCRIPT COMPILATION
gulp.task(constants.tsTaskName, function() {
    return gulp
        .src( [
            path.join("../", constants.clientDefinitions)
        ].concat([ "./**/*.ts" ]) )
        // Pipe source to lint
        .pipe(tslint())
        .pipe(tslint.report("verbose"))
        // Push through to compiler
        .pipe(ts({
            typescript: require("typescript"),
            declarationFiles: true,
            noImplicitAny: true,
            noExternalResolve: false,
            removeComments: true,
            module: "commonjs",
            target: "es6",
            showErrors: true
        }))
        // Through babel (es6->es5)
        .pipe(babel({
            comments: false,
        }));

});

// LESS COMPILATION
// TODO add less compilation

/**
 * Run with: gulp default.
 * Executes the default task, essentially going through all possible steps.
 */
gulp.task(constants.defaultTask, function() {
    sequence(
        [
            constants.jadeTaskName,
            constants.tsTaskName
        ]
    );
});
