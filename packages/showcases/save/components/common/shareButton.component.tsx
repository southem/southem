import React from 'react';
import {
  StyleProp,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
} from 'react-native';
import { Text } from '@southem/ui';
import { ShareIconOutline } from '../../assets/icons';

interface ComponentProps {
  textStyle?: StyleProp<TextStyle>;
  children?: string;
}

export type ShareButtonProps = TouchableOpacityProps & ComponentProps;

export class ShareButton extends React.Component<ShareButtonProps> {

  public render(): React.ReactNode {
    const { style, textStyle, children, ...restProps } = this.props;

    return (
      <TouchableOpacity
        style={[styles.container, style]}
        {...restProps}>
        {ShareIconOutline(styles.icon)}
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
    tintColor: 'black',
  },
  valueLabel: {
    marginHorizontal: 8,
  },
});
