import React from 'react';
import {
  StatusBar as RNStatusBar,
  StatusBarProps as RNStatusBarProps,
  ViewProps,
} from 'react-native';
import { withThemes } from '@southem/theme';

export type StatusBarProps = RNStatusBarProps;

class StatusBarComponent extends React.Component<StatusBarProps> {

  static styledComponentName: string = 'StatusBar';

  public render(): React.ReactElement<ViewProps> {
    const { ...statusBarProps } = this.props;

    return (
      <RNStatusBar
        {...statusBarProps}
      />
    );
  }
}

export const StatusBar = withThemes('StatusBar')(StatusBarComponent);
