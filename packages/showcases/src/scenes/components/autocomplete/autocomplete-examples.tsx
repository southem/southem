import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Text, AutocompleteItem } from '@southem/ui';
import { DataProps } from './type';

export const CustomOptionsAutocompleteItem = ({ title, releaseYear, id }: DataProps): any => (
  <AutocompleteItem style={styles.wrapper} key={id}>
    <Avatar size='small' source={require('../../../assets/images/icon.png')}/>
    <View style={{ marginHorizontal: 8 }}>
      <Text>{title}</Text>
      <Text appearance='hint' category='p2'>
        {releaseYear}
      </Text>
    </View>
  </AutocompleteItem>
);

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'center',
  },
});
