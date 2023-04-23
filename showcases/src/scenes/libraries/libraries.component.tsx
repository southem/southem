import React from 'react';
import { ListRenderItemInfo, StyleSheet } from 'react-native';
import {
  Divider,
  List,
  ListItem,
  Text,
  TopNavigation,
  TopNavigationAction,
} from '@southem/ui';
import { ArrowIosBackIcon, ArrowIosForwardIcon, SafeAreaLayout } from '../../components';
import { WebBrowserService } from '../../services/web-browser.service';
import { data } from './data';
import { Library } from './type';

// @ts-ignore
export const LibrariesScreen = ({ navigation }): React.ReactElement => {
  const onItemPress = (index: number): void => {
    WebBrowserService.openBrowserAsync(data[index].link).then();
  };

  const renderBackAction = (): React.ReactElement => (
    <TopNavigationAction
      // @ts-ignore
      icon={ArrowIosBackIcon}
      onPress={navigation.goBack}
    />
  );

  // @ts-ignore
  const renderForwardIcon = (style): React.ReactElement => (
    <ArrowIosForwardIcon
      {...style}
      width='24'
      height='24'
      fill={'red'}
    />
  );

  const renderItem = (info: ListRenderItemInfo<Library>): React.ReactElement => (
    <ListItem
      style={styles.item}
      title={info.item.title}
      description={info.item.description}
      accessoryRight={renderForwardIcon}
      onPress={() => onItemPress(info.index)}
    />
  );

  const renderHeader = (): React.ReactElement => (
    <React.Fragment>
      <Text
        style={styles.headerTitle}
        category='s2'>
        This application is built with usage of tons Open Source community-driven libraries.
        This is our thanks to maintainers.
      </Text>
      <Divider style={styles.headerDivider}/>
    </React.Fragment>
  );

  return (
    <SafeAreaLayout
      style={styles.safeArea}
      insets='top'>
      <TopNavigation
        title='Libraries'
        // @ts-ignore
        accessoryLeft={renderBackAction()}
      />
      <List
        contentContainerStyle={styles.listContent}
        data={data}
        renderItem={renderItem}
        ListHeaderComponent={renderHeader}
      />
    </SafeAreaLayout>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  headerTitle: {
    paddingHorizontal: 8,
  },
  headerDivider: {
    marginVertical: 8,
  },
  listContent: {
    padding: 8,
  },
  item: {
    marginVertical: 4,
  },
});
