const mix = require('mix');

mix('resources/js/app.js', 'public/js')
    .react()
    .sass('resources/sass/app.scss', 'public/css')
    .setResourceRoot("/")
    .browserSync('localhost:8000')
    .sourceMaps(true, 'source-map');

