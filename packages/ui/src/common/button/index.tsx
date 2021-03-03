// tslint:disable
import React, {PureComponent} from 'react';
import {
  StyleProp,
  TextStyle,
  ViewProps,
  ViewStyle,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  GestureResponderEvent,
} from 'react-native';
import { withThemes } from '@southem/theme';
import { Icon, IconProps } from '@southem/icons';
import {
  ButtonType,
  Overwrite,
  RenderProp,
  renderNode,
  renderTextElement,
  SizeType,
  StatusType,
  StyledComponentProps,
} from '../../devsupport';
import { TextProps } from '../text';
import { ActivityIndicator, ActivityProps } from '../activityIndicator';

type ButtonStyledProps = Overwrite<StyledComponentProps, {
  appearance?: ButtonType;
}>;

// @ts-ignore
export interface ButtonProps extends TouchableOpacityProps, ButtonStyledProps {
  accessoryLeft?: RenderProp<Partial<IconProps>>;
  accessoryRight?: RenderProp<Partial<IconProps>>;
  accessoryStyle?: StyleProp<ViewStyle>;
  status?: StatusType;
  size?: SizeType;
  fluid?: boolean;
  children?: RenderProp<TextProps> | React.ReactText;
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
  titleProps?: StyleProp<TextProps>;
  buttonStyle?: StyleProp<ViewProps>;
  disabled?: boolean;
  disabledStyle?: StyleProp<ViewStyle>;
  disabledTitleStyle?: StyleProp<ViewStyle>;
  loading?: boolean;
  loadingStyle?: StyleProp<TextStyle>;
  loadingProps?: StyleProp<ActivityProps>;
  circular?: boolean;
  containerStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
}

export type ButtonElement = React.ReactElement<ButtonProps>;

const mapPropToStyles = [
  'activeOpacity',
];

/**
 * Styled Button component.
 *
 * @extends React.Component
 *
 * @property {boolean} disabled - Determines whether component is disabled.
 * Default is `false`.
 *
 * @property {string} status - Determines the status of the component.
 * Can be `basic`, `primary`, `success`, `info`, `warning`, `danger`.
 *
 * @property {string} size - Determines the size of the component.
 * Can be `big`, `large`, `medium`, `small`, or `mini`.
 * Default is `medium`.
 *
 * @property {string|component} children - Determines title of the component.
 * @property {string} title - Determines title of the component.
 *
 * @property {StyleProp<TextStyle>} titleStyle - Customizes title style.
 *
 * @property {(style: StyleType) => React.ReactElement<ImageProps>} accessoryLeft - Determines accessoryLeft of the component.
 *
 * @property {string} appearance - Determines the appearance of the component.
 * Can be `filled` | `outline` | `ghost`.
 * Default is `filled`.
 *
 * @property TouchableOpacityProps
 *
 * @example Simple usage example
 *
 * ```
 * import React from 'react';
 * import {
 *   Button,
 *   ButtonProps,
 * } from '@southem/ui';
 *
 * export const ButtonShowcase = (props?: ButtonProps): React.ReactElement<ButtonProps> => {
 *
 *   const onPress = () => {
 *     // Handle Button press
 *   };
 *
 *   return (
 *     <Button onPress={onPress}>
 *       BUTTON
 *     </Button>
 *   );
 * };
 * ```
 *
 * @example Inline styling example
 *
 * ```
 * import React from 'react';
 * import {
 *   Button,
 *   ButtonProps,
 * } from '@southem/ui';
 *
 * export const ButtonShowcase = (props?: ButtonProps): React.ReactElement<ButtonProps> => {
 *   return (
 *     <Button
 *       style={styles.button}
 *       titleStyle={styles.buttonText}>
 *       BUTTON
 *     </Button>
 *   );
 * };
 * ```
 */
class ButtonComponent extends PureComponent<ButtonProps> {
  public static displayName: string = 'Button';
  public static defaultProps = {
    title: undefined,
    titleStyle: undefined,
    disabled: false,
    loading: false,
    size: 'medium',
    appearance: 'filled',
    fluid: false,
    circular: false,
    onPress: () => console.log('Please attach a method to this component'),
  };

  private onPress = (event: GestureResponderEvent): void => {
    if (this.props.onPress) {
      // @ts-ignore
      this.props.onPress(event);
    }
  };

  private onPressIn = (event: GestureResponderEvent): void => {
    if (this.props.onPressIn) {
      // @ts-ignore
      this.props.onPressIn(event);
    }
  };

  private onPressOut = (event: GestureResponderEvent): void => {
    if (this.props.onPressOut) {
      // @ts-ignore
      this.props.onPressOut(event);
    }
  };

  public render(): React.ReactElement<TouchableOpacityProps> {
    let {
      style,
      containerStyle,
      loading,
      loadingStyle,
      loadingProps,
      title,
      titleProps,
      titleStyle,
      accessoryLeft,
      accessoryRight,
      accessoryStyle,
      disabled,
      disabledStyle,
      disabledTitleStyle,
      children,
      ...attributes
    } = this.props;

    return (
      <TouchableOpacity
        activeOpacity={1.0}
        onPress={this.onPress}
        onPressIn={this.onPressIn}
        onPressOut={this.onPressOut}
        disabled={disabled || loading}
        style={StyleSheet.flatten([
          style,
          containerStyle,
        ])}
        {...attributes}>
        {loading && (
          <ActivityIndicator
            animating
            style={StyleSheet.flatten([loadingStyle])}
            {...loadingProps}
          />
        )}

        {!loading && accessoryLeft && renderNode(Icon, accessoryLeft, {
          containerStyle: StyleSheet.flatten([accessoryStyle]),
        })}

        {!loading && !!(children || title) && renderTextElement(
          // @ts-ignore
          children || title,
          titleProps,
          StyleSheet.flatten([
            titleStyle,
            disabled && disabledTitleStyle,
          ]),
        )}

        {!loading && accessoryRight&& renderNode(Icon, accessoryRight, {
          containerStyle: StyleSheet.flatten([accessoryStyle]),
        })}
      </TouchableOpacity>
    );
  }
}

export const Button = withThemes('Button', mapPropToStyles)(ButtonComponent);
