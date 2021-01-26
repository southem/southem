import React from 'react';
import { StyleSheet } from 'react-native';
import { TabViewElement, TabViewProps } from '@southem/ui';
import { TabViewShowcase } from './tab-view-showcase.component';
import { tabViewShowcase } from './type';
import { ShowcaseContainer } from '../../../components';

// @ts-ignore
export const TabViewScreen = ({ navigation }): React.ReactElement => {

  const renderItem = (props: TabViewProps): TabViewElement => (
    <TabViewShowcase
      {...props}
      style={[styles.component, props.style]}
    />
  );

  return (
    <ShowcaseContainer
      showcase={tabViewShowcase}
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

