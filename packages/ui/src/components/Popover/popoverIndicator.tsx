import React from 'react';
import {
  StyleProp,
  StyleSheet,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import { withThemes } from '@southem/theme';

export type PopoverIndicatorProps = ViewProps;
export type PopoverIndicatorElement = React.ReactElement<PopoverIndicatorProps>;

// @ts-ignore
@withThemes('PopoverIndicator')
export class PopoverIndicator extends React.Component<PopoverIndicatorProps> {

  private getComponentStyle = (source: StyleProp<ViewStyle>) => {
    const flatStyle: ViewStyle = StyleSheet.flatten(source);

    return {
      container: {
        // @ts-ignore: `width` is restricted to be a number
        borderLeftWidth: flatStyle.width,
        // @ts-ignore: `width` is restricted to be a number
        borderRightWidth: flatStyle.width,
        // @ts-ignore: `height` is restricted to be a number
        borderBottomWidth: flatStyle.height,
        borderBottomColor: flatStyle.backgroundColor,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        backgroundColor: 'transparent',
      },
    };
  };

  public render(): React.ReactElement<ViewProps> {
    const { style, ...props } = this.props;
    const styles = this.getComponentStyle(style);

    return (
      <View
        {...props}
        // @ts-ignore
        style={[style, styles.container]}
      />
    );
  }
}
