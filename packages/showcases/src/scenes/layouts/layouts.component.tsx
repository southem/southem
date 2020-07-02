import React from 'react';
import { StyleSheet } from 'react-native';
import { Divider, TopNavigation, TopNavigationAction } from '@southem/ui';
import { MenuIcon, MenuGridList, SafeAreaLayout } from '../../components';
import { data } from './data';

// @ts-ignore
export const LayoutsScreen = (props): React.ReactElement => {

  const onItemPress = (index: number): void => {
    props.navigation.navigate(data[index].route);
  };

  const renderDrawerAction = (): React.ReactElement => (
    <TopNavigationAction
      // @ts-ignore
      icon={MenuIcon}
      onPress={props.navigation.toggleDrawer}
    />
  );

  return (
    <SafeAreaLayout
      style={styles.safeArea}
      insets='top'>
      <TopNavigation
        title='Southem Tricks'
        leftControl={renderDrawerAction()}
      />
      <Divider/>
      <MenuGridList
        data={data}
        onItemPress={onItemPress}
      />
    </SafeAreaLayout>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
