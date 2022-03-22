const {series, watch} = require('gulp');
const config = require('./config');
const browserSync = require('browser-sync').create();

const js = require('./tasks/js').js(config.files.js, config.files.jsOrder, config.localServerProjectPath);
js.displayName = 'js';

const sass = require('./tasks/sass').sass(config.localServerProjectPath, config.files.sass);
sass.displayName = 'sass';

const hello = function (done) {
    console.log(`Groeten van ${config.voornaam}`);
    done();
};

const watchFiles = () => {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    watch(config.files.html).on('change', browserSync.reload);
    watch(config.files.js, series(js));
    watch(config.files.js).on('change', browserSync.reload);
    watch(config.files.sass, series(sass));
    watch(config.files.sass).on('change', browserSync.reload);
};

exports.default = hello;
exports.js = js;
exports.sass = sass;
exports.watch = watchFiles;