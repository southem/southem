import React from 'react';
import {
  Image,
  TouchableOpacity,
  ViewProps,
  View,
} from 'react-native';
import {
  render,
  fireEvent,
  shallow,
  RenderAPI,
} from 'react-native-testing-library';
import { ReactTestInstance } from 'react-test-renderer';
import Theme, {
  ThemeProvider,
  ThemeProviderProps,
} from '@southem/theme';
import {
  darkTheme,
  Button,
  Text,
  Card,
  CardProps,
  CardFooterElement,
} from '@southem/ui';

Theme.registerDefaultTheme(darkTheme);

const bodyText: string = 'A nebula is an interstellar cloud of dust.';
const headerImageUri: string = 'https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704__340.jpg';

export const CardBodyContent = (): React.ReactElement<ViewProps> => {
  return (
    <View>
      <Text>
        {bodyText}
      </Text>
    </View>
  );
};

const TestCard = (props?: Partial<CardProps>): React.ReactElement<ThemeProviderProps> => {
  return (
    <ThemeProvider
      theme={'default'}>
      <Card {...props} />
    </ThemeProvider>
  );
};

describe('@card: component checks', () => {
  it('* render component passed to children', () => {
    const component = render(
      <TestCard>
        <Text>I love Babel</Text>
      </TestCard>,
    );

    expect(component.queryByText('I love Babel')).toBeTruthy();
  });

  it('* render component passed to footer prop', () => {
    const component = render(
      <TestCard footer={props => <Text {...props}>Test Card Footer</Text>}/>,
    );

    expect(component.queryByText('Test Card Footer')).toBeTruthy();
  });

  it('* header title renders properly', () => {
    const title: string = 'Title';
    const Header = (): React.ReactElement => (
      <Text>{title}</Text>
    );
    const element: RenderAPI = render(<TestCard header={Header}/>);
    const textElement: ReactTestInstance = element.getByText(title);

    expect(textElement).toBeTruthy();
    expect(textElement.props.children).toBe(title);
  });

  it('* custom header renders properly', () => {
    const Header = (): React.ReactElement => (
      <View>
        <Image
          source={{ uri: headerImageUri }}
          style={{ width: '100%', height: 200 }}
        />
      </View>
    );
    const element: RenderAPI = render(<TestCard header={Header}/>);
    const imageElement: ReactTestInstance = element.UNSAFE_getByType(Image);

    expect(imageElement.props.source.uri).toBe(headerImageUri);
    expect(imageElement).toBeTruthy();
  });

  it('* body element renders properly', () => {
    const element: RenderAPI = render(<TestCard children={CardBodyContent}/>);

    const bodyTextElement: ReactTestInstance = element.getByText(bodyText);

    expect(bodyTextElement).toBeTruthy();
    expect(bodyTextElement.props.children).toBe(bodyText);

    const {output} = shallow(element.getByText(bodyText));
    expect(output).toMatchSnapshot();
  });

  it(' footer renders properly', () => {
    const Footer = (): CardFooterElement => (
      <View>
        <Button size='small'>
          Accept
        </Button>
        <Button size='small' status='basic'>
          Cancel
        </Button>
      </View>
    );
    const element: RenderAPI = render(<TestCard footer={Footer}/>);

    expect(element.UNSAFE_getAllByType(Button)[0]).toBeTruthy();
    expect(element.UNSAFE_getAllByType(Button)[1]).toBeTruthy();
  });

  it('statuses works properly', () => {
    const Header = (): React.ReactElement => (
      <Text>I love Babel</Text>
    );
    const element: RenderAPI = render(
      <TestCard
        header={Header}
        status='danger'
      />,
    );
    const { props } = element.UNSAFE_getByType(Text);
    expect(props.children).toBe('I love Babel');
    // expect(props.accentStyle.height).toBe(expectedAccentHeight);
  });

  it('should call onPress', () => {
    const onPress = jest.fn();
    const component = render(
      <TestCard onPress={onPress}/>,
    );

    fireEvent.press(component.UNSAFE_queryByType(TouchableOpacity));
    expect(onPress).toBeCalled();
  });

  it('should call onPressIn', () => {
    const onPressIn = jest.fn();
    const component = render(
      <TestCard onPressIn={onPressIn}/>,
    );

    fireEvent(component.queryByType(TouchableOpacity), 'pressIn');
    expect(onPressIn).toBeCalled();
  });

  it('should call onPressOut', () => {
    const onPressOut = jest.fn();
    const component = render(
      <TestCard onPressOut={onPressOut}/>,
    );

    fireEvent(component.queryByType(TouchableOpacity), 'pressOut');
    expect(onPressOut).toBeCalled();
  });
});
