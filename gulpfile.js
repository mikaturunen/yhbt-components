var hub = require("gulp-hub");

// Locations of the separate gulpfile.js files the different components use.
// The main goal is to have the components compile themselves and the high-level just collects
// all the details.

// There are at least three tasks the hubbed gulpfile should implement.
// "jade" - compiles JADE file task for the component, saves html files to <component>/release/
// "less" - compiles LESS file task for the component, saves css files to <component>/release/
// "typescript", compiles TypeScript files task for the component, saves js files to <component>/release/

var gulpFiles = [
    "./yhbt-header/gulpfile.js",
    "./yhbt-login-dialog/gulpfile.js"
];

hub(gulpFiles);
