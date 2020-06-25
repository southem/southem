import React from 'react';
import {
  StyleProp,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
} from 'react-native';
import { Text } from '@southem/ui';
import { HeartIconFill } from '../../assets/icons';

interface ComponentProps {
  textStyle?: StyleProp<TextStyle>;
  children?: string;
}

export type LikeButtonProps = TouchableOpacityProps & ComponentProps;

export class LikeButton extends React.Component<LikeButtonProps> {

  public render(): React.ReactNode {
    const { style, textStyle, children, ...restProps } = this.props;

    return (
      <TouchableOpacity
        style={[styles.container, style]}
        {...restProps}>
        {HeartIconFill(styles.icon)}
        <Text
          style={[styles.valueLabel, textStyle]}
          category='p2'>
          {children}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: 'red',
  },
  valueLabel: {
    marginHorizontal: 8,
  },
});
