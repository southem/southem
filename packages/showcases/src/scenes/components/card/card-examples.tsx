import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import {
  Button,
  ListItem,
  Text,
  TextElement,
} from '@southem/ui';

export const CardDefaultHeader = () => (
  <View style={styles.headerTextContainer}>
    <ListItem
      title='Title'
      description='Description'
    />
  </View>
);

export const CardCustomHeader = () => (
  <React.Fragment>
    <Image
      source={{ uri: 'https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704__340.jpg' }}
      style={styles.headerImage}
    />
    <View style={styles.headerTextContainer}>
      <Text category='h6'>
        Title
      </Text>
    </View>
  </React.Fragment>
);

export const CardFooter = () => (
  <View style={styles.footerContainer}>
    <Button
      style={styles.footerControl}
      size='small'
      status='basic'>
      Cancel
    </Button>
    <Button
      style={styles.footerControl}
      size='small'>
      Accept
    </Button>
  </View>
);

export const CardBody = (): TextElement => (
  <View style={styles.headerTextContainer}>
    <Text>
      A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases.
      Originally, nebula was a name for any diffuse astronomical object, including galaxies beyond the
      Milky Way.
    </Text>
  </View>
);

const styles = StyleSheet.create({
  headerTextContainer: {
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  headerImage: {
    flex: 1,
    height: 192,
    resizeMode: 'cover',
  },
  footerContainer: {
    margin: 8,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignContent: 'center',
  },
  footerControl: {
    width: '20%',
    marginHorizontal: 12,
  },
});
