/* tslint:disable */
'use strict';

const execSync = require('child_process').execSync;
// @ts-ignore
const process = require('process');

// TODO (Ivan): Read native dependencies from package.json
const nativeDependencies = [
  'react-native-svg',
  'react-native-vector-icons',
  'react-native-linear-gradient',
  'react-native-share',
  'react-native-photo-view',
  'react-native-webview',
];

const reactNativeLocalCli = `node node_modules/react-native/local-cli/cli.js`;
const linkCommands = nativeDependencies.map(dependency => `${reactNativeLocalCli} link ${dependency}`);

console.log('[@southem/ui] - linking native dependencies');

execSync(linkCommands.join(' && '), (error, stdout, stderr) => {
  console.log(stdout);
  console.log(stderr);
  if (error !== null) {
    console.log(`Linking error: ${error}`);
    process.exit(1);
  }
  console.log('[@southem/ui] - native dependencies linked');
});
