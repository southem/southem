import React from 'react';
import { View } from '@southem/ui';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ifTablet } from '../../utils/device';
import TabBar from './tab-bar';

const Tab = createMaterialTopTabNavigator();

const tabBarProps = ifTablet({
  // @ts-ignore
  tabBar: props => <TabBar {...props} />,
}, {});

export const Tabs = (): React.ReactElement => (
  <Tab.Navigator
    initialRouteName='Appointments'
    shifting={true}
    labeled={false}
    sceneAnimationEnabled={false}
    activeColor='#00aea2'
    inactiveColor='#95a5a6'
    barStyle={{ backgroundColor: '#ffff' }}
    {...tabBarProps}>
    <Tab.Screen
      name='Appointments'
      component={View}
      options={{
        tabBarIcon: 'calendar-clock',
      }}
    />

    <Tab.Screen
      name='Patients'
      component={View}
      options={{
        tabBarIcon: 'account-multiple',
      }}
    />
    <Tab.Screen
      name='Departments'
      component={View}
      options={{
        tabBarIcon: 'layers',
      }}
    />
    <Tab.Screen
      name='Reports'
      component={View}
      options={{
        tabBarIcon: 'book-open',
      }}
    />
  </Tab.Navigator>
);
