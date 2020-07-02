import React from 'react';
import { StyleSheet } from 'react-native';
import { ListItem } from '@southem/ui';

export const ListItemInlineStylingShowcase = () => (
  <ListItem
    style={styles.listItem}
    titleStyle={styles.listItemTitle}
    descriptionStyle={styles.listItemDescription}
    title='Title'
    description='Description'
  />
);

const styles = StyleSheet.create({
  listItem: { borderRadius: 8 },
  listItemTitle: { color: '#3366ff' },
  listItemDescription: { color: '#2E3A59' },
});
