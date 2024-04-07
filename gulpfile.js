
const { src, dest, watch, parallel, series } = require('gulp');

const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify-es').default;
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const del = require('del');

function browsersync() {
  browserSync.init({
    server: {
      baseDir: "app/"
    }
  });
}

function cleanDist() {
  return del('dist')
}

function images() {
  return src('app/images/**/*')
    .pipe(imagemin([
      imagemin.gifsicle({ interlaced: true }),
      imagemin.mozjpeg({ quality: 75, progressive: true }),
      imagemin.optipng({ optimizationLevel: 5 }),
      imagemin.svgo({
        plugins: [
          { removeViewBox: true },
          { cleanupIDs: false }
        ]
      })
    ]
    ))
    .pipe(dest('dist/images'))
}

function scripts() {
  return src([
    // 'node_modules/swiper/swiper-bundle.min.js',

    // 'app/js/swiper.js'
    'app/js/menu.js'
    // 'app/js/main.js'
    // 'app/js/community.js'
    // 'app/js/faq.js'
    // 'app/js/catalogue.js'
    // 'app/js/homeDetails.js'
    // 'app/js/news.js'
    // 'app/js/payrentPopup.js'
  ])
    // .pipe(concat('homeDetails.min.js'))
    // .pipe(concat('payrentPopup.min.js'))
    // .pipe(concat('catalogue.min.js'))
    // .pipe(concat('news.min.js'))
    // .pipe(concat('faq.min.js'))
    // .pipe(concat('community.min.js'))
    .pipe(concat('menu.min.js'))
    // .pipe(concat('main.min.js'))
    // .pipe(concat('swiper.min.js'))
    // .pipe(uglify())
    .pipe(dest('app/js'))
    .pipe(browserSync.stream())
}

function styles() {
  return src('app/scss/**/*.scss')
    // .pipe(scss({ outputStyle: 'compressed' }))
    .pipe(scss())
    .pipe(concat('style.css'))
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 10 version'],
      grid: true
    }))
    .pipe(dest('app/css'))
    .pipe(browserSync.stream())
}

function build() {
  return src([
    'app/css/style.css',
    'app/fonts/**/*',
    'app/js/main.js',
    'app/js/swiper.min.js',
    'app/js/community.js',
    'app/js/faq.js',
    'app/js/news.js',
    'app/js/homeDetails.js',
    'app/js/catalogue.js',
    'app/js/payrentPopup.js',
    'app/js/flatpickr.min.js',
    'app/js/wow.min.js',
    'app/js/menu.js',
    'app/*.html'
  ], { base: 'app' })
    .pipe(dest('dist'))
}

function watching() {
  watch(['app/scss/**/*.scss'], styles);
  watch(['app/js/**/*.js',
    '!app/js/main.min.js',
    '!app/js/swiper.min.js',
    '!app/js/community.min.js',
    '!app/js/faq.min.js',
    '!app/js/news.min.js',
    '!app/js/homeDetails.min.js',
    '!app/js/payrentPopup.min.js',
    '!app/js/menu.min.js',
    '!app/js/catalogue.min.js'], scripts);
  watch(['app/*.html']).on('change', browserSync.reload);
}

exports.styles = styles;
exports.watching = watching;
exports.browsersync = browsersync;
exports.scripts = scripts;
exports.images = images;
exports.cleanDist = cleanDist;

exports.build = series(cleanDist, images, build);
exports.default = parallel(styles, scripts, browsersync, watching);
