const path = require('path');
const env = require('./env');

const frameworkModules = [
  path.resolve(__dirname, '../ui'),
  path.resolve(__dirname, '../animation'),
  path.resolve(__dirname, '../theme'),
];

const moduleDependencies = [
  // @southem/ui
  path.resolve(env.EVA_PATH, 'eva'),
  path.resolve(env.EVA_PATH, 'processor'),
  path.resolve(__dirname, '../../node_modules/hoist-non-react-statics'),
  path.resolve(__dirname, '../../node_modules/lodash.merge'),
  path.resolve(__dirname, '../../node_modules/fecha'),

  // @southem/icons
  path.resolve(__dirname, '../../node_modules/react-native-eva-icons'),
  path.resolve(__dirname, '../../node_modules/react-native-svg'),

  // @southem/moment
  path.resolve(__dirname, '../../node_modules/moment'),

  // external
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
