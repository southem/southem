import React from 'react';
import {
  Image,
  ImageProps,
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  RenderAPI,
  fireEvent,
  render,
} from 'react-native-testing-library';
import Theme, { ThemeProvider } from '@southem/theme';
import {
  darkTheme,
  BottomNavigation,
  BottomNavigationProps,
  BottomNavigationTab,
  BottomNavigationTabProps,
} from '@southem/ui';

Theme.registerDefaultTheme(darkTheme);

const Mock = (props?: BottomNavigationTabProps): React.ReactElement<{}> => {
  return (
    <ThemeProvider
      theme={'default'}>
      <BottomNavigationTab {...props} />
    </ThemeProvider>
  );
};

const renderComponent = (props?: BottomNavigationTabProps): RenderAPI => {
  return render(
    <Mock {...props} />,
  );
};

describe('@bottom-navigation-tab: component checks', () => {
  it('should render component passed to icon prop', () => {
    const Icon = (props?: ImageProps) => (
      <Image
        {...props}
        source={{ uri: 'https://i.imgur.com/0y8Ftya.jpg' }}
      />
    );

    const component = renderComponent({
      icon: Icon,
    });

    const image = component.queryByType(Image);

    expect(image).toBeTruthy();
    expect(image.props.source).toEqual({ uri: 'https://i.imgur.com/0y8Ftya.jpg' });
  });
  it('should render text passed to title prop', () => {
    const component = renderComponent({
      title: 'I love Babel',
    });

    expect(component.queryByText('I love Babel')).toBeTruthy();
  });
  it('should render component passed to title prop', () => {
    const component = renderComponent({
      title: (props) => <Text {...props}>I love Babel</Text>,
    });

    expect(component.queryByText('I love Babel')).toBeTruthy();
  });
  it('should call onPress', () => {
    const onPress = jest.fn();

    const component = renderComponent({
      onPress: onPress,
    });

    fireEvent(component.UNSAFE_queryByType(BottomNavigationTab), 'press');
    expect(onPress).toBeCalled();
  });
});

describe('@bottom-navigation: component checks', () => {

  const TestBottomNavigation = (props?: Partial<BottomNavigationProps>) => {
    const [selectedIndex, setSelectedIndex] = React.useState(props.selectedIndex);

    const onSelect = (index: number): void => {
      setSelectedIndex(index);
      props.onSelect && props.onSelect(index);
    };

    return (
      <ThemeProvider
        theme={'default'}>
        <BottomNavigation
          selectedIndex={selectedIndex}
          onSelect={onSelect}>
          <BottomNavigationTab title='Tab 0'/>
          <BottomNavigationTab title='Tab 1'/>
        </BottomNavigation>
      </ThemeProvider>
    );
  };

  it('should render 2 tabs passed to children', () => {
    const component = render(
      <TestBottomNavigation/>,
    );

    expect(component.queryAllByType(BottomNavigationTab).length).toEqual(2);
  });

  it('should set tab selected by passing selectedIndex prop', () => {
    const component = render(
      <TestBottomNavigation selectedIndex={1}/>,
    );

    expect(component.queryAllByType(BottomNavigationTab)[1].props.selected).toEqual(true);
  });

  it('should set tab selected by pressing it', () => {
    const component = render(
      <TestBottomNavigation selectedIndex={1}/>,
    );

    fireEvent.press(component.queryAllByType(TouchableOpacity)[0]);
    expect(component.queryAllByType(BottomNavigationTab)[0].props.selected).toEqual(true);
  });

  it('should request selecting', () => {
    const onSelect = jest.fn();

    const component = render(
      <TestBottomNavigation onSelect={onSelect}/>,
    );

    fireEvent.press(component.queryAllByType(TouchableOpacity)[1]);
    expect(onSelect).toHaveBeenCalledWith(1);
  });

});
