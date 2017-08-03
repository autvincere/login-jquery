"use strict";

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer'),
    reload = browserSync.reload
;

//Directorios
var config = {
    scssDir: 'src/scss'
    , cssDir: 'dist/assets/css'
    , jsDir: 'dist/assets/js'
    , imgDir: 'dist/assets/img'
    , htmlDir:'dist'
};


// Compilar SASS files
gulp.task('sass', function () {
    gulp.src(config.scssDir + '/*.scss')
    
    .pipe(sass({
    includedPaths:['scss']
    }))
    .pipe(autoprefixer({
            browsers: ['> 1%', 'last 60 versions', 'Firefox >= 20','ie >= 9'],
            cascade: false
        }))
    .pipe(
        gulp.dest(config.cssDir)
    )
});

// local
gulp.task('browserSync', ['sass'], function () {
    browserSync.init([
    'dist/assets/css/*.css',
    'dist/assets/js/*.js',
    'dist/*.html'
    ],{
        server: {
            baseDir: 'dist'
        }
       })
    });


// Live reload browserSync
gulp.task('watch', ['browserSync', 'sass'], function () {
    gulp.watch([config.scssDir + '/*.scss'], ['sass']);
    gulp.watch([config.htmlDir +'/*.html'])
});

// Compilar todas las tareas
gulp.task('default', ['watch']);
