const path = require('path');

const frameworkModules = [
  path.resolve(__dirname, '../animation'),
  path.resolve(__dirname, '../html'),
  path.resolve(__dirname, '../theme'),
  path.resolve(__dirname, '../ui'),
];

const moduleDependencies = [
  // @southem/ui
  path.resolve(__dirname, '../../node_modules/hoist-non-react-statics'),
  path.resolve(__dirname, '../../node_modules/lodash'),
  path.resolve(__dirname, '../../node_modules/fecha'),

  // external
  // path.resolve(__dirname, '../../node_modules/moment'),
  path.resolve(__dirname, '../../node_modules/react-native-svg'),
  path.resolve(__dirname, '../../node_modules/react-is'),
  path.resolve(__dirname, '../../node_modules/source-map'),
];

const playgroundExtraModules = {
  '@babel/runtime': path.resolve(__dirname, './node_modules/@babel/runtime'),
  'react': path.resolve(__dirname, './node_modules/react'),
  'react-native': path.resolve(__dirname, './node_modules/react-native'),
  'css-tree': path.resolve(__dirname, './node_modules/css-tree'),
  'css-select': path.resolve(__dirname, './node_modules/css-select'),
};

module.exports = {
  projectRoot: path.resolve(__dirname),
  resolver: {
    extraNodeModules: playgroundExtraModules,
  },
  watchFolders: [
    ...frameworkModules,
    ...moduleDependencies,
  ],
};
