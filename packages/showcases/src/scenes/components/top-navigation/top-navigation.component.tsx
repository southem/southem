import React from 'react';
import { StyleSheet } from 'react-native';
import { TopNavigationElement, TopNavigationProps } from '@southem/ui';
import { TopNavigationShowcase } from './top-navigation-showcase.component';
import { topNavigationSettings, topNavigationShowcase } from './type';
import { ShowcaseContainer } from '../../../components';

// @ts-ignore
export const TopNavigationScreen = ({ navigation }): React.ReactElement => {

  const renderItem = (props: TopNavigationProps): TopNavigationElement => (
    <TopNavigationShowcase
      {...props}
      style={[styles.component, props.style]}
    />
  );

  return (
    <ShowcaseContainer
      showcase={topNavigationShowcase}
      settings={topNavigationSettings}
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

