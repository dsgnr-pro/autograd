"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var csso = require("gulp-csso");
var rename = require("gulp-rename");
var imagemin = require("gulp-imagemin");
var webp = require("gulp-webp");
var svgstore = require("gulp-svgstore");
var posthtml = require("gulp-posthtml");
var include = require("posthtml-include");
var del = require("del");
var concat = require('gulp-concat');
var order = require("gulp-order");
var babel = require("gulp-babel");
var uglify = require("gulp-uglify-es").default;
var splitMediaQueries = require("gulp-split-media-queries");

gulp.task("css", function () {
  return gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("build/css"))
    .pipe(csso())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("build/css"));
});

gulp.task('mobile-css', (done) => {
  return gulp.src('build/css/style.css')
    .pipe(splitMediaQueries({
      breakpoint: 768, // default is 768
    }))
    .pipe(csso())
    .pipe(gulp.dest("build/css/mobile"));
  done();
});

gulp.task('mobile-rename', (done) => {
  return gulp.src('build/css/mobile/style.css')
    .pipe(rename("mobile.min.css"))
    .pipe(gulp.dest("build/css"))
  del("build/css/mobile");
  done();
});

gulp.task('mobile-del', (done) => {
  return del('build/css/mobile');
});

gulp.task("images", function () {
  return gulp.src("source/img/**/*.{png,jpg,svg}")
    .pipe(imagemin([
      imagemin.optipng({
        optimizationLevel: 3
      }),
      imagemin.jpegtran({
        progressive: true
      }),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest("source/img"));
});

gulp.task("webp", function () {
  return gulp.src("source/img/**/*.{png,jpg}")
    .pipe(webp({
      quality: 90
    }))
    .pipe(gulp.dest("source/img"));
});

gulp.task("sprite", function () {
  return gulp.src("source/img/icon-*.svg")
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("build/img"));
});

gulp.task("html", function () {
  return gulp.src("source/*.html")
    .pipe(posthtml([
      include()
    ]))
    .pipe(gulp.dest("build"));
});

gulp.task("clean", function () {
  return del("build");
});

gulp.task("copy", function () {
  return gulp.src([
      "source/fonts/**/*.{woff,woff2}",
      "source/img/**",
      "source/js/**"
    ], {
      base: "source"
    })
    .pipe(gulp.dest("build"));
});

gulp.task("js", function () {
  return gulp.src("source/js/*.js")
    .pipe(order([
      "jquery.min.js",
      "slick.min.js",
      "slider.js",
      "filter.js",
      "makes.js",
      "plyr.min.js",
      "lazysizes.min.js",
      "brazzers-carousel.min.js",
      "select2.min.js",
      "jquery.maskedinput.min.js",
      "jquery.magnific-popup.js",
      "purecounter.js",
      "slick-lightbox.js",
      "slider-lightbox.js",
      "aos.js",
      "lightbox.min.js",
      "toggle-view.js",
      "rangeslider.js",
      "form.js",
      "compare.js",
      "range.js",
      "script.js",
      "ymaps.js",
    ]))
    .pipe(concat("bundle.js"))
    .pipe(uglify())
    .pipe(gulp.dest("source/js/dist"))
    .pipe(gulp.dest("build/js/dist"))
});

gulp.task("build", gulp.series(
  "clean",
  "copy",
  "css",
  "mobile-css",
  "mobile-rename",
  "mobile-del",
  "sprite",
  "js",
  "html"
));

gulp.task("server", function () {
  server.init({
    server: "build/"
  });
  gulp.watch("source/sass/**/*.scss", gulp.series("css", "mobile-css", "mobile-rename", "mobile-del", "refresh"));
  gulp.watch("source/img/icon-*.svg", gulp.series("sprite", "html", "refresh"));
  gulp.watch("source/js/*.js", gulp.series("js", "refresh"));
  gulp.watch("source/*.html", gulp.series("html", "refresh"));
});

gulp.task("refresh", function (done) {
  server.reload();
  done();
});

gulp.task("start", gulp.series("build", "server"));