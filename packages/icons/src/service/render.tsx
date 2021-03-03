import React from 'react';
import { StyleSheet } from 'react-native';
import { IconProvider } from './type';
import {
  IconProps,
  IconElement,
  IconComponent,
} from '../type';

export class RenderIcon implements IconProvider<IconProps> {

  constructor(private content: IconComponent, private name: string) {
  }

  public toReactElement(props: IconProps): IconElement {
    const Icon: IconComponent = this.content;
    const name: string = this.name;
    const { style, ...iconProps } = props;
    // @ts-ignore - UI Kitten components pass here `tintColor`
    const fillColor: string = StyleSheet.flatten(style || {}).tintColor;

    // @ts-ignore
    return (
      <Icon
        style={props.style}
        name={name}
        color={fillColor}
        {...iconProps}
      />);
  }
}
