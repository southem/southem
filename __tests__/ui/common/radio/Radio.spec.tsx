import React from 'react';
import {
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  fireEvent,
  render,
} from 'react-native-testing-library';
import Theme, { ThemeProvider } from '@southem/theme';
import {
  darkTheme,
  Radio,
  RadioProps,
} from '@southem/ui';

Theme.registerDefaultTheme(darkTheme);

describe('@radio: component checks', () => {

  const TestRadio = (props?: RadioProps) => (
    <ThemeProvider
      theme={'default'}>
      <Radio {...props} />
    </ThemeProvider>
  );

  it('should request checking', () => {
    const onCheckedChange = jest.fn();
    const component = render(
      <TestRadio
        checked={false}
        onChange={onCheckedChange}
      />,
    );

    fireEvent.press(component.queryByType(TouchableOpacity));
    expect(onCheckedChange).toBeCalledWith(true);
  });

  it('should request unchecking', () => {
    const onCheckedChange = jest.fn();
    const component = render(
      <TestRadio
        checked={true}
        onChange={onCheckedChange}
      />,
    );

    fireEvent.press(component.queryByType(TouchableOpacity));
    expect(onCheckedChange).toBeCalledWith(false);
  });

  it('should render text', () => {
    const component = render(
      <TestRadio>I love Babel</TestRadio>,
    );

    expect(component.queryByText('I love Babel')).toBeTruthy();
  });

  it('should render text as component', () => {
    const component = render(
      <TestRadio>
        {props => <Text {...props}>I love Babel</Text>}
      </TestRadio>,
    );

    expect(component.queryByText('I love Babel')).toBeTruthy();
  });

  it('should call onPressIn', () => {
    const onPressIn = jest.fn();
    const component = render(
      <TestRadio onPressIn={onPressIn}/>,
    );

    fireEvent(component.queryByType(TouchableOpacity), 'pressIn');
    expect(onPressIn).toBeCalled();
  });

  it('should call onPressOut', () => {
    const onPressOut = jest.fn();
    const component = render(
      <TestRadio onPressOut={onPressOut}/>,
    );

    fireEvent(component.queryByType(TouchableOpacity), 'pressOut');
    expect(onPressOut).toBeCalled();
  });

  it('should call onFocus', () => {
    const onFocus = jest.fn();

    const component = render(
      <TestRadio onFocus={onFocus}/>,
    );

    fireEvent(component.queryByType(TouchableOpacity), 'focus');
    expect(onFocus).toBeCalled();
  });

  it('should call onBlur', () => {
    const onBlur = jest.fn();

    const component = render(
      <TestRadio onBlur={onBlur}/>,
    );

    fireEvent(component.queryByType(TouchableOpacity), 'blur');
    expect(onBlur).toBeCalled();
  });

});
