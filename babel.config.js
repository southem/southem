const path = require('path');

/**
 * UI Southem modules aliases (needed for Jest resolver)
 */
const ROOT_PATH = './';

const moduleAliases = {
    '@ui-kitten/components': path.resolve(ROOT_PATH, './src/components'),
    '@ui-kitten/eva-icons': path.resolve(ROOT_PATH, './src/eva-icons'),
    '@ui-kitten/moment': path.resolve(ROOT_PATH, './src/moment'),
    '@ui-kitten/date-fns': path.resolve(ROOT_PATH, './src/date-fns'),
};

const moduleInternalAliases = {
    '@southem/theme': path.resolve(ROOT_PATH, 'packages/theme'),
    '@southem/ui': path.resolve(ROOT_PATH, 'packages/ui'),
};

const moduleResolverConfig = {
    root: path.resolve(ROOT_PATH),
    alias: {
        ...moduleAliases,
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
