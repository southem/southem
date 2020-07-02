import React from 'react';
import { TouchableOpacity } from 'react-native';
import {
  fireEvent,
  render,
} from 'react-native-testing-library';
import Theme, { ThemeProvider } from '@southem/theme';
import {
  darkTheme,
  Radio,
  RadioGroup,
  RadioGroupProps,
} from '@southem/ui';

Theme.registerDefaultTheme(darkTheme);

describe('@radio-group: component checks', () => {

  const TestRadioGroup = (props?: Partial<RadioGroupProps>) => {
    const [selectedIndex, setSelectedIndex] = React.useState(props.selectedIndex);

    const onCheckedChange = (index: number): void => {
      setSelectedIndex(index);
      props.onChange && props.onChange(index);
    };

    return (
      <ThemeProvider
        theme={'default'}>
        <RadioGroup
          selectedIndex={selectedIndex}
          onChange={onCheckedChange}>
          <Radio>Option 1</Radio>
          <Radio>Option 2</Radio>
        </RadioGroup>
      </ThemeProvider>
    );
  };

  it('should have 2 radios', () => {
    const component = render(
      <TestRadioGroup/>,
    );

    expect(component.queryAllByType(Radio).length).toEqual(2);
  });

  it('should set radio selected by passing selectedIndex prop', () => {
    const component = render(
      <TestRadioGroup selectedIndex={1}/>,
    );

    expect(component.queryAllByType(Radio)[1].props.checked).toEqual(true);
  });

  it('should set radio selected by pressing it', () => {
    const component = render(
      <TestRadioGroup selectedIndex={1}/>,
    );

    fireEvent.press(component.queryAllByType(TouchableOpacity)[0]);
    expect(component.queryAllByType(Radio)[0].props.checked).toEqual(true);
  });

  it('should request selecting', () => {
    const onChange = jest.fn();
    const component = render(
      <TestRadioGroup onChange={onChange}/>,
    );

    fireEvent.press(component.queryAllByType(TouchableOpacity)[1]);
    expect(onChange).toHaveBeenCalledWith(1);
  });

});
