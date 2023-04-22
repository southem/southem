import React, { ReactElement } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import {
  Button,
  Text,
  TextElement,
  Layout,
} from '@southem/ui';

export const CardDefaultHeader = (): ReactElement => (
  <Layout style={styles.headerTextContainer}>
    <Text category='h6'>Title</Text>
    <Text category='s1'>Description</Text>
  </Layout>
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

export const CardFooter = (): ReactElement => (
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
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  footerControl: {
    width: '30%',
    marginHorizontal: 4,
  },
});
