import React, { PureComponent } from 'react';
import {
  StyleProp,
  ViewStyle,
  ActivityIndicatorProps,
  ActivityIndicator as RNActivityIndicator,
} from 'react-native';
// import PropTypes from 'prop-types';
import { withThemes } from '@southem/theme';

const mapPropToStyles = [
  'size',
  'color',
];

export interface ActivityProps extends ActivityIndicatorProps {
  animating?: boolean;
  /**
   * Size of the indicator.
   * Small has a height of 20, large has a height of 36.
   *
   * enum('small', 'large')
   */
  size?: number | 'small' | 'large';
  color?: string;
  style?: StyleProp<ViewStyle>;
}

export type ActivityIndicatorElement = React.ReactElement<ActivityProps>;

class ActivityIndicatorComponent extends PureComponent<ActivityProps>  {
  public static displayName = 'ActivityIndicator';
  public render() {
    return (
      <RNActivityIndicator
        {...this.props}
      />
    );
  }
}

// @ts-ignore
// tslint:disable-next-line:max-line-length
export const ActivityIndicator = withThemes<ActivityProps>('ActivityIndicator', mapPropToStyles)(ActivityIndicatorComponent);
