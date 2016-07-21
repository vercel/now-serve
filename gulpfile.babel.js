import gulp from 'gulp'
import babel from 'gulp-babel'
import cache from 'gulp-cached'
import chmod from 'gulp-chmod'

const paths = {
  bin: 'bin/**/*',
  lib: 'lib/**/*'
}

gulp.task('lib', () => {
  return gulp.src(paths.lib)
  .pipe(cache('lib'))
  .pipe(babel())
  .pipe(gulp.dest('dist/lib'))
})

gulp.task('bin', () => {
  return gulp.src(paths.bin)
  .pipe(cache('bin'))
  .pipe(babel())
  .pipe(chmod(755))
  .pipe(gulp.dest('dist/bin'))
})

gulp.task('watch', () => {
  gulp.watch(paths.lib, ['lib'])
  gulp.watch(paths.bin, ['bin'])
})

gulp.task('transpile', ['bin', 'lib'])
gulp.task('default', ['watch', 'transpile'])
