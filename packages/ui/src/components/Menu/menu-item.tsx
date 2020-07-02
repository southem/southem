import React from 'react';
import {
  GestureResponderEvent,
  ImageProps,
  NativeSyntheticEvent,
  StyleSheet,
  TargetedEvent,
  View,
  TouchableOpacityProps,
} from 'react-native';
import { withThemes } from '@southem/theme';
import {
  PropsService,
  RenderProp,
  renderTextElement,
  renderNode,
  Overwrite,
  StyleType,
  StyledComponentProps,
} from '../../devsupport';
import { Icon, TextProps, Touchable } from '../../common';
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

  /**
  private getComponentStyle = (style: StyleType) => {
    const { paddingHorizontal, paddingVertical, paddingLeft, backgroundColor } = style;

    const titleStyles: StyleType = PropsService.allWithPrefix(style, 'title');
    const indicatorStyles: StyleType = PropsService.allWithPrefix(style, 'indicator');
    const iconStyles: StyleType = PropsService.allWithPrefix(style, 'icon');

    return {
      container: {
        paddingHorizontal: paddingHorizontal,
        paddingLeft: paddingLeft,
        paddingVertical: paddingVertical,
        backgroundColor: backgroundColor,
      },
      title: {
        marginHorizontal: titleStyles.titleMarginHorizontal,
        fontFamily: titleStyles.titleFontFamily,
        fontSize: titleStyles.titleFontSize,
        fontWeight: titleStyles.titleFontWeight,
        color: titleStyles.titleColor,
      },
      indicator: {
        width: indicatorStyles.indicatorWidth,
        backgroundColor: indicatorStyles.indicatorBackgroundColor,
      },
      icon: {
        width: iconStyles.iconWidth,
        height: iconStyles.iconHeight,
        marginHorizontal: iconStyles.iconMarginHorizontal,
        tintColor: iconStyles.iconTintColor,
      },
    };
  };
  **/

  public render(): React.ReactNode {
    const { style, title, accessoryLeft, accessoryRight, children, ...touchableProps } = this.props;

    return (
      <Touchable
        {...touchableProps}
        style={[styles.container, style]}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        onPress={this.onPress}
        onPressIn={this.onPressIn}
        onPressOut={this.onPressOut}>
        <View style={[StyleSheet.absoluteFill, styles.indicator]}/>
        {renderNode(Icon, accessoryLeft, { style: styles.icon })}
        {renderTextElement(title, { style: styles.title })}
        {renderNode(Icon, accessoryRight, { style: styles.icon })}
      </Touchable>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    flex: 1,
    textAlign: 'left',
  },
  icon: {},
  indicator: {},
});
