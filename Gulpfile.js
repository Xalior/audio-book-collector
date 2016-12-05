var gulp = require('gulp');
var ts = require('gulp-typescript');
var path = require('path');
var sourcemaps = require('gulp-sourcemaps');
var nodemon = require('gulp-nodemon');

var tsSource = [
  'server/**/*.ts',
  '!server/typings/browser/**/*.ts',
  '!server/typings/browser.d.ts'
];

gulp.task('build:server', function () {
  var tsProject = ts.createProject(path.resolve('./server/tsconfig.json'));
  var tsResult = gulp.src(tsSource)
    .pipe(sourcemaps.init())
    .pipe(tsProject())
  return tsResult.js
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(path.resolve('./server')))
});

gulp.task('build',['build:server']);

gulp.task('watch', function(){
  gulp.watch(['server/', '!server/**/*.ts'], ['build:server']);
});

gulp.task('dev', ['build:server'], function(){
  return nodemon({
    script: './server/index.js',
    env: { 'NODE_ENV': 'development' },
    ext: "ts",
    watch: "server",
    ignore: ['server/*.js','server/**/*.js'],
    tasks: ['build:server']
  }).on('restart', () => {
    console.log('App restarted!')
  });
});

gulp.task('default', ['dev']);

