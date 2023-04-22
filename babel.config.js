const path = require('path');

/**
 * UI Southem modules aliases (needed for Jest resolver)
 */
const packages = path.resolve(__dirname, 'packages');

const moduleInternalAliases = {
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
  alias: {
    ...moduleInternalAliases,
  },
};

const presets = [
  'module:metro-react-native-babel-preset',
];

const plugins = [
  ['module-resolver', moduleResolverConfig],
  ['@babel/plugin-proposal-decorators', {'legacy': true}]
];

module.exports = function (api) {
  api.cache(true);
  return {presets, plugins};
};
