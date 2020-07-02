import React from 'react';
import {
  ImageProps,
  ViewProps,
  StyleSheet,
} from 'react-native';
import { StarIconFill } from '../../../assets/icons';

class ThemedComplexComponentShowcase extends React.Component<ViewProps> {
  public render(): React.ReactElement<ImageProps> {
    return StarIconFill(styles.icon);
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 32,
    height: 32,
    tintColor: 'blue',
  },
});

export const ComplexComponentShowcase = () => {
  return (
    <ThemedComplexComponentShowcase />
  );
};
