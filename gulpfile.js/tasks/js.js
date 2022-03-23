const { src, dest } = require('gulp');
const order = require('gulp-order');
// const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

const fn = function (filesJs, filesJsOrder, backendPath) {
    return function () {

        //console.log(`Taak js is uitgevoerd, ${voornaam}!`);
        //return Promise.resolve('Klaar');

        return src(filesJs)
            // 1. pas de volgorde van de files aan
            .pipe(order(filesJsOrder, { base: './' }))
            // 2. uglify
            .pipe(uglify({compress: true})) 
            // 3. stop alle files in 1 file 
            .pipe(concat('app.js'))
            // 4. compile js
            // .pipe(babel({
            //     presets: ['@babel/preset-env']
            // }))
            // 5. stop alle files in de volgende folders
            .pipe(dest('./dist/js'))
            .pipe(dest(backendPath + 'js'));
    };
};
exports.js = fn;  