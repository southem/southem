import React from 'react';
import {
  Text,
  StyleSheet,
} from 'react-native';
import {
  render,
  shallow,
  RenderAPI,
} from 'react-native-testing-library';
import { ReactTestInstance } from 'react-test-renderer';
import Theme, { ThemeProvider } from '@southem/theme';
import {
  darkTheme,
  Layout,
  LayoutProps,
} from '@southem/ui';

Theme.registerDefaultTheme(darkTheme);

const Mock = (props?: LayoutProps): React.ReactElement<{}> => {
  return (
    <ThemeProvider
      theme={'default'}>
      <Layout {...props} />
    </ThemeProvider>
  );
};

describe('@layout: component checks', () => {
  it('should render component passed to children', () => {
    const component = render(
      <Mock>
        <Text>I love Babel</Text>
      </Mock>,
    );

    expect(component.queryByText('I love Babel')).toBeTruthy();
  });
});
