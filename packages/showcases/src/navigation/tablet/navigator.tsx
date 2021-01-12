import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Tabs } from './tabs.navigation';

const Stack = createStackNavigator();

export const TabletNavigator = (): React.ReactElement => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '##fff',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
      headerTintColor: '#2c3e50',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerBackTitleVisible: false,
    }}>
    <Stack.Screen
      name='Home'
      component={Tabs}
    />
  </Stack.Navigator>
);
