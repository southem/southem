const path = require('path');

const moduleInternalAliases = {
  '@expo/vector-icons': path.resolve(__dirname, './node_modules/@expo/vector-icons'),
  'expo-font': path.resolve(__dirname, './node_modules/expo-font'),
};

const frameworkModules = {
  '@southem/animation': path.resolve(__dirname, '../animation'),
  '@southem/fonts': path.resolve(__dirname, '../fonts'),
  '@southem/html': path.resolve(__dirname, '../html'),
  '@southem/icons': path.resolve(__dirname, '../icons'),
  '@southem/theme': path.resolve(__dirname, '../theme'),
  '@southem/tools': path.resolve(__dirname, '../tools'),
  '@southem/ui': path.resolve(__dirname, '../ui'),
};

const moduleResolverConfig = {
  root: path.resolve('./'),
  alias: {
    ...moduleInternalAliases,
    ...frameworkModules,
  },
};

const presets = [
  'module:metro-react-native-babel-preset',
  'babel-preset-expo',
];

const plugins = [
  ['@babel/plugin-proposal-decorators', { 'legacy': true }],
  ['module-resolver', moduleResolverConfig],
];

module.exports = function (api) {
  api.cache(true);
  return { presets, retainLines: true, plugins };
};
