import React from 'react';
import {
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  fireEvent,
  render,
  RenderAPI,
  shallow,
} from 'react-native-testing-library';
import Theme, {
  ThemeProvider,
  ThemeProviderProps,
} from '@southem/theme';
import {
  darkTheme,
  CheckBox,
  CheckBoxProps,
} from '@southem/ui';


Theme.registerDefaultTheme(darkTheme);

const CheckBoxMock = (props?: CheckBoxProps): React.ReactElement<ThemeProviderProps> => {
  return (
    <ThemeProvider
      theme={'default'}>
      <CheckBox {...props} />
    </ThemeProvider>
  );
};

const renderComponent = (props?: CheckBoxProps): RenderAPI => {
  return render(
    <CheckBoxMock {...props} />,
  );
};

describe('@checkbox: component checks', () => {
  it('* should request checking', () => {
    const onCheckedChange = jest.fn();
    const component = renderComponent({
      checked: false,
      onChange: onCheckedChange,
    });

    fireEvent.press(component.queryByType(TouchableOpacity));
    expect(onCheckedChange).toBeCalledWith(true, false);
  });

  it('* should request unchecking', () => {
    const onCheckedChange = jest.fn();
    const component = renderComponent({
      checked: true,
      onChange: onCheckedChange,
      });

    fireEvent.press(component.queryByType(TouchableOpacity));
    expect(onCheckedChange).toBeCalledWith(false, false);
  });

  it('* should request clearing indeterminate and checking', () => {
    const onCheckedChange = jest.fn();
    const component = renderComponent({
      checked: false,
      indeterminate: true,
      onChange: onCheckedChange,
    });

    fireEvent.press(component.queryByType(TouchableOpacity));
    expect(onCheckedChange).toBeCalledWith(true, false);
  });

  it('* should request clearing indeterminate and unchecking', () => {
    const onCheckedChange = jest.fn();
    const component = renderComponent({
      checked: true,
      indeterminate: true,
      onChange: onCheckedChange,
    });

    fireEvent.press(component.queryByType(TouchableOpacity));
    expect(onCheckedChange).toBeCalledWith(false, false);
  });

  it('* should render text', () => {
    const component = renderComponent({
      checked: false,
      children: <Text>I love Babel</Text>,
    });
    const { output } = shallow(component.getByText('I love Babel'));

    expect(output).toBeTruthy();
    expect(output).toMatchSnapshot();
  });

  it('* should render text as component', () => {
    const component = render(
      <CheckBoxMock checked>
        {props => <Text {...props}>I love Babel</Text>}
      </CheckBoxMock>,
    );

    const { output } = shallow(component.getByText('I love Babel'));

    expect(output).toBeTruthy();
    expect(output).toMatchSnapshot();
  });

  it('* should call onPressIn', () => {
    const onPressIn = jest.fn();
    const component = renderComponent({
      onPressIn,
    });

    fireEvent(component.queryByType(TouchableOpacity), 'pressIn');
    expect(onPressIn).toBeCalled();
  });

  it('* should call onPressOut', () => {
    const onPressOut = jest.fn();
    const component = renderComponent({
      onPressOut,
    });

    fireEvent(component.queryByType(TouchableOpacity), 'pressOut');
    expect(onPressOut).toBeCalled();
  });

  it('* should call onFocus', () => {
    const onFocus = jest.fn();

    const component = renderComponent({
      onFocus,
    });

    fireEvent(component.queryByType(TouchableOpacity), 'focus');
    expect(onFocus).toBeCalled();
  });

  it('* should call onBlur', () => {
    const onBlur = jest.fn();

    const component = renderComponent({
      onBlur,
    });

    fireEvent(component.queryByType(TouchableOpacity), 'blur');
    expect(onBlur).toBeCalled();
  });

});
