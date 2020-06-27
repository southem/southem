// @ts-ignore
import React from 'react';
import { View } from 'react-native';
import { enableScreens } from 'react-native-screens';
import {
  createAppContainer,
  NavigationContainer,
  // NavigationRouteConfigMap,
} from 'react-navigation';
import {
  createStackNavigator,
  // NavigationStackProp,
} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {
  // ComponentsContainer,
  // LayoutsContainer,
  MenuContainer,
  ThemesContainer,
} from '../../containers/menu';
import {
  MenuNavigationOptions,
} from './options';
import { HomeNavigator } from './app.navigator';

// @ts-ignore
const ThemesNavigator: NavigationContainer = createStackNavigator(
 {
    // Themes: View,
    Themes: ThemesContainer,
  }, {
    defaultNavigationOptions: MenuNavigationOptions,
  },
);

// @ts-ignore
const LayoutsNavigator: NavigationContainer = createStackNavigator(
 {
    Layouts: View,
    // Layouts: LayoutsContainer,
  },
 {
    defaultNavigationOptions: MenuNavigationOptions,
  },
);

// @ts-ignore
const ComponentsNavigator: NavigationContainer = createStackNavigator(
 {
    Components: HomeNavigator,
    // Components: ComponentsContainer,
  },
 {
    defaultNavigationOptions: MenuNavigationOptions,
  },
);

const MenuNavigator = createBottomTabNavigator({
  Layouts: LayoutsNavigator,
  Components: ComponentsNavigator,
  Themes: ThemesNavigator,
}, {
  tabBarComponent: MenuContainer,
});

// @ts-ignore
const AppNavigator: NavigationContainer = createStackNavigator({
  // @ts-ignore
  Home: MenuNavigator,
}, {
  headerMode: 'screen',
});

const createAppRouter = (container: NavigationContainer): NavigationContainer => {
  enableScreens();
  // @ts-ignore
  return createAppContainer(container);
};


export const RootNavigator: NavigationContainer = createAppRouter(AppNavigator);
