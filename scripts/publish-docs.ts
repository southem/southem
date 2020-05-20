import * as gulp from 'gulp';
import { execSync } from 'child_process';
import {
  DOCS_DIR,
  GulpCompletionCallback,
} from './common';

gulp.task('publish-docs', gulp.series(
  rebuild,
  createDocsDirs,
  addLanding,
  copyOldVersion,
  copyLatestStableVersion,
  publish,
));

function rebuild(done: GulpCompletionCallback): void {
  execSync('yarn run clean', { cwd: DOCS_DIR });
  execSync('yarn run build:prod', { cwd: DOCS_DIR });
  done();
}

function createDocsDirs(done: GulpCompletionCallback): void {
  execSync('yarn run docs:dirs', { cwd: DOCS_DIR });
  done();
}

function addLanding(done: GulpCompletionCallback): void {
  execSync('yarn run landing', { cwd: DOCS_DIR });
  done();
}

function copyOldVersion(done: GulpCompletionCallback) {
  return gulp.src(['docs/3.x/**/*'])
    .pipe(gulp.dest('docs/dist/docs/3.x'));
}

function copyLatestStableVersion(done: GulpCompletionCallback) {
  return gulp.src(['docs/4.x/**/*'])
    .pipe(gulp.dest('docs/dist/docs/4.x'));
}

function publish(done: GulpCompletionCallback): void {
  execSync('yarn run gh-pages', { cwd: DOCS_DIR });
  done();
}
