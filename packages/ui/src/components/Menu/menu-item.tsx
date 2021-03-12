import React from 'react';
import {
  GestureResponderEvent,
  NativeSyntheticEvent,
  StyleSheet,
  TargetedEvent,
  TouchableOpacityProps,
} from 'react-native';
import { withThemes } from '@southem/theme';
import {
  RenderProp,
  renderTextElement,
  renderIconElement,
  Overwrite,
  StyledComponentProps,
} from '../../devsupport';
import {
  ImageProps,
  TextProps,
  Touchable,
  View,
} from '../../common';
import { MenuItemDescriptor } from './menu.service';

type MenuItemStyledProps = Overwrite<StyledComponentProps, {
  appearance?: 'default' | 'grouped' | string;
}>;

type TouchableMenuItemProps = Overwrite<TouchableOpacityProps, {
  onPress?: (descriptor: MenuItemDescriptor, event?: GestureResponderEvent) => void;
}>;

// @ts-ignore
export interface MenuItemProps extends TouchableMenuItemProps, MenuItemStyledProps {
  title?: RenderProp<TextProps> | React.ReactText;
  accessoryLeft?: RenderProp<Partial<ImageProps>>;
  accessoryRight?: RenderProp<Partial<ImageProps>>;
  selected?: boolean;
  descriptor?: MenuItemDescriptor;
}

export type MenuItemElement = React.ReactElement<MenuItemProps>;

/**
 * A single item in Menu.
 * Items should be rendered within Menu or MenuGroup to provide a usable navigation component.
 *
 * @extends React.Component
 *
 * @property {ReactText | (TextProps) => ReactElement} title - String, number or a function component
 * to render within the item.
 * If it is a function, expected to return a Text.
 *
 * @property {(ImageProps) => ReactElement} accessoryLeft - Function component
 * to render to start of the *title*.
 * Expected to return an Image.
 *
 * @property {(ImageProps) => ReactElement} accessoryRight - Function component
 * to render to end of the *title*.
 * Expected to return an Image.
 *
 * @property {TouchableOpacityProps} ...TouchableOpacityProps - Any props applied to TouchableOpacity component.
 *
 * @overview-example MenuItemSimpleUsage
 */
// @ts-ignore
@withThemes('MenuItem')
export class MenuItem extends React.Component<MenuItemProps> {
  static defaultProps: Partial<MenuItemProps> = {
    appearance: 'default',
  };

  private onFocus = (event: NativeSyntheticEvent<TargetedEvent>): void => {
    this.props.onFocus && this.props.onFocus(event);
  };

  private onBlur = (event: NativeSyntheticEvent<TargetedEvent>): void => {
    this.props.onBlur && this.props.onBlur(event);
  };

  private onPress = (event: GestureResponderEvent): void => {
    this.props.onPress && this.props.onPress(this.props.descriptor, event);
  };

  private onPressIn = (event: GestureResponderEvent): void => {
    this.props.onPressIn && this.props.onPressIn(event);
  };

  private onPressOut = (event: GestureResponderEvent): void => {
    this.props.onPressOut && this.props.onPressOut(event);
  };

  public render(): React.ReactNode {
    const { style, title, accessoryLeft, accessoryRight, children, ...touchableProps } = this.props;

    return (
      // @ts-ignore
      <Touchable
        {...touchableProps}
        style={style}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        onPress={this.onPress}
        onPressIn={this.onPressIn}
        onPressOut={this.onPressOut}>
        <View style={[StyleSheet.absoluteFill]}/>
        {renderIconElement(accessoryLeft)}
        {renderTextElement(title)}
        {renderIconElement(accessoryRight)}
      </Touchable>
    );
  }
}
