import React from 'react';
import {
  View,
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
  Divider,
  DividerProps,
} from '@southem/ui';

Theme.registerDefaultTheme(darkTheme);

const Mock = (props?: DividerProps): React.ReactElement<{}> => {
  return (
    <ThemeProvider
      theme={'default'}>
      <Divider {...props} />
    </ThemeProvider>
  );
};

const renderComponent = (props?: DividerProps): RenderAPI => {
  return render(
    <Mock {...props} />,
  );
};

describe('@divider: matches snapshot', () => {
  describe('* interaction', () => {
    it('* stateless', () => {
      const component: RenderAPI = renderComponent();
      const { output } = shallow(component.getByType(Divider));

      expect(output).toMatchSnapshot();
    });
  });
  describe('* appearance', () => {

    const text: React.ReactText = 'TEXT';

    it('* empty', () => {
      const component: RenderAPI = renderComponent();
      const { output } = shallow(component.getByType(Divider));

      expect(output).toMatchSnapshot();
    });

    it('* text', () => {
      const component: RenderAPI = renderComponent({ children: text });
      const { output } = shallow(component.getByType(Divider));

      expect(output).toMatchSnapshot();
    });

    it('* text * align items center and justify content of center', () => {
      const component: RenderAPI = renderComponent({
        children: text,
      });
      const componentDivider: ReactTestInstance = component.getByType(View);

      const styles  = StyleSheet.flatten(componentDivider.props.style);
      const { output } = shallow(componentDivider);

      expect(styles.alignItems).toEqual('center');
      expect(styles.justifyContent).toBe('center');
      expect(output).toMatchSnapshot();
    });

    it('* custom text (styled)', () => {
      const component: RenderAPI = renderComponent({
        children: text,
        // @ts-ignore
        style: [{ color: 'red' }, { fontSize: 30 }],
      });
      const componentDivider: ReactTestInstance = component.getByType(View);

      const styles  = StyleSheet.flatten(componentDivider.props.style);
      const { output } = shallow(componentDivider);

      expect(styles).toEqual({
        alignItems: 'center',
        color: 'red',
        fontSize: 30,
        justifyContent: 'center',
      });

      expect(output).toMatchSnapshot();
    });
  });

});
