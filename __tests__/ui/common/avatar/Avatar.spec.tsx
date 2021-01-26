import React from 'react';
import {
  Image,
  StyleSheet,
} from 'react-native';
import {
  render,
  shallow,
  RenderAPI,
} from 'react-native-testing-library';
import { ReactTestInstance } from 'react-test-renderer';
import Theme, { ThemeProvider } from '@southem/theme';
import {
  darkTheme,
  Avatar,
  AvatarProps,
} from '@southem/ui';

Theme.registerDefaultTheme(darkTheme);

const Mock = (props?: Partial<AvatarProps>): React.ReactElement<{}> => {
  return (
    <ThemeProvider
      theme={'default'}>
      <Avatar
        source={{ uri: 'https://i.imgur.com/0y8Ftya.jpg' }}
        {...props} />
    </ThemeProvider>
  );
};

const renderComponent = (props?: Partial<AvatarProps>): RenderAPI => {
  return render(
    <Mock {...props} />,
  );
};

describe('@avatar: matches snapshot', () => {

  describe('* appearance', () => {

    it('* default', () => {
      const component: RenderAPI = renderComponent();

      const avatar = component.queryByType(Image);
      expect(avatar).toBeTruthy();

      const { output } = shallow(component.getByType(Avatar));
      expect(output).toMatchSnapshot();
      expect(avatar.props.source).toEqual({ uri: 'https://i.imgur.com/0y8Ftya.jpg' });
    });

  });

});

describe('@avatar: component checks', () => {

  it('* round shape styled properly', () => {
    const component: RenderAPI = renderComponent({ shape: 'round' });

    const avatar: ReactTestInstance = component.getByType(Image);

    const { borderRadius, height } = StyleSheet.flatten(avatar.props.style);

    expect(borderRadius).toEqual(height / 2);
  });

  it('* rounded shape styled properly', () => {
    const component: RenderAPI = renderComponent({ shape: 'rounded'});

    const avatar: ReactTestInstance = component.getByType(Image);

    const { borderRadius, height } = StyleSheet.flatten(avatar.props.style);

    expect(borderRadius).toEqual(height);
  });

  it('* square shape', () => {
    const component: RenderAPI = renderComponent({ shape: 'square' });

    const avatar: ReactTestInstance = component.getByType(Image);

    const { borderRadius } = StyleSheet.flatten(avatar.props.style);

    expect(borderRadius).toEqual(0);
  });

});
