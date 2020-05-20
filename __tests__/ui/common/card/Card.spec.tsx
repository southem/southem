import React from 'react';
import {
  Image,
  ViewProps,
  View,
} from 'react-native';
import {
  render,
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
  CardHeader,
  CardHeaderElement,
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

const Mock = (props?: Partial<CardProps>): React.ReactElement<ThemeProviderProps> => {
  return (
    <ThemeProvider
      theme={'default'}>
      <Card
        {...props}
        children={<CardBodyContent/>} />
    </ThemeProvider>
  );
};

describe('@card: component checks', () => {

  it('* header title renders properly', () => {
    const title: string = 'Title';
    const Header = (): CardHeaderElement => (
      <CardHeader title={title}/>
    );
    const element: RenderAPI = render(<Mock header={Header}/>);
    const textElement: ReactTestInstance = element.getByText(title);

    expect(textElement).toBeTruthy();
    expect(textElement.props.children).toBe(title);
  });

  it('* header description renders properly', () => {
    const description: string = 'Description';
    const Header = (): CardHeaderElement => (
      // @ts-ignore
      <CardHeader description={description} />
    );
    const element: RenderAPI = render(<Mock header={Header}/>);
    const textElement: ReactTestInstance = element.getByText(description);

    expect(textElement).toBeTruthy();
    expect(textElement.props.children).toBe(description);
  });

  it('* custom header renders properly', () => {
    const Header = (): CardHeaderElement => (
      <View>
        <Image
          source={{ uri: headerImageUri }}
          style={{ width: '100%', height: 200 }}
        />
      </View>
    );
    const element: RenderAPI = render(<Mock header={Header}/>);
    const imageElement: ReactTestInstance = element.getByType(Image);

    expect(imageElement.props.source.uri).toBe(headerImageUri);
    expect(imageElement).toBeTruthy();
  });

  it('* body element renders properly', () => {
    const element: RenderAPI = render(<Mock/>);

    const bodyTextElement: ReactTestInstance = element.getByText(bodyText);

    expect(bodyTextElement).toBeTruthy();
    expect(bodyTextElement.props.children).toBe(bodyText);
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
    const element: RenderAPI = render(<Mock footer={Footer}/>);

    expect(element.getAllByType(Button)[0]).toBeTruthy();
    expect(element.getAllByType(Button)[1]).toBeTruthy();
  });

  it('statuses works properly', () => {
    // const expectedAccentHeight: number = 4;
    const Header = (): CardHeaderElement => (
      <CardHeader title='Title'/>
    );
    const element: RenderAPI = render(
      <Mock
        header={Header}
        status='danger'
      />,
    );
    const { props } = element.getByType(CardHeader);
    expect(props.title).toBe('Title');
    // expect(props.accentStyle.height).toBe(expectedAccentHeight);
  });
});
