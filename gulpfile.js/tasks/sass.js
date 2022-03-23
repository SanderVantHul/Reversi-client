const {src, dest} = require('gulp');
const gulpSass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();

const sass = function (serverProjectPath, files_sass) {
    return function () {
        return src(files_sass)
            // 1. compile de sass files naar css
            .pipe(gulpSass().on('error', gulpSass.logError))
            // 2. stop alle files in 1 file
            .pipe(concat('style.min.css'))
            // 3. plaatst de file in volgende folders
            .pipe(dest('./dist/css')) // dit project
            .pipe(dest(serverProjectPath + 'css')) // backend project
            // 4. stuur alle css naar de alle browsers
            .pipe(browserSync.stream());
    }
};

exports.sass = sass;