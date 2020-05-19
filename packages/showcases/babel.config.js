const path = require('path');

const moduleInternalAliases = {
  '@expo/vector-icons': path.resolve(__dirname, './node_modules/@expo/vector-icons'),
};

const frameworkModules = {
  '@southem/animation': path.resolve(__dirname, '../animation'),
  '@southem/html': path.resolve(__dirname, '../html'),
  '@southem/theme': path.resolve(__dirname, '../theme'),
  '@southem/ui': path.resolve(__dirname, '../ui'),
  '@southem/icons': path.resolve(__dirname, '../icons'),
};

const moduleResolverConfig = {
  root: path.resolve('./'),
  alias: {
    ...moduleInternalAliases,
    ...frameworkModules,
  },
};

const presets = [
  'babel-preset-expo',
];

const plugins = [
  ['module-resolver', moduleResolverConfig],
  ['@babel/plugin-proposal-decorators', { 'legacy': true }],
];

module.exports = function (api) {
  api.cache(true);
  return { presets, plugins };
};
