/* eslint-disable */
import React, {PureComponent} from 'react';
import {View, ViewProps} from 'react-native';
import { withThemes } from '@southem/theme';


interface BackgroundProps extends ViewProps {
  children?: React.ReactNode;
  // size: ControlSize | number;
  disabled: boolean;
  checked: boolean;
}

// @ts-ignore
@withThemes('Background')
export class Background extends PureComponent<BackgroundProps> {

  public render() {
    const { style, children, ...viewProps } = this.props;

    return (
      <View
        style={style}
        {...viewProps}>
        {children}
      </View>
    );
  }
}
