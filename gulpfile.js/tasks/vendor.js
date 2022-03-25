const { src, dest } = require('gulp');
const concat = require('gulp-concat');

const vendor = function (serverProjectPath, filesVendor) {
    return function () {
        return src(filesVendor)
        .pipe(concat('vendor.js'))
        .pipe(dest('dist/js'))
        .pipe(dest(serverProjectPath + 'vendor'));
    };
};

exports.vendor = vendor;  