import React from 'react';
import { registerRootComponent } from 'expo';

import App from './App';

// // registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// // It also ensures that whether you load the app in Expo Go or in a native build,
// // the environment is set up appropriately
registerRootComponent(App);

// https://github.com/react-native-elements/react-native-elements/tree/next

/**
import { AppRegistry, Platform } from 'react-native';
import App from './App';

AppRegistry.registerComponent('UI Southem Showcases', () => App);

if (Platform.OS === 'web') {
  const rootTag = document.getElementById('root') || document.getElementById('main');
  AppRegistry.runApplication('UI Southem Showcases', { rootTag });
}
 **/
