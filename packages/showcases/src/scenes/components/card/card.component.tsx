import React from 'react';
import { StyleSheet } from 'react-native';
import { CardShowcase } from './card-showcase.component';
import { cardSettings, cardShowcase } from './type';
import { ShowcaseContainer } from '../../../components';

// @ts-ignore
export const CardScreen = ({ navigation }): React.ReactElement => {
  return (
    <ShowcaseContainer
      style={styles.container}
      showcase={cardShowcase}
      settings={cardSettings}
      renderItem={CardShowcase}
      onBackPress={navigation.goBack}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
  },
});
