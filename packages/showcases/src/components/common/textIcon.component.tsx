import React from 'react';
import {
  ImageProps,
  ImageStyle,
  StyleProp,
  TextStyle,
  View,
  ViewProps,
  StyleSheet,
} from 'react-native';
import { Text } from '@southem/ui';
import { textStyle } from './style';

type IconProp = (style: StyleProp<ImageStyle>) => React.ReactElement<ImageProps>;

interface ComponentProps {
  textStyle?: StyleProp<TextStyle>;
  iconStyle?: StyleProp<ImageProps>;
  icon?: IconProp;
  children?: string;
}

export type TextIconProps = ViewProps & ComponentProps;

export class TextIcon extends React.Component<TextIconProps> {

  private renderIconElement = (icon: IconProp, style: StyleProp<ImageStyle>): React.ReactElement<ImageProps> => {
    const iconElement: React.ReactElement<ImageProps> = icon(style);

    return React.cloneElement(iconElement, {
      style: [style, iconElement.props.style],
    });
  };

  public render(): React.ReactNode {
    const { style, textStyle: derivedTextStyle, iconStyle, icon, children } = this.props;

    const iconElement = icon ?
      this.renderIconElement(icon, { ...styles.icon, ...StyleSheet.flatten(iconStyle) }) : null;

    return (
      <View style={[styles.container, style]}>
        {iconElement}
        <Text style={[styles.text, derivedTextStyle]}>
          {children}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginHorizontal: 8,
    ...textStyle.paragraph,
  },
  icon: {
    width: 16,
    height: 16,
  },
});
