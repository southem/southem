const path = require('path');


// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

// Find the workspace root, this can be replaced with `find-yarn-workspace-root`
const packages = path.resolve(__dirname, '..', 'packages');

const frameworkModules = [
  path.resolve(packages, 'animation'),
  path.resolve(packages, 'fonts'),
  path.resolve(packages, 'html'),
  path.resolve(packages, 'icons'),
  path.resolve(packages, 'styles'),
  path.resolve(packages, 'theme'),
  path.resolve(packages, 'tools'),
  path.resolve(packages, 'ui'),
];

const projectRoot = __dirname;

const config = getDefaultConfig(projectRoot);

// 1. Watch all files within the monorepo
config.watchFolders = [...frameworkModules];
// 2. Let Metro know where to resolve packages, and in what order
config.resolver.nodeModulesPaths = [path.resolve(projectRoot, 'node_modules')];

config.projectRoot = projectRoot;

config.resolver.blacklistRE = [
  /website\/.*/,
  /coverage\/.*/,
  /scripts\/.*/,
  // /packages\/.*\/node_modules\/.*/,
];

module.exports = config;

/**
const node_modules = path.resolve(__dirname, '..', 'node_modules');
const packages = path.resolve(__dirname, '..', 'packages');

const frameworkModules = [
  path.resolve(packages, 'animation'),
  path.resolve(packages, 'fonts'),
  path.resolve(packages, 'html'),
  path.resolve(packages, 'icons'),
  path.resolve(packages, 'styles'),
  path.resolve(packages, 'theme'),
  path.resolve(packages, 'tools'),
  path.resolve(packages, 'ui'),
];

const moduleDependencies = [
  // @southem/ui
  path.resolve(node_modules, 'hoist-non-react-statics'),
  path.resolve(node_modules, 'lodash'),
  path.resolve(node_modules, 'fecha'),

  // external
  path.resolve(node_modules, 'moment'),
  path.resolve(node_modules, 'react-native-background-timer'),
  path.resolve(node_modules, 'react-native-svg'),
  path.resolve(node_modules, 'react-is'),
  path.resolve(node_modules, 'source-map'),
];

const playgroundExtraModules = {
  '@babel/runtime': path.resolve(__dirname, './node_modules/@babel/runtime'),
  '@expo/vector-icons': path.resolve(__dirname, './node_modules/@expo/vector-icons'),
  'expo': path.resolve(__dirname, './node_modules/expo'),
  'expo-font': path.resolve(__dirname, './node_modules/expo-font'),
  'expo-asset': path.resolve(__dirname, './node_modules/expo-asset'),
  'color': path.resolve(__dirname, './node_modules/color'),
  'css-tree': path.resolve(__dirname, './node_modules/css-tree'),
  'css-select': path.resolve(__dirname, './node_modules/css-select'),
  'react': path.resolve(__dirname, './node_modules/react'),
  'react-native': path.resolve(__dirname, './node_modules/react-native'),
  'react-native-screens': path.resolve(__dirname, './node_modules/react-native-screens'),
  'prop-types': path.resolve(__dirname, './node_modules/prop-types'),
};

module.exports = {
  projectRoot: path.resolve(__dirname),
  transformer: {
    getTransformOptions: async() => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  resolver: {
    sourceExts: ['js', 'jsx', 'ts', 'tsx'],
    extraNodeModules: playgroundExtraModules,
    /**
    extraNodeModules: new Proxy(playgroundExtraModules, {
      get: (target, name) => path.join(__dirname, `node_modules/${name}`),
    }),
    **\/
  },
  watchFolders: [
    ...frameworkModules,
    ...moduleDependencies,
  ],
};
**/
