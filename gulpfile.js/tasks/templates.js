const { src, dest } = require('gulp');
const concat = require('gulp-concat');
const handlebars = require('gulp-handlebars');
const wrap = require('gulp-wrap');
const declare = require('gulp-declare');
const path = require('path');
const merge = require('merge-stream');

const hbs = function (serverProjectPath, filesHbs, filesHbsPartials) {
    return function () {
        const templates = src(filesHbs, filesHbsPartials)
            // 1. Compile each Handlebars template source file to a template function
            .pipe(handlebars())
            // 2. Wrap each template function in a call to Handlebars.template
            .pipe(wrap('Handlebars.template(<%= contents %>)'))
            // 3. Declare template functions as properties and sub-properties of MyApp.templates
            .pipe(declare({
                namespace: 'spa_templates',
                noRedeclare: true, // Avoid duplicate declarations
                processName: function (filePath) {
                    // Allow nesting based on path using gulp-declare's processNameByPath()
                    // You can remove this option completely if you aren't using nested folders
                    // Drop the client/templates/ folder from the namespace path by removing it from the filePath
                    // meer weten over 'declare': https://github.com/lazd/gulp-handlebars/tree/8e97f01db9edac7068a6402b45f47203841ca705/examples/namespaceByDirectory
                    return declare.processNameByPath(filePath.replace('<parent_map>/templates/', '')); //windows? backslashes: \\
                }
            }))
            // 4. stop alles in 1 file
            .pipe(concat('templates.js'))
            // 5. stuur de file naar volgende folders
            .pipe(dest('dist/js/'));


        const partials = src(filesHbsPartials)
            .pipe(handlebars())
            .pipe(wrap('Handlebars.registerPartial(<%= processPartialName(file.relative) %>, Handlebars.template(<%= contents %>));', {}, {
                imports: {
                    processPartialName: function (fileName) {
                        // Strip the extension and the underscore
                        // Escape the output with JSON.stringify
                        return JSON.stringify(path.basename(fileName, '.js').substr(1));
                    }
                }
            }));

        return merge(partials, templates)
            .pipe(concat('templates.js'))
            .pipe(dest('dist/js/'));
    };
};

exports.hbs = hbs;