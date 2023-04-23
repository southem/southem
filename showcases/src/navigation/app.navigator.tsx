import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ModalPanel } from '@southem/ui';
import { HomeNavigator } from './home.navigator';
import { navigationRef } from './navigation.service';

export const AppNavigator = (): React.ReactElement => (
  // @ts-ignore
  <NavigationContainer ref={navigationRef}>
    <ModalPanel>
      <HomeNavigator />
    </ModalPanel>
  </NavigationContainer>
);
