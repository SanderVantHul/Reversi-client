const { src, dest } = require('gulp');
const gulpSass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
//const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');

const browserSync = require('browser-sync').create();

const sass = function (serverProjectPath, filesSass) {
    return function () {
        return src(filesSass)
            // 1. compile de sass files naar css
            .pipe(gulpSass().on('error', gulpSass.logError))
            // 2. stop alle files in 1 file
            .pipe(concat('style.min.css'))
            // 3. minify css
            .pipe(cleanCSS({ compatibility: 'ie8' }))
            // 3.5. rename?? useless gebruik ik niet
            //.pipe(rename('style.min.css'))
            // 4. voeg vendor prefixes toe 
            .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
            // 5. plaatst de file in volgende folders
            .pipe(dest('./dist/css')) // dit project
            .pipe(dest(serverProjectPath + 'css')); // backend mvc project
        // 6. stuur alle css naar de alle browsers 
        // .pipe(browserSync.stream());  // browserSync.stream() schijnt niet te werken :(
    };
};

exports.sass = sass;