import React from 'react';
import {
  Image,
  StyleSheet,
  ImageSourcePropType,
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

const Mock = (props?: AvatarProps): React.ReactElement<{}> => {
  return (
    <ThemeProvider
      theme={'default'}>
      <Avatar {...props} />
    </ThemeProvider>
  );
};

const renderComponent = (props?: AvatarProps): RenderAPI => {
  return render(
    <Mock {...props} />,
  );
};

const iconSource: ImageSourcePropType = { uri: 'https://i.imgur.com/0y8Ftya.jpg' };

describe('@avatar: matches snapshot', () => {

  describe('* appearance', () => {

    it('* default', () => {
      const component: RenderAPI = renderComponent({
        source: iconSource,
      });

      const { output } = shallow(component.getByType(Avatar));

      expect(output).toMatchSnapshot();
    });

  });

});

describe('@avatar: component checks', () => {

  it('* round shape styled properly', () => {
    const component: RenderAPI = renderComponent({
      source: iconSource,
      shape: 'round',
    });

    const avatar: ReactTestInstance = component.getByType(Image);

    const { borderRadius, height } = StyleSheet.flatten(avatar.props.style);

    expect(borderRadius).toEqual(height / 2);
  });

  it('* rounded shape styled properly', () => {
    const component: RenderAPI = renderComponent({
      source: iconSource,
      shape: 'rounded',
    });

    const avatar: ReactTestInstance = component.getByType(Image);

    const { borderRadius, height } = StyleSheet.flatten(avatar.props.style);

    expect(borderRadius).toBeLessThan(height);
  });

  it('* square shape', () => {
    const component: RenderAPI = renderComponent({
      source: iconSource,
      shape: 'square',
    });

    const avatar: ReactTestInstance = component.getByType(Image);

    const { borderRadius } = StyleSheet.flatten(avatar.props.style);

    expect(borderRadius).toEqual(0);
  });

});
