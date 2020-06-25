import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from '@southem/ui';

export const TextInlineStylingShowcase = () => (
  <Text style={styles.text}>Sample Text</Text>
);

const styles = StyleSheet.create({
  text: {
    color: '#3366FF',
    fontSize: 18,
  },
});
