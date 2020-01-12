import React from 'react';
import {
  render,
  RenderAPI,
  shallow,
} from 'react-native-testing-library';
import renderer, { ReactTestInstance } from 'react-test-renderer';
import Theme, {
  ThemeProvider,
} from '@southem/theme';
// @ts-ignore
import { ActivityIndicator, ActivityProps, darkTheme } from '../../../src';

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

      const {output} = shallow(component.getByType(ActivityIndicator));

      expect(output).toMatchSnapshot();
    });

  });
});
