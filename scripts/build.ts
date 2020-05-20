import childProcess from 'child_process';
import * as gulp from 'gulp';
import { GulpCompletionCallback, PACKAGES_DIR, PACKAGES_BUILD_DIR } from './common';

gulp.task('build', gulp.series(
  compileTypescript,
));

function compileTypescript(done: GulpCompletionCallback): void {
  childProcess.execSync('tsc && tscpaths -p ./tsconfig.json -s ./packages/* -o ./dist/tsc-out/*');
  done();
}
