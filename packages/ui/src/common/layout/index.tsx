import React from 'react';
import {
  View,
  ViewProps,
} from 'react-native';

import {
  withThemes,
} from '@southem/theme';

export interface LayoutProps extends ViewProps {
  children?: React.ReactNode;
  type?: 'default' | string;
}

export type LayoutElement = React.ReactElement<LayoutProps>;

class LayoutComponent extends React.Component<LayoutProps> {

  public render(): React.ReactElement<ViewProps> {
    const { style, ...viewProps } = this.props;

    return (
      <View
        {...viewProps}
        style={style}
      />
    );
  }
}

export const Layout = withThemes('Layout')(LayoutComponent);
