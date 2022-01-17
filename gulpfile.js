import gulp from 'gulp'
import rename from 'gulp-rename'
import del from 'del'

const { src, dest, series } = gulp

export function clean () {
  return del(['dist', 'lib'])
}

export function lib () {
  return src(['src/**/*.js', '!**/*.test.js'])
    .pipe(rename({ dirname: '' }))
    .pipe(dest('lib'))
}

export const build = series(clean, lib)
