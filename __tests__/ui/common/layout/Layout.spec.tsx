import React from 'react';
import {
  Text,
} from 'react-native';
import {
  render,
} from 'react-native-testing-library';
import Theme, { ThemeProvider } from '@southem/theme';
import {
  darkTheme,
  Layout,
  LayoutProps,
} from '@southem/ui';

Theme.registerDefaultTheme(darkTheme);

const TestLayout = (props?: LayoutProps): React.ReactElement<{}> => {
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
      <TestLayout>
        <Text>I love Babel</Text>
      </TestLayout>,
    );

    expect(component.queryByText('I love Babel')).toBeTruthy();
  });
});
