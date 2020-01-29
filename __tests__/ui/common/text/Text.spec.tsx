import React from 'react';
import {
  Text as RNText,
  StyleSheet,
} from 'react-native';
import {
  render,
  shallow,
  fireEvent,
  RenderAPI,
} from 'react-native-testing-library';
import { ReactTestInstance } from 'react-test-renderer';
import Theme, { ThemeProvider } from '@southem/theme';
import {
  darkTheme,
  Text,
  TextProps,
} from '@southem/ui';

import { typography } from '@southem/ui';

Theme.registerDefaultTheme(darkTheme);

const Mock = (props?: TextProps): React.ReactElement<{}> => {
  return (
    <ThemeProvider
      theme={'default'}>
      <Text {...props} />
    </ThemeProvider>
  );
};

const renderComponent = (props?: TextProps): RenderAPI => {
  return render(
    <Mock {...props} />,
  );
};

describe('@text: matches snapshot', () => {
  describe('* interaction', () => {
    it('* stateless', () => {
      const component: RenderAPI = renderComponent();
      const { output } = shallow(component.getByType(Text));

      expect(output).toMatchSnapshot();
    });
  });
  describe('* appearance', () => {

    const text: React.ReactText = 'TEXT';

    it('* empty', () => {
      const component: RenderAPI = renderComponent();
      const { output } = shallow(component.getByType(Text));

      expect(output).toMatchSnapshot();
    });

    it('* text', () => {
      const component: RenderAPI = renderComponent({ children: text });
      const { output } = shallow(component.getByType(Text));

      expect(output).toMatchSnapshot();
    });

    it('* text * category h1 and font size of 50', () => {
      const component: RenderAPI = renderComponent({
        category: 'h1',
        children: text,
      });
      const componentText: ReactTestInstance = component.getByType(RNText);

      const styles  = StyleSheet.flatten(componentText.props.style);
      const { output } = shallow(componentText);

      expect(styles.fontFamily).toEqual(typography.regular.fontFamily);
      expect(styles.fontSize).toBe(50);
      expect(output).toMatchSnapshot();
    });

    it('* custom text (styled)', () => {
      const component: RenderAPI = renderComponent({
        children: text,
        style: [{ color: 'red' }, { fontSize: 30 }],
      });
      const componentText: ReactTestInstance = component.getByType(RNText);

      const styles  = StyleSheet.flatten(componentText.props.style);
      const { output } = shallow(componentText);

      expect(styles).toEqual({
        ...typography.regular,
        color: 'red',
        fontSize: 30,
      });

      expect(output).toMatchSnapshot();
    });
  });

});
