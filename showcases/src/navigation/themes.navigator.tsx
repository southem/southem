import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemesScreen } from '../scenes/themes/themes.component';

const Stack = createStackNavigator();

export const ThemesNavigator = (): React.ReactElement => (
  // @ts-ignore
  <Stack.Navigator options={{ headerShown: false }}>
    <Stack.Screen name='Themes' component={ThemesScreen}/>
  </Stack.Navigator>
);
