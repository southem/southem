const path = require('path');

const packages = path.resolve(__dirname, '..', 'packages');

const moduleInternalAliases = {
  '@expo/vector-icons': path.resolve(__dirname, 'node_modules', '@expo/vector-icons'),
  'expo-font': path.resolve(__dirname, 'node_modules', 'expo-font'),
};

const frameworkModules = {
  '@southem/animation': path.resolve(packages, 'animation'),
  '@southem/fonts': path.resolve(packages, 'fonts'),
  '@southem/html': path.resolve(packages, 'html'),
  '@southem/icons': path.resolve(packages, 'icons'),
  '@southem/styles': path.resolve(packages, 'styles'),
  '@southem/theme': path.resolve(packages, 'theme'),
  '@southem/tools': path.resolve(packages, 'tools'),
  '@southem/ui': path.resolve(packages, 'ui'),
};

const moduleResolverConfig = {
  root: path.resolve('.'),
  // extensions: ['.js', '.ios.js', '.android.js', '.json', '.tsx', '.ts'],
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
  '@babel/plugin-proposal-export-namespace-from',
  ['module-resolver', moduleResolverConfig],
  'react-native-reanimated/plugin',
];

module.exports = function (api) {
  api.cache(true);
  return { presets, retainLines: true, plugins };
};
