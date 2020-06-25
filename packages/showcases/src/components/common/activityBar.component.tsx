import React from 'react';
import {
  View,
  ViewProps,
  StyleSheet,
} from 'react-native';

interface ComponentProps {
  children?: React.ReactNode;
}

export type ActivityBarProps = ViewProps & ComponentProps;

export class ActivityBar extends React.Component<ActivityBarProps> {

  public render(): React.ReactNode {
    const { style, children, ...restProps } = this.props;

    return (
      <View
        // @ts-ignore
        style={[styles.container, style]}
        {...restProps}>
        {children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
