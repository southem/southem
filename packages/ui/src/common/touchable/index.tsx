/* tslint:disable */
import React, {Component} from 'react';
import {
  View,
  Platform,
  ViewStyle,
  StyleProp,
  TouchableOpacity,
  TouchableOpacityProps,
  TouchableNativeFeedback,
  TouchableWithoutFeedback, ViewProps,
} from 'react-native';
// Dont set theming in this component
import {isAndroid} from '@southem/tools';

// tslint:disable-next-line:no-empty-interface
export interface TouchableProps extends TouchableOpacityProps {
  style: StyleProp<ViewStyle>;
  children: React.ReactElement;
}

export type TouchableElement = React.ReactElement<TouchableProps>;

let TouchableComponent;

if (isAndroid()) {
  TouchableComponent =
    Platform.Version <= 20 ? TouchableOpacity : TouchableNativeFeedback;
} else {
  TouchableComponent = TouchableOpacity;
}

if (TouchableComponent !== TouchableNativeFeedback) {
  TouchableComponent.SelectableBackground = () => ({});
  TouchableComponent.SelectableBackgroundBorderless = () => ({});
  TouchableComponent.Ripple = () => ({});
  TouchableComponent.canUseNativeForeground = () => false;
}

export class Touchable extends Component<TouchableProps> {
  static displayName = 'Touchable';
  static SelectableBackground = TouchableComponent.SelectableBackground;
  static SelectableBackgroundBorderless = TouchableComponent.SelectableBackgroundBorderless;
  static Ripple = TouchableComponent.Ripple;
  static canUseNativeForeground = TouchableComponent.canUseNativeForeground;

  render() {
    // @ts-ignore
    let { children, style, foreground, background, useForeground, ...attributes } = this.props;

    // Even though it works for TouchableWithoutFeedback and
    // TouchableNativeFeedback with this component, we want
    // the API to be the same for all components so we require
    // exactly one direct child for every touchable type.
    // children = React.Children.only(children);

    if (TouchableComponent === TouchableNativeFeedback) {
      // @ts-ignore
      useForeground = foreground && TouchableNativeFeedback.canUseNativeForeground();

      if (foreground && background) {
        console.warn(
          'Specified foreground and background for Touchable, only one can be used at a time. Defaulted to foreground.',
        );
      }

      if (Platform.Version >= 21) {
        background = TouchableNativeFeedback.Ripple(
          'ThemeAttrAndroid',
          true,
        );
      } else {
        background = TouchableNativeFeedback.SelectableBackground();
      }

      return (
        <TouchableComponent
          {...attributes}
          useForeground={useForeground}
          background={(useForeground && foreground) || background}>
          <View style={style}>
            {children}
          </View>
        </TouchableComponent>
      );
    } else if (TouchableComponent === TouchableWithoutFeedback) {
      return (
        <TouchableWithoutFeedback {...attributes}>
          <View style={style}>
            {children}
          </View>
        </TouchableWithoutFeedback>
      );
    } else {
      // @ts-ignore
      const TouchableFallback = this.props.fallback || TouchableComponent;
      return (
        <TouchableFallback {...attributes} style={style}>
          {children}
        </TouchableFallback>
      );
    }
  }
}
