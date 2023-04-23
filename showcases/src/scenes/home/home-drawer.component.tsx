import React, { ReactElement, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Avatar,
  Divider,
  Drawer,
  DrawerItem,
  DrawerElement,
  Layout,
  Text,
  // @ts-ignore
  IndexPath,
} from '@southem/ui';
import { BookIcon, GithubIcon, SafeAreaLayout } from '../../components';
import { WebBrowserService } from '../../services/web-browser.service';
import { AppInfoService } from '../../services/app-info.service';

// @ts-ignore
export const HomeDrawer = ({ navigation }): DrawerElement => {
  const [selectedIndex, setSelectedIndex] = useState<IndexPath>(null);

  const DATA = [
    {
      title: 'Libraries',
      icon: GithubIcon,
      onPress: () => {
        navigation.toggleDrawer();
        navigation.navigate('Libraries');
      },
    },
    {
      title: 'Documentation',
      icon: BookIcon,
      onPress: () => {
        WebBrowserService.openBrowserAsync('https://eldorplus.github.io/southem');
        navigation.toggleDrawer();
      },
    },
  ];

  const renderHeader = (): ReactElement => (
    <SafeAreaLayout insets='top'>
      <Layout style={styles.header} level='2'>
        <View style={styles.profileContainer}>
          <Avatar
            size='big'
            source={require('../../assets/images/icon-app.png')}
          />
          <Text style={styles.profileName} category='h6'>
            Southem UI
          </Text>
        </View>
      </Layout>
    </SafeAreaLayout>
  );

  const renderFooter = (): ReactElement => (
    <SafeAreaLayout insets='bottom'>
      <React.Fragment>
        <Divider/>
        <View style={styles.footer}>
          <Text>{`Version ${AppInfoService.getVersion()}`}</Text>
        </View>
      </React.Fragment>
    </SafeAreaLayout>
  );

  return (
    <Drawer
      header={renderHeader}
      footer={renderFooter}
      selectedIndex={selectedIndex}
      onSelect={(index) => setSelectedIndex(index)}>
      {DATA.map((el, index) => (
        <DrawerItem
          key={index}
          title={el.title}
          onPress={el.onPress}
          // @ts-ignore
          accessoryLeft={el.icon}
        />
      ))}
    </Drawer>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 128,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: 16,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileName: {
    marginHorizontal: 16,
  },
});
