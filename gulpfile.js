// подключение плагинов gulp
const gulp = require('gulp');
const fileinclude = require('gulp-file-include');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const stylus = require('stylus');
let browserSync = require('browser-sync').create();
// html-файл 
const paths = {
  scripts: {
    src: './',
    dest: './build/',
  }
}
async function includeHTML(){
  return gulp.src([
    '*.html',
    '!navigator.html',
    '!purposes.html',
    '!choosing-us.html.html',
    '!our-work.html',
    '!technologies.html',
    '!industries.html',
    '!connection.html',
    '!footer.html',
  ])
  .pipe(fileinclude({
    prefix: '@@',
    basepath: '@file'
  }))
  .pipe(gulp.dest(paths.scripts.dest));
}
exports.default = includeHTML;
//css файлы
gulp.task("stylus", () => {
  return gulp.src("src/**/*.css")//исходные файлы
  .pipe(cssnano())//минимизируем сss
  .pipe(concat("styles.min.css"))//объединяем в один файл
  .pipe(gulp.dest("build/stylus"));//папка назначения 
});
// js файлы
gulp.task("scripts1", () => {
  return gulp.src("src/**/**/*.js")//исходные файлы
  .pipe(uglify())//минимизируем js
  .pipe(concat("scripts.min.js"))//объединяем в один файл
  .pipe(gulp.dest("build/scripts"));//папка назначения
});
// image файлы
gulp.task("images", () =>{
  return gulp.src("src/**/*.jpg")//исходные файлы
  .pipe(imagemin())//оптимизируем изображения
  .pipe(gulp.dest("build/images"));//папка назначения
});
gulp.task("images1", () =>{
  return gulp.src("src/**/*.png")//исходные файлы
  .pipe(imagemin())//оптимизируем изображения
  .pipe(gulp.dest("build/images"));//папка назначения
});
//следим за изменениями в исходных файлах и запускаем соответствующие task//следим за изменениями в исходных файлах и запускаем соответствующие task
gulp.task("watch", () => {
  gulp.watch("src/**/*.css", gulp.series("stylus"));// отслеживаем css файлы
  gulp.watch("src/**/**/*.js", gulp.series("scripts1"));//отслуживаем js файлы
  gulp.watch("src/**/*.jpg", gulp.series("images"));//отслеживаем файлы изображения
  gulp.watch("src/**/*.png", gulp.series("images1"));//отслеживаем файлы изображения
});

// сервер
gulp.task('browserSync', function() {
    browserSync.init({
       server: {
          baseDir: 'build',
       },
    })
 })
gulp.task("default", gulp.series("stylus","scripts1", "images", "watch", "images1",["browserSync"], ));
