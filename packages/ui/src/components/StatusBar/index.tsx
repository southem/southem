import React from 'react';
import {
  StatusBar as RNStatusBar,
  StatusBarProps as RNStatusBarProps,
  ViewProps,
} from 'react-native';
import { withThemes } from '@southem/theme';

export type StatusBarProps = RNStatusBarProps;

class StatusBarComponent extends React.Component<StatusBarProps> {

  static displayName: string = 'StatusBar';

  public render(): React.ReactElement<ViewProps> {
    const { ...statusBarProps } = this.props;

    return (
      <RNStatusBar
        translucent
        {...statusBarProps}
      />
    );
  }
}

const mapPropToStyles = [
  'backgroundColor',
  'barStyle',
];

export const StatusBar = withThemes('StatusBar', mapPropToStyles)(StatusBarComponent);
