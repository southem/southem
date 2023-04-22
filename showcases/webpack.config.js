const path = require('path');
const fs = require('fs');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const createExpoWebpackConfigAsync = require('@expo/webpack-config');

const node_modules = path.resolve(__dirname, '..', 'node_modules');
const packages = path.resolve(__dirname, '..', 'packages');

const playgroundExtraModules = {
  '@babel/runtime': path.resolve(node_modules, '@babel/runtime'),
  'react': path.resolve(node_modules, 'react'),
  'react-native': path.resolve(node_modules, 'react-native'),
  'react-native-web': path.resolve(node_modules, 'react-native-web'),
  'react-native-reanimated': path.resolve(
    node_modules,
    'react-native-reanimated'
  ),
  '@expo/vector-icons': path.resolve(node_modules, '@expo/vector-icons'),
};

const babelLoaderRules = {
  test: /\.(js|jsx|ts|tsx)$/,
  loader: 'babel-loader',
  exclude: /node_modules/,
};

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  config.module.rules = [
    ...config.module.rules,
    babelLoaderRules,
  ];

  config.module.rules.push({
    test: /\.(js|jsx|ts|tsx)$/,
    loader: 'babel-loader',
    exclude: /node_modules/,
  });

  config.resolve.alias = {
    ...config.resolve.alias,
    ...playgroundExtraModules,
  };

  fs.readdirSync(packages)
    .filter((name) => !name.startsWith('.'))
    .forEach((name) => {
      const pak = require(`../packages/${name}/package.json`);

      config.resolve.alias[pak.name] = path.resolve(packages, name, 'src');
    });

  config.resolve.plugins = config.resolve.plugins.filter(plugin => {
    return !(plugin instanceof ModuleScopePlugin);
  });

  config.output = {
    ...config.output,
    publicPath: '',
  };

  return config;
};
