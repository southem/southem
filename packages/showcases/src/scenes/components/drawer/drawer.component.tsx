import React from 'react';
import { StyleSheet } from 'react-native';
import { ButtonProps, DrawerElement } from '@southem/ui';
import { DrawerShowcase } from './drawer-showcase.component';
import { drawerShowcase } from './type';
import { ShowcaseContainer } from '../../../components';

// @ts-ignore
export const DrawerScreen = ({ navigation }): React.ReactElement => {

  const renderItem = (props: ButtonProps): DrawerElement => (
    // @ts-ignore
    <DrawerShowcase
      {...props}
      style={[styles.component, props.style]}
      onPress={navigation.toggleDrawer}
    />
  );

  return (
    <ShowcaseContainer
      showcase={drawerShowcase}
      renderItem={renderItem}
      onBackPress={() => navigation.goBack()}
    />
  );
};

const styles = StyleSheet.create({
  component: {
    flex: 1,
  },
});

