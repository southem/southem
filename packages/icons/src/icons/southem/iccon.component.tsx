import React from 'react';
import { StyleSheet } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { IconProvider } from '../../service/type';

type IconElement = React.ReactElement<SvgProps>;
type IconComponent = React.ComponentType<SvgProps>;

export class SouthemIcon implements IconProvider<SvgProps> {

  constructor(private content: IconComponent) {
  }

  public toReactElement(props: SvgProps): IconElement {
    const Icon: IconComponent = this.content;

    const { style, ...svgProps } = props;
    // @ts-ignore - Southem UI components pass here `tintColor`
    const fillColor: string = StyleSheet.flatten(style || {}).tintColor;

    return (
      <Icon
        style={props.style}
        color={fillColor}
        {...svgProps}
      />
    );
  }
}
