import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Divider,
  TopNavigation,
  TopNavigationAction,
} from '@southem/ui';
import {
  SafeAreaLayout,
  MenuGridList,
  MenuIcon,
} from '../../../components';
import { data } from '../data';

// @ts-ignore
export const ComponentsScreen = ({ navigation }): React.ReactElement => {

  const onItemPress = (index: number): void => {
    navigation.navigate(data[index].route);
  };

  const renderDrawerAction = (): React.ReactElement => (
    <TopNavigationAction
      // @ts-ignore
      icon={MenuIcon({ color: 'white' })}
      onPress={navigation.toggleDrawer}
    />
  );

  return (
    <SafeAreaLayout
      style={styles.safeArea}
      insets='top'>
      <TopNavigation
        title='Southem UI'
        titleStyle={styles.title}
        accessoryLeft={renderDrawerAction}
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
  title: {
    color: 'white',
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 16,
  },
});
