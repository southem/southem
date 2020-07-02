import React from 'react';
import { Text } from 'react-native';
import {
  fireEvent,
  render,
  RenderAPI,
  waitForElement,
} from 'react-native-testing-library';
import { ReactTestInstance } from 'react-test-renderer';
import Theme, { ThemeProvider } from '@southem/theme';
import {
  darkTheme,
  Switch,
  SwitchProps,
  Touchable,
} from '@southem/ui';

Theme.registerDefaultTheme(darkTheme);

describe('@toggle: component checks', () => {

  const TestSwitch = (props?: SwitchProps) => (
    <ThemeProvider
      theme={'default'}>
      <Switch {...props} />
    </ThemeProvider>
  );

  const touchables = {
    findRootTouchable: (api: RenderAPI) => api.queryByType(Touchable).children[0] as ReactTestInstance,
  };

  it('should request checking', async () => {
    const onCheckedChange = jest.fn();
    const component = render(
      <TestSwitch
        checked={false}
        onChange={onCheckedChange}
      />,
    );

    fireEvent(touchables.findRootTouchable(component), 'press');
    await waitForElement(() => {
      expect(onCheckedChange).toBeCalledWith(true);
    });
  });

  it('should request unchecking', async () => {
    const onCheckedChange = jest.fn();
    const component = render(
      <TestSwitch
        checked={true}
        onChange={onCheckedChange}
      />,
    );

    fireEvent(touchables.findRootTouchable(component), 'press');
    await waitForElement(() => {
      expect(onCheckedChange).toBeCalledWith(false);
    });
  });

  it('should render text', () => {
    const component = render(
      <TestSwitch>I love Babel</TestSwitch>,
    );

    expect(component.queryByText('I love Babel')).toBeTruthy();
  });

  it('should render text as component', () => {
    const component = render(
      <TestSwitch>
        {props => <Text {...props}>I love Babel</Text>}
      </TestSwitch>,
    );

    expect(component.queryByText('I love Babel')).toBeTruthy();
  });

});
