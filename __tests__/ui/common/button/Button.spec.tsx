import React from 'react';
import {
  Image,
  ImageProps,
  Text,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';
import {
  render,
  shallow,
  fireEvent,
  RenderAPI,
} from 'react-native-testing-library';
import Theme, {ThemeProvider} from '@southem/theme';
import {
  darkTheme,
  Button,
  ButtonProps,
} from '@southem/ui';

Theme.registerDefaultTheme(darkTheme);

const TestButton = (props?: ButtonProps): React.ReactElement<{}> => {
  return (
    <ThemeProvider
      theme={'default'}>
      <Button {...props} />
    </ThemeProvider>
  );
};

const renderComponent = (props?: ButtonProps): RenderAPI => {
  return render(
    <TestButton {...props} />,
  );
};

describe('@button: matches snapshot', () => {

  describe('* interaction', () => {
    it('* stateless', () => {
      const component: RenderAPI = renderComponent();
      const {output} = shallow(component.getByType(Button));

      expect(output).toMatchSnapshot();
    });
  });

  describe('* appearance', () => {

    const iconSource: ImageSourcePropType = {uri: 'https://i.imgur.com/0y8Ftya.jpg'};

    const icon = (style): React.ReactElement<ImageProps> => {
      return (
        <Image
          source={iconSource}
          style={style}
        />
      );
    };

    const text: React.ReactText = 'BUTTON';

    it('* empty', () => {
      const component: RenderAPI = renderComponent();
      const {output} = shallow(component.getByType(Button));

      expect(output).toMatchSnapshot();
    });

    it('* icon', () => {
      // @ts-ignore
      const component: RenderAPI = renderComponent({
        accessoryLeft: icon,
      });
      const {output} = shallow(component.getByType(Button));

      expect(output).toMatchSnapshot();
    });

    it('* text', () => {
      // @ts-ignore
      const component: RenderAPI = renderComponent({
        children: text,
      });
      const {output} = shallow(component.getByType(Button));

      expect(output).toMatchSnapshot();
    });

    it('* icon and title', () => {
      // @ts-ignore
      const component: RenderAPI = renderComponent({
        accessoryLeft: icon,
        title: text,
      });
      const { output } = shallow(component.getByType(Button));

      expect(output).toMatchSnapshot();
    });

    it('* icon and text', () => {
      // @ts-ignore
      const component: RenderAPI = renderComponent({
        accessoryLeft: icon,
        children: text,
      });
      const {output} = shallow(component.getByType(Button));

      expect(output).toMatchSnapshot();
    });

    it('* icon and text (styled)', () => {
      // @ts-ignore
      const component: RenderAPI = renderComponent({
        accessoryLeft: icon,
        children: text,
        size: 'big',
        titleStyle: {
          fontSize: 32,
          lineHeight: 34,
        },
      });
      const {output} = shallow(component.getByType(Button));

      expect(output).toMatchSnapshot();
    });
  });
});

describe('@button: component checks', () => {
  describe('* checks', () => {
    it('should render text passed to children', () => {
      const component = render(
        <TestButton>I love Babel</TestButton>,
      );

      expect(component.queryByText('I love Babel')).toBeTruthy();
    });

    it('should render component passed to children', () => {
      const component = render(
        <TestButton>
          {props => <Text {...props}>I love Babel</Text>}
        </TestButton>,
      );

      expect(component.queryByText('I love Babel')).toBeTruthy();
    });

    it('should render components passed to accessoryLeft or accessoryRight props', () => {
      const AccessoryLeft = (props?: ImageProps) => (
        <Image
          {...props}
          source={{ uri: 'https://akveo.github.io/eva-icons/fill/png/128/star.png' }}
        />
      );

      const AccessoryRight = (props?: ImageProps) => (
        <Image
          {...props}
          source={{ uri: 'https://akveo.github.io/eva-icons/fill/png/128/home.png' }}
        />
      );

      const component = render(
        <TestButton
          accessoryLeft={AccessoryLeft}
          accessoryRight={AccessoryRight}
        />,
      );

      const [accessoryLeft, accessoryRight] = component.queryAllByType(Image);

      expect(accessoryLeft).toBeTruthy();
      expect(accessoryRight).toBeTruthy();

      expect(accessoryLeft.props.source.uri).toEqual('https://akveo.github.io/eva-icons/fill/png/128/star.png');
      expect(accessoryRight.props.source.uri).toEqual('https://akveo.github.io/eva-icons/fill/png/128/home.png');
    });
  });
  describe('* emits', () => {
    it('should call onPress', () => {
      const onPress = jest.fn();

      // @ts-ignore
      const component: RenderAPI = renderComponent({
        onPress,
      });

      fireEvent.press(component.getByType(TouchableOpacity));

      expect(onPress).toBeCalled();
    });

    it('should call onPressIn', () => {
      const onPressIn = jest.fn();

      // @ts-ignore
      const component: RenderAPI = renderComponent({
        onPressIn,
      });

      fireEvent(component.queryByType(TouchableOpacity), 'pressIn');
      expect(onPressIn).toBeCalled();
    });

    it('should call onPressOut', () => {
      const onPressOut = jest.fn();

      // @ts-ignore
      const component: RenderAPI = renderComponent({
        onPressOut,
      });

      fireEvent(component.queryByType(TouchableOpacity), 'pressOut');
      expect(onPressOut).toBeCalled();
    });
  });
});
