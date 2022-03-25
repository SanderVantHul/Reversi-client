const { src, dest } = require('gulp');
const rename = require('gulp-rename');
const htmlmin = require('gulp-htmlmin');

const html = function (serverProjectPath, filesHtml) {
    return function () {
        return src(filesHtml)
            // 1. minify html
            .pipe(htmlmin({
                collapseWhitespace: true,
                minifyJS: true,
                minifyCSS: true,
                removeComments: true
            }))
            // 2. rename?!??!
            // .pipe(rename(function (path) {
            //     path.dirname += "/";
            //     path.basename = 'index';
            //     path.extname = ".html";
            // }))
            // 3. stop in dist
            .pipe(dest('./dist/html'));
    };
};

exports.html = html;