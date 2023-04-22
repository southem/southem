import React from 'react';
import { StyleSheet } from 'react-native';
import { InputElement, InputProps } from '@southem/ui';
import { InputShowcase } from './input-showcase.component';
import { inputSettings, inputShowcase } from './type';
import { ShowcaseContainer } from '../../../components';

// @ts-ignore
export const InputScreen = ({ navigation }): React.ReactElement => {

  const renderItem = (props: InputProps): InputElement => (
    <InputShowcase
      style={styles.component}
      {...props}
    />
  );

  return (
    <ShowcaseContainer
      showcase={inputShowcase}
      settings={inputSettings}
      renderItem={renderItem}
      onBackPress={navigation.goBack}
    />
  );
};

const styles = StyleSheet.create({
  component: {
    flex: 1,
  },
});
