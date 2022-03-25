module.exports = {
    localServerProjectPath : 'C:/Users/Sander/source/repos/ReversiMvcApp/ReversiMvcApp/wwwroot/',
    files: {
        js: [
            'js/**/*.js',
            'js/*.js'
        ],
        jsOrder: [
            'game.js',
            'feedbackWidget.js'
        ],
        sass: [
            './css/*.scss',
            './css/*.css',
        ], 
        html: [
            './index.html'
        ],
        vendor: [
            
        ],
        handleBars: [
            './templates/**/[^_]*.hbs'
        ],
        handleBarsPartials: [
            './templates/**/_*.hbs'
        ],
    },
    voornaam: 'Sander'
};