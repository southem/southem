import React from 'react';
import { StyleSheet } from 'react-native';
import { Avatar } from '@southem/ui';

export const AvatarInlineStylingShowcase = () => (
  <Avatar
    style={styles.avatar}
    source={require('../../assets/icon.png')}
  />
);

const styles = StyleSheet.create({
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 16,
  },
});
