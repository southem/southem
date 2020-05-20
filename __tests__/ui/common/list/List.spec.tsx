import React from 'react';
import {
  Image,
  ImageProps,
  ImageSourcePropType,
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

const data: any[] = Array(8);

describe('@list-item: component checks', () => {
  // @ts-ignore
  const ListMock = (props?: ListProps): React.ReactElement<ThemeProviderProps> => {
    return (
      <ThemeProvider
        theme={'default'}>
        <List {...props} />
      </ThemeProvider>
    );
  };
  const ListItemMock = (props?: ListItemProps): React.ReactElement<ListItemProps> => {
    return (
      <ThemeProvider
        theme={'default'}>
        <ListItem {...props} />
      </ThemeProvider>
    );
  };

  describe('* emits events with correct args', () => {
    const pressIndex: number = 0;

    const onPress = jest.fn();
    const onPressIn = jest.fn();
    const onPressOut = jest.fn();

    const item = () => {
      return (
        <ListItemMock
          // @ts-ignore
          title='Title'
          onPress={onPress}
          onPressIn={onPressIn}
          onPressOut={onPressOut}
        />
      );
    };

    const component: RenderAPI = render(
      <ListMock
        data={data}
        renderItem={item}
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
  describe('* template matches snapshot', () => {

    const iconSource: ImageSourcePropType = { uri: 'https://i.imgur.com/0y8Ftya.jpg' };

    it('* title', () => {
      const item = () => {
        return (
          // @ts-ignore
          <ListItemMock title='Title'/>
        );
      };

      const component: RenderAPI = render(
        <ListMock
          data={data}
          renderItem={item}
        />,
      );

      const items: ReactTestInstance[] = component.getAllByType(ListItem);
      const { output } = shallow(items[0]);

      expect(output).toMatchSnapshot();
    });

    it('* description', () => {
      const item = () => {
        return (
          // @ts-ignore
          <ListItemMock description='Description'/>
        );
      };

      const component: RenderAPI = render(
        <ListMock
          data={data}
          renderItem={item}
        />,
      );

      const items: ReactTestInstance[] = component.getAllByType(ListItem);
      const { output } = shallow(items[0]);

      expect(output).toMatchSnapshot();
    });

    it('* text styles', () => {
      const item = () => {
        return (
          <ListItemMock
            // @ts-ignore
            title='Title'
            titleStyle={{
              fontSize: 22,
              lineHeight: 24,
            }}
            description='Description'
            descriptionStyle={{
              color: 'blue',
              letterSpacing: 6,
            }}
          />
        );
      };

      const component: RenderAPI = render(
        <ListMock
          data={data}
          renderItem={item}
        />,
      );

      const items: ReactTestInstance[] = component.getAllByType(ListItem);
      const { output } = shallow(items[0]);

      expect(output).toMatchSnapshot();
    });

    it('* with icon', () => {
      const item = () => {
        return (
          <ListItemMock
            // @ts-ignore
            title='Title'
            description='Description'
            icon={icon}
          />
        );
      };

      const icon = (style: StyleType): React.ReactElement<ImageProps> => {
        return (
          <Image
            style={style}
            source={iconSource}
          />
        );
      };

      const component: RenderAPI = render(
        <ListMock
          data={data}
          renderItem={item}
        />,
      );

      const items: ReactTestInstance[] = component.getAllByType(ListItem);
      const { output } = shallow(items[0]);

      expect(output).toMatchSnapshot();
    });

    it('* with accessory', () => {
      const item = () => {
        return (
          <ListItemMock
            // @ts-ignore
            title='Title'
            description='Description'
            accessory={accessory}
          />
        );
      };

      const accessory = (style: StyleType): React.ReactElement<ImageProps> => {
        return (
          <Image
            style={style}
            source={iconSource}
          />
        );
      };

      const component: RenderAPI = render(
        <ListMock
          data={data}
          renderItem={item}
        />,
      );

      const items: ReactTestInstance[] = component.getAllByType(ListItem);
      const { output } = shallow(items[0]);

      expect(output).toMatchSnapshot();
    });

  });
});

describe('@list: component checks', () => {
  // @ts-ignore
  const ListMock = React.forwardRef((props: Partial<ListProps>, ref: React.Ref<List>) =>
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
  it('* renders proper amount of data', () => {
    const item = () => {
      return (
        // @ts-ignore
        <ListItem title='Title'/>
      );
    };

    const component: RenderAPI = render(
      <ListMock
        data={data}
        renderItem={item}
      />,
    );

    const items: ReactTestInstance[] = component.getAllByType(ListItem);

    expect(items.length).toEqual(8);
  });
  it('* should call renderItem once per visible item', () => {
    const renderItem = jest.fn();
    render(
      <ListMock
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
      <ListMock
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
      <ListMock ref={componentRef}/>,
    );

    expect(componentRef.current.scrollToIndex).toBeTruthy();
    componentRef.current.scrollToIndex({ index: 0 });
  });

  it('* should be able to call scrollToIndex with ref', () => {
    // @ts-ignore
    const componentRef = React.createRef<List>();

    render(
      // @ts-ignore
      <ListMock ref={componentRef}/>,
    );

    expect(componentRef.current.scrollToOffset).toBeTruthy();
    componentRef.current.scrollToOffset({ offset: 0 });
  });
});
