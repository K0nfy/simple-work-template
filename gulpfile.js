'use strict';

const gulp         = require('gulp'),
      autoprefixer = require('gulp-autoprefixer'),
      browserSync  = require('browser-sync'),
      cache        = require('gulp-cache'),
      cssnano      = require('gulp-cssnano'),
      del          = require('del'),
      imagemin     = require('gulp-imagemin'),
      jshint       = require('gulp-jshint'),
      notify       = require('gulp-notify'),
      plumber      = require('gulp-plumber'),
      sass         = require('gulp-sass'),
      uglify       = require('gulp-uglify-es').default;

const config = {
  devFolder:   'dev/',
  buildFolder: 'build/'
};

// Error handler
const onError = function(err) {
  notify.onError({
    title: "Error in " + err.plugin,
    message: err.message
  })(err);
  this.emit('end');
};


const tasks = {
  dev: {
    bsReload: function(done) { browserSync.reload(); return done() },

    watch: function(done) {
      // gulp will ignore newly created files if you do not provide cwd var
      // ignorePerm.. will prevent gulp crashing when you delete a folder
      const options = { cwd: config.devFolder, ignorePermissionErrors: true }

      gulp.watch(["**/*.html", "img/**", "font/**"], options, tasks.dev.bsReload);
      gulp.watch("sass/**/*.sass", options, tasks.dev.styles);
      gulp.watch("js/**", options, tasks.dev.scripts);

      return done();
    },

    // Sass + autoprefixer
    styles: function() {
      return gulp
        .src(config.devFolder + "sass/**/*.sass")
        .pipe(plumber({ errorHandler: onError }))
        .pipe(sass({ outputStyle: "expanded" }))
        .pipe(autoprefixer())
        .pipe(gulp.dest(config.devFolder + 'css'))
        .pipe(browserSync.stream())
    },

    scripts: function(done) {
      gulp
        .src(config.devFolder + "js/**/*.js")
        .pipe(plumber({ errorHandler: onError }))
        /*
         Jshint - detects errors and potential problems in JavaScript code.
         Errors are output in the console with syntax highlighting.
         You can add a list of ignored files on - .jshintignore (file is hidden)
         Also, you can comment on 2 lines below if you dont need jshint.
        */
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));

      browserSync.reload();
      return done();
    },

    server: function(done) {
      browserSync.init({
        server: config.devFolder,
        open: false,
        // notify: false // notifies on reloads or files changing
      });

      return done();
    }
  },


  build: {
    html: function() {
      return gulp
        .src(config.devFolder + "**/*.html")
        .pipe(gulp.dest(config.buildFolder))
    },

    sass: function() {
      return gulp
        .src(config.devFolder + "sass/**/*.sass")
        .pipe(plumber({ errorHandler: onError }))
        .pipe(sass({ outputStyle: "expanded" }))
        .pipe(gulp.dest(config.buildFolder + 'css'))
    },

    postcss: function() {
      return gulp
        .src(config.buildFolder + "css/**/*.css")
        .pipe(autoprefixer())
        .pipe(cssnano())
        .pipe(gulp.dest(config.buildFolder + 'css'))
    },

    scripts: function() {
      return gulp
        .src(config.devFolder + 'js/**/*.js')
        .pipe(plumber({ errorHandler: onError }))
        .pipe(uglify())
        .pipe(gulp.dest(config.buildFolder + 'js'))
    },

    imgs: function() {
      return gulp
        .src(config.devFolder + 'img/**/*.{png,jpg,gif}')
        .pipe(cache(imagemin([
          imagemin.optipng({optimizationLevel: 3}),
          imagemin.mozjpeg({progressive: true})
        ])))
        .pipe(gulp.dest(config.buildFolder + 'img'))
    },

    fonts: function() {
      return gulp
        .src(config.devFolder + 'font/**/*.*')
        .pipe(gulp.dest(config.buildFolder + 'font'));
    },

    copyOtherFiles: function() {
      return gulp
        .src([
          // take all
          config.devFolder + '**/*.*',
          // but exclude already processed formats
          '!' + config.devFolder + '**/*.{png,jpg,gif,css,html,js,sass}'
        ])
        .pipe(gulp.dest(config.buildFolder));
    }
  },

  common: {
    clearBuild: function(done) { del.sync(config.buildFolder); return done() },
    clearCache: function(done) { cache.clearAll(); return done() }
  }
}


exports.default = gulp.series(
  tasks.dev.styles, tasks.dev.scripts, 
  gulp.parallel(tasks.dev.watch, tasks.dev.server)
);

exports.build = gulp.series(
  tasks.common.clearBuild, 
  gulp.parallel(
    tasks.build.html, tasks.build.sass, tasks.build.scripts, 
    tasks.build.imgs, tasks.build.fonts
  ),
  gulp.parallel(tasks.build.postcss, tasks.build.copyOtherFiles)
);

exports.server     = gulp.series(tasks.dev.server);
exports.clearBuild = gulp.series(tasks.common.clearBuild);
exports.clearCache = gulp.series(tasks.common.clearCache);
exports.clearAll   = gulp.parallel(tasks.common.clearBuild, tasks.common.clearCache);
