import React from 'react';
import { render } from 'react-native-testing-library';
import { ReactTestInstance } from 'react-test-renderer';
import Theme, {ThemeProvider} from '@southem/theme';
import {
  darkTheme,
  Button,
  ButtonGroup,
  ButtonGroupProps,
} from '@southem/ui';

Theme.registerDefaultTheme(darkTheme);

describe('@button-group: component checks', () => {

  const TestButtonGroup = (props?: Partial<ButtonGroupProps>) => (
    <ThemeProvider
      theme={'default'}>
      <ButtonGroup {...props}>
        <Button/>
        <Button/>
      </ButtonGroup>
    </ThemeProvider>
  );

  it('should render 2 buttons', () => {
    const component = render(
      <TestButtonGroup/>,
    );

    expect(component.queryAllByType(Button).length).toEqual(2);
  });

  it('should render outline buttons', () => {
    const component = render(
      <TestButtonGroup appearance='outline'/>,
    );

    const buttons = component.getAllByType(Button);
    const buttonAppearance: string = buttons.reduce((current: string, child: ReactTestInstance): string => {
      return child.props.appearance;
    }, 'outline');

    expect(buttonAppearance).toEqual('outline');
  });

  it('should render giant buttons', () => {
    const component = render(
      <TestButtonGroup size='giant'/>,
    );

    const buttons = component.getAllByType(Button);
    const buttonSize: string = buttons.reduce((current: string, child: ReactTestInstance): string => {
      return child.props.size;
    }, 'giant');

    expect(buttonSize).toEqual('giant');
  });

  it('should render success buttons', () => {
    const component = render(
      <TestButtonGroup status='success'/>,
    );

    const buttons = component.getAllByType(Button);
    const buttonStatus: string = buttons.reduce((current: string, child: ReactTestInstance): string => {
      return child.props.status;
    }, 'success');

    expect(buttonStatus).toEqual('success');
  });

});
