import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Avatar,
  Divider,
  Drawer,
  DrawerItem,
  DrawerElement,
  DrawerHeaderFooter,
  Layout,
  Text,
} from '@southem/ui';
import { BookIcon, GithubIcon, SafeAreaLayout } from '../../components';
import { WebBrowserService } from '../../services/web-browser.service';
import { AppInfoService } from '../../services/app-info.service';

const DATA = [
  { title: 'Libraries', icon: GithubIcon },
  { title: 'Documentation', icon: BookIcon },
];

// @ts-ignore
// { navigation }
export const HomeDrawer = ({ navigation }): DrawerElement => {
  const onItemSelect = (index: number): void => {
    switch (index) {
      case 0: {
        navigation.toggleDrawer();
        navigation.navigate('Libraries');
        return;
      }
      case 1: {
        WebBrowserService.openBrowserAsync('https://eldorplus.github.io/southem');
        navigation.toggleDrawer();
        return;
      }
    }
  };

  const renderHeader = () => (
    <Layout
      style={styles.header}
      level='2'>
      <View style={styles.profileContainer}>
        <Avatar
          size='big'
          source={require('../../assets/images/icon.png')}
        />
        <Text
          style={styles.profileName}
          category='h6'>
          Southem Tricks
        </Text>
      </View>
    </Layout>
  );

  const renderFooter = () => (
    <React.Fragment>
      <Divider/>
      <DrawerHeaderFooter
        disabled={true}
        description={`Version ${AppInfoService.getVersion()}`}
      />
    </React.Fragment>
  );

  return (
    <SafeAreaLayout
      style={styles.safeArea}
      insets='top'>
      <Drawer
        header={renderHeader}
        footer={renderFooter}
        // @ts-ignore
        onSelect={onItemSelect}>
        {
          // @ts-ignore
          DATA.map(({ title, icon }, index) => <DrawerItem key={index} title={title} accessoryLeft={icon}/>)
        }
      </Drawer>
    </SafeAreaLayout>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  header: {
    height: 128,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileName: {
    marginHorizontal: 16,
  },
});
