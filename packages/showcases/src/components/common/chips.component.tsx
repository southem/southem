import React from 'react';
import {
  View,
  TextProps,
  ImageProps,
  ViewProps,
  StyleSheet,
} from 'react-native';
import { StyleType } from '@southem/theme';

interface ComponentProps {
  icon?: (style: StyleType) => React.ReactElement<ImageProps>;
  children: React.ReactElement<TextProps>;
}

export type ChipsProps = ViewProps & ComponentProps;

export class Chips extends React.Component<ChipsProps> {

  private renderIcon = (): React.ReactElement<ImageProps> | null => {
    const { icon } = this.props;

    return icon ? icon(styles.icon) : null;
  };

  public render(): React.ReactNode {
    const { children, style } = this.props;

    return (
      <View style={[styles.container, style]}>
        {this.renderIcon()}
        {children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 4,
    backgroundColor: 'white',
    borderRadius: 100,
  },
  icon: {
    width: 13,
    height: 13,
    tintColor: 'white',
  },
});
