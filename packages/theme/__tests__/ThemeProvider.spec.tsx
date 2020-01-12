import React from 'react';
import {
  View as RNView,
  Text as RNText,
} from 'react-native';
import renderer from 'react-test-renderer';
import Theme, {
  ThemeProvider,
  withThemes,
} from '../index';

const defaultTheme = {
  'ui.View': {
    color: '#000000',
    'ui.Text': {
      alignItems: 'stretch',
      fontWeight: '500',
      margin: 2,
    },
  },
  'component.Text': {
    color: '#fff',
    alignItems: 'stretch',
    margin: 2,
  },
};

Theme.registerDefaultTheme(defaultTheme);

it('renders correctly', () => {
  const View = withThemes('ui.View')(RNView);
  const Text = withThemes('ui.Text')(RNText);
  const CustomText = withThemes('component.Text')(RNText);

  const nextElement = (
    <ThemeProvider theme={'default'}>
      <View>
        <Text>Welcome</Text>
        <View>
          <CustomText>Component Text</CustomText>
        </View>
      </View>
    </ThemeProvider>
  );
  const tree = renderer.create(nextElement).toJSON();

  expect(tree).toMatchSnapshot();
});
