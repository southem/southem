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
import Theme, {
  ThemeProvider,
  ThemeProviderProps,
} from '@southem/theme';
import {
  darkTheme,
  Icon,
  IconProps,
} from '@southem/ui';
import {ReactTestInstance} from 'react-test-renderer';

Theme.registerDefaultTheme(darkTheme);

const IconMock = (props?: IconProps): React.ReactElement<ThemeProviderProps> => {
  return (
    <ThemeProvider
      theme={'default'}>
      <Icon {...props} />
    </ThemeProvider>
  );
};

const renderComponent = (props?: IconProps): RenderAPI => {
  return render(
    <IconMock {...props} />,
  );
};

describe('@icon: component checks', () => {
  it('* should render without issues', () => {
    const renderedComponent: RenderAPI = renderComponent({
      name: 'wifi',
    });
    const { output } = shallow(renderedComponent.UNSAFE_getByType(Icon));

    expect(output).toBeTruthy();
    expect(output).toMatchSnapshot();
  });
  it('* should render with icon type', () => {
    const renderedComponent: RenderAPI = renderComponent({
      name: 'ac-unit',
      type: 'octicon',
      reverse: true,
      color: 'red',
      iconStyle: {
        backgroundColor: 'peru',
      },
    });
    const { output } = shallow(renderedComponent.UNSAFE_getByType(Icon));
    const componentIcon: ReactTestInstance = renderedComponent.UNSAFE_getByType(RNText);
    const styles  = StyleSheet.flatten(componentIcon.props.iconStyle);

    expect(styles.backgroundColor).toBe('peru');
    expect(output).toBeTruthy();
    expect(output).toMatchSnapshot();
  });
  it('* should apply default disabled styles', () => {
    const component: RenderAPI = renderComponent({
      name: '3d-rotation',
      type: 'octicon',
      disabled: true,
    });

    const { output } = shallow(component.UNSAFE_getByType(Icon));
    const { props }: ReactTestInstance = component.UNSAFE_getByType(RNText);

    expect(props.disabled).toBe(true);
    expect(output).toBeTruthy();
    expect(output).toMatchSnapshot();
  });
  it('* should apply custom disabled styles', () => {
    const onPress = jest.fn();
    const component: RenderAPI = renderComponent({
      onPress,
      name: '3d-rotation',
      type: 'octicon',
      disabled: true,
      disabledStyle: {
        backgroundColor: 'pink',
      },
    });

    const { output } = shallow(component.UNSAFE_getByType(Icon));
    const { props }: ReactTestInstance = component.UNSAFE_getByType(RNText);
    const styles  = StyleSheet.flatten(props.disabledStyle);

    fireEvent.press(component.UNSAFE_getByType(Icon));

    expect(styles.backgroundColor).toBe('pink');
    expect(props.disabled).toBe(true);
    expect(output).toBeTruthy();
    expect(onPress).toBeCalled();
    expect(output).toMatchSnapshot();
  });
  it('* should apply container style', () => {
    const component: RenderAPI = renderComponent({
      name: '3d-rotation',
      type: 'octicon',
      containerStyle: {
        backgroundColor: 'blue',
      },
    });

    const { output } = shallow(component.UNSAFE_getByType(Icon));
    const { props }: ReactTestInstance = component.UNSAFE_getByType(RNText);
    const styles  = StyleSheet.flatten(props.containerStyle);

    expect(styles.backgroundColor).toBe('blue');
    expect(props.disabled).toBe(undefined);
    expect(output).toBeTruthy();
    expect(output).toMatchSnapshot();
  });
  it('should apply reverse styles', () => {
    const component: RenderAPI = renderComponent({
      name: '3d-rotation',
      type: 'octicon',
      reverse: true,
    });

    const { output } = shallow(component.UNSAFE_getByType(Icon));
    const { props }: ReactTestInstance = component.UNSAFE_getByType(RNText);

    expect(props.reverse).toBe(true);
    expect(props.disabled).toBe(undefined);
    expect(output).toBeTruthy();
    expect(output).toMatchSnapshot();
  });
});
describe('@icon: matches snapshot', () => {
  describe('* interaction', () => {
    it('* stateless', () => {
      const component: RenderAPI = renderComponent({
        name: 'wifi',
      });
      const { output } = shallow(component.UNSAFE_getByType(Icon));

      expect(output).toMatchSnapshot();
    });
  });
  describe('* appearance', () => {
    it('* empty', () => {
      const component: RenderAPI = renderComponent();
      const { output } = shallow(component.UNSAFE_getByType(Icon));

      expect(output).toMatchSnapshot();
    });
    it('* with type', () => {
      const component: RenderAPI = renderComponent({
        name: 'access-alarm',
        type: 'octicon',
        color: 'red',
      });
      const { output } = shallow(component.UNSAFE_getByType(Icon));

      expect(output).toMatchSnapshot();
    });
    it('* custom style (styled)', () => {
      const component: RenderAPI = renderComponent({
        size: 24,
        style: {
          fontSize: 32,
          lineHeight: 34,
        },
      });
      const { output } = shallow(component.UNSAFE_getByType(Icon));

      expect(output).toMatchSnapshot();
    });
  });
});
