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

gulp.task('server:build', function () {
  var tsProject = ts.createProject(path.resolve('./server/tsconfig.json'));
  var tsResult = gulp.src(tsSource)
    .pipe(sourcemaps.init())
    .pipe(tsProject())
  return tsResult.js
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(path.resolve('./server')))
});

gulp.task('build',['server:build']);

gulp.task('server:watch', function(){
  gulp.watch(['server/', '!server/**/*.ts'], ['server:build']);
});

gulp.task('server:dev', ['server:build'], function(){
  return nodemon({
    script: './server/index.js',
    env: { 'NODE_ENV': 'development' },
    ext: "ts",
    watch: "server",
    ignore: ['server/*.js','server/**/*.js'],
    tasks: ['server:build']
  }).on('restart', () => {
    console.log('App restarted!')
  });
});

gulp.task('dev', ['server:dev']);

gulp.task('default', ['dev']);

