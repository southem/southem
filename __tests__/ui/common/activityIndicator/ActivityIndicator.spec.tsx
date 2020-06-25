import React from 'react';
import {
  StyleSheet,
  ActivityIndicator as RNActivityIndicator,
} from 'react-native';
import {
  render,
  RenderAPI,
  shallow,
} from 'react-native-testing-library';
import renderer, { ReactTestInstance } from 'react-test-renderer';
import Theme, { ThemeProvider } from '@southem/theme';
import {
  darkTheme,
  ActivityProps,
  ActivityIndicator,
} from '@southem/ui';

Theme.registerDefaultTheme(darkTheme);

const Mock = (props?: ActivityProps): React.ReactElement<{}> => {
  return (
    <ThemeProvider
      theme={'default'}>
      <ActivityIndicator {...props} />
    </ThemeProvider>
  );
};

const renderComponent = (props?: ActivityProps): RenderAPI => {
  return render(
    <Mock {...props} />,
  );
};

describe('@activityIndicator: matches snapshot', () => {
  describe('* appearance', () => {
    it('* default', () => {
      const component: RenderAPI = renderComponent({
        size: 'small',
      });

      const {output} = shallow(component.getByType(RNActivityIndicator));

      expect(output).toMatchSnapshot();
    });
  });
});

describe('@activityIndicator: component checks', () => {

  it('* color size styled properly', () => {
    const component: RenderAPI = renderComponent({
      size: 'small',
    });

    const activity: ReactTestInstance = component.getByType(RNActivityIndicator);
    const { color, size } = StyleSheet.flatten(activity.props);

    expect(size).toEqual('small');
    expect(color).toEqual('rgba(0, 0, 0, 0.5)');
  });
});
