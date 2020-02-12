/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the UI Southem TypeScript template
 * https://github.com/southem/southem
 *
 * Documentation: https://southem.github.io/docs
 *
 * @format
 */

import React from 'react';
import { StyleSheet } from 'react-native';
import Theme, {
  ThemeProvider,
} from '@southem/theme';
import {
  darkTheme,
  Button,
  Icon,
  Layout,
  Text,
} from '@southem/ui';

Theme.registerDefaultTheme(darkTheme);

/**
 * Use any valid `name` property from eva icons (e.g `github`, or `heart-outline`)
 * https://southem.github.io/icons
 */
const HeartIcon = (style) => (
  <Icon {...style} name='heart'/>
);

const App = () => (
  <>
    <ThemeProvider theme={'default'}>
      <Layout style={styles.container}>
        <Text style={styles.text} category='h1'>
          Welcome to UI Kitten 😻
        </Text>
        <Text style={styles.text} category='s1'>
          Start with editing App.js to configure your App
        </Text>
        <Text style={styles.text} appearance='hint'>
          For example, try changing theme to Dark by simply changing an import
        </Text>
        <Button style={styles.likeButton} icon={HeartIcon}>
          LIKE
        </Button>
      </Layout>
    </ThemeProvider>
  </>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
  },
  likeButton: {
    marginVertical: 16,
  },
});

export default App;
