const path = require('path');

/**
 * UI Southem modules aliases (needed for Jest resolver)
 */
const ROOT_PATH = './';

const moduleInternalAliases = {
    '@southem/animation': path.resolve(ROOT_PATH, './packages/animation'),
    '@southem/html': path.resolve(ROOT_PATH, './packages/html'),
    '@southem/theme': path.resolve(ROOT_PATH, './packages/theme'),
    '@southem/ui': path.resolve(ROOT_PATH, './packages/ui'),
};

const moduleResolverConfig = {
    root: path.resolve(ROOT_PATH),
    alias: {
        ...moduleInternalAliases,
    },
};

const presets = [
    'module:metro-react-native-babel-preset',
];

const plugins = [
    ['module-resolver', moduleResolverConfig],
];

module.exports = function(api) {
    api.cache(true);
    return { presets, plugins };
};
