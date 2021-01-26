import React from 'react';
import {
  Image,
  ImageProps,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  render,
  shallow,
  fireEvent,
  RenderAPI,
} from 'react-native-testing-library';
import { ReactTestInstance } from 'react-test-renderer';
import Theme, {
  StyleType,
  ThemeProvider,
  ThemeProviderProps,
} from '@southem/theme';
import {
  darkTheme,
  List,
  ListProps,
  ListItem,
  ListItemProps,
} from '@southem/ui';

Theme.registerDefaultTheme(darkTheme);

describe('@list-item: component checks', () => {
  // @ts-ignore
  const TestListItem = (props?: ListItemProps): React.ReactElement<ListItemProps> => {
    return (
      <ThemeProvider
        theme={'default'}>
        <ListItem {...props} />
      </ThemeProvider>
    );
  };

  describe('* template matches snapshot', () => {

    const iconSource: ImageSourcePropType = { uri: 'https://i.imgur.com/0y8Ftya.jpg' };

    describe('* title', () => {
      it('should render text passed to title prop', () => {
        const component: RenderAPI = render(
          <TestListItem title='I love Babel'/>,
        );

        const items: ReactTestInstance[] = component.getAllByType(ListItem);
        const { output } = shallow(items[0]);

        expect(items).toBeTruthy();
        expect(output).toMatchSnapshot();
      });
      it('should render component passed to title prop', () => {
        const component = render(
          <TestListItem title={props => <Text {...props}>I love Babel</Text>}/>,
        );

        expect(component.queryByText('I love Babel')).toBeTruthy();
      });
    });

    describe('* description', () => {
      it('should render text passed to description prop', () => {
        const component: RenderAPI = render(
          <TestListItem description='I love Babel'/>,
        );

        const items: ReactTestInstance[] = component.getAllByType(ListItem);
        const { output } = shallow(items[0]);

        expect(items).toBeTruthy();
        expect(output).toMatchSnapshot();
      });
      it('should render component passed to description prop', () => {
        const component = render(
          <TestListItem description={props => <Text {...props}>I love Babel</Text>}/>,
        );

        expect(component.queryByText('I love Babel')).toBeTruthy();
      });
    });

    describe('* with accessory', () => {
      const AccessoryLeft = (style: StyleType): React.ReactElement<ImageProps> => {
        return (
          <Image
            // @ts-ignore
            style={style}
            source={iconSource}
          />
        );
      };
      const AccessoryRight = (style: StyleType): React.ReactElement<ImageProps> => {
        return (
          <Image
            // @ts-ignore
            style={style}
            source={iconSource}
          />
        );
      };

      it('should render components passed to accessoryLeft or accessoryRight props', () => {
        const component: RenderAPI = render(
          <TestListItem
            // @ts-ignore
            title='I love Babel'
            description='Description'
            accessoryLeft={AccessoryLeft}
            accessoryRight={AccessoryRight}
          />,
        );

        const [accessoryLeft, accessoryRight]: ReactTestInstance[] = component.queryAllByType(Image);
        const { output } = shallow(accessoryLeft);

        expect(accessoryLeft).toBeTruthy();
        expect(accessoryRight).toBeTruthy();

        expect(accessoryLeft.props.source.uri).toEqual('https://i.imgur.com/0y8Ftya.jpg');
        expect(accessoryRight.props.source.uri).toEqual('https://i.imgur.com/0y8Ftya.jpg');
        expect(output).toMatchSnapshot();
      });
    });

    it('* text styles', () => {
      const component: RenderAPI = render(
        <TestListItem
          // @ts-ignore
          title='I love Babel'
          titleStyle={{
            fontSize: 22,
            lineHeight: 24,
          }}
          description='Description'
          descriptionStyle={{
            color: 'blue',
            letterSpacing: 6,
          }}
        />,
      );

      const items: ReactTestInstance[] = component.getAllByType(ListItem);
      const { output } = shallow(items[0]);

      expect(output).toMatchSnapshot();
    });
  });
  describe('* emits events with correct args', () => {
    const pressIndex: number = 0;

    const onPress = jest.fn();
    const onPressIn = jest.fn();
    const onPressOut = jest.fn();

    const component: RenderAPI = render(
      <TestListItem
        // @ts-ignore
        title='I love Babel'
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
      />,
    );

    it('should call onPress', async () => {
      const items: ReactTestInstance[] = component.getAllByType(ListItem);
      const touchable: ReactTestInstance = items[pressIndex].findByType(TouchableOpacity);

      fireEvent.press(touchable);

      expect(onPress).toHaveBeenCalled();
    });
    it('should call onPressIn', async () => {
      const items: ReactTestInstance[] = component.getAllByType(ListItem);
      const touchable: ReactTestInstance = items[pressIndex].findByType(TouchableOpacity);

      fireEvent(touchable, 'pressIn');

      expect(onPressIn).toHaveBeenCalled();
    });
    it('should call onPressOut', async () => {
      const items: ReactTestInstance[] = component.getAllByType(ListItem);
      const touchable: ReactTestInstance = items[pressIndex].findByType(TouchableOpacity);

      fireEvent(touchable, 'pressOut');

      expect(onPressOut).toHaveBeenCalled();
    });
  });
});

describe('@list: component checks', () => {
  // @ts-ignore
  const TestList = React.forwardRef((props: Partial<ListProps>, ref: React.Ref<List>) =>
    <ThemeProvider
      theme={'default'}>
      <List
        ref={ref}
        data={new Array(2)}
        renderItem={() => <ListItem />}
        {...props}
      />
    </ThemeProvider>,
  );
  it('* should render 2 list items', () => {
    const component: RenderAPI = render(
      <TestList />,
    );

    const items: ReactTestInstance[] = component.getAllByType(ListItem);

    expect(items.length).toEqual(2);
  });
  it('* should call renderItem once per visible item', () => {
    const renderItem = jest.fn();
    render(
      <TestList
        data={new Array(11)}
        renderItem={renderItem}
      />,
    );

    expect(renderItem).toHaveBeenCalledTimes(10);
  });
  it('* should be able to call scrollToEnd with ref', () => {
    // @ts-ignore
    const componentRef = React.createRef<List>();

    render(
      <TestList
        // @ts-ignore
        ref={componentRef}
        data={new Array(11)}
      />,
    );

    expect(componentRef.current.scrollToEnd).toBeTruthy();
    componentRef.current.scrollToEnd({});
  });
  it('* should be able to call scrollToIndex with ref', () => {
    // @ts-ignore
    const componentRef = React.createRef<List>();

    render(
      // @ts-ignore
      <TestList ref={componentRef}/>,
    );

    expect(componentRef.current.scrollToIndex).toBeTruthy();
    componentRef.current.scrollToIndex({ index: 0 });
  });
  it('* should be able to call scrollToOffset with ref', () => {
    // @ts-ignore
    const componentRef = React.createRef<List>();

    render(
      // @ts-ignore
      <TestList ref={componentRef}/>,
    );

    expect(componentRef.current.scrollToOffset).toBeTruthy();
    componentRef.current.scrollToOffset({ offset: 0 });
  });
});
