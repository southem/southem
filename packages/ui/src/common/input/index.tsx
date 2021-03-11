import React from 'react';
import {
  Animated,
  Easing,
  ImageProps,
  NativeSyntheticEvent,
  StyleProp,
  StyleSheet,
  TextInputFocusEventData,
  TextInputProps,
  TextStyle,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import { withThemes } from '@southem/theme';
import { Icon } from '@southem/icons';
import {
  StatusType,
  SizeType,
  RenderProp,
  renderNode,
  Overwrite,
  StyledComponentProps,
} from '../../devsupport';
import { TextProps } from '../text';
import InputContainer from './InputContainer';
import WrapIcon from './WrapIcon';
import TextInput from './TextInput';
import { Message, Label } from './Message';

type InputStyledProps = Overwrite<StyledComponentProps, {
  appearance?: 'default' | 'borderline' | 'underline' | string;
}>;

// @ts-ignore
export interface InputProps extends TextInputProps, InputStyledProps {
  status?: StatusType;
  size?: SizeType;
  disabled?: boolean;
  isValid?: boolean;
  shake?: boolean;
  label?: RenderProp<TextProps> | React.ReactText;
  labelStyle?: StyleProp<TextStyle>;
  labelProps?: RenderProp<TextProps>;
  caption?: RenderProp<TextProps> | React.ReactText;
  captionStyle?: StyleProp<ViewStyle>;
  captionProps?: RenderProp<Partial<ViewProps>>;
  accessoryLeft?: RenderProp<Partial<ImageProps>>;
  accessoryLeftContainerStyle?: StyleProp<ViewStyle>;
  accessoryRight?: RenderProp<Partial<ImageProps>>;
  accessoryRightContainerStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<ViewStyle>;
  inputContainerStyle?: StyleProp<ViewStyle>;
  inputComponent?: React.ReactElement;
}

export type InputElement = React.ReactElement<InputProps>;

const IconMaterial = Animated.createAnimatedComponent(Icon);
const mapPropToStyles = [
  'placeholderTextColor',
  'selectionColor',
  'underlineColorAndroid',
];

/**
 * Inputs let users enter and edit text.
 *
 * @extends React.Component
 *
 * @property {string} value - A value displayed in input field.
 *
 * @property {(string) => void} onChangeText - Called when the value should be changed.
 *
 * @property {() => void} onFocus - Called when input field becomes focused.
 *
 * @property {() => void} onBlur - Called when input field looses focus.
 *
 * @property {string} placeholder - A string to be displayed when there is no value.
 *
 * @property {boolean} disabled - Whether input field is disabled.
 * This property overrides `editable` property of TextInput.
 *
 * @property {ReactText | (TextProps) => ReactElement} label - String, number or a function component
 * to render above the input field.
 * If it is a function, expected to return a Text.
 *
 * @property {ReactText | (TextProps) => ReactElement} caption - String, number or a function component
 * to render below the input field.
 * If it is a function, expected to return a Text.
 *
 * @property {(ImageProps) => ReactElement} accessoryLeft - Function component
 * to render to start of the text.
 * Expected to return an Image.
 *
 * @property {(ImageProps) => ReactElement} accessoryRight - Function component
 * to render to end of the text.
 * Expected to return an Image.
 *
 * @property {(ImageProps) => ReactElement} captionIcon - Function component
 * to render to start of the *caption*.
 * Expected to return an Image.
 *
 * @property {string} status - Status of the component.
 * Can be `basic`, `primary`, `success`, `info`, `warning`, `danger` or `control`.
 * Defaults to *basic*.
 * Useful for giving user a hint on the input validity.
 * Use *control* status when needed to display within a contrast container.
 *
 * @property {string} size - Size of the component.
 * Can be `small`, `medium` or `large`.
 * Defaults to *medium*.
 *
 * @property {StyleProp<TextStyle>} textStyle - Customizes the style of the text field.
 *
 * @property {TextInputProps} ...TextInputProps - Any props applied to TextInput component.
 *
 * @overview-example InputSimpleUsage
 *
 * @overview-example InputStates
 * Input can be disabled with `disabled` property.
 *
 * @overview-example InputStatus
 * Or marked with `status` property, which is useful within forms validation.
 * An extra status is `control`, which is designed to be used on high-contrast backgrounds.
 *
 * @overview-example InputAccessories
 * Input may contain labels, captions and inner views by configuring `accessoryLeft` or `accessoryRight` properties.
 * Within Eva, Input accessories are expected to be images or [svg icons](guides/icon-packages).
 *
 * @overview-example InputSize
 * To resize Input, a `size` property may be used.
 *
 * @overview-example InputStyling
 * Input and it's inner views can be styled by passing them as function components.
 * ```
 * import { Input, Text } from '@southem/ui';
 *
 * <Input
 *   textStyle={{ ... }}
 *   label={props => <Text {...props}>Label</Text>}
 *   caption={props => <Text {...props}>Caption</Text>}
 * />
 * ```
 *
 * @overview-example InputTheming
 * In most cases this is redundant, if [custom theme is configured](guides/branding).
 */
// @ts-ignore
@withThemes('Input', mapPropToStyles)
export class Input extends React.Component<InputProps> {
  static displayName = 'TextInput';
  public static defaultProps = {
    appearance: 'borderline',
    underlineColorAndroid: 'transparent',
    autoCapitalize: 'none',
    autoCorrect: false,
    maxLength: 32,
  };

  // @ts-ignore
  private input = React.createRef<TextInput>();
  private shakeAnimationValue = new Animated.Value(0);
  private scaleIconValue = new Animated.Value(0);

  public focus = (): void => {
    this.input.current?.focus();
  };

  public blur = (): void => {
    this.input.current?.blur();
  };

  /**
   * Removes all text from the TextInput.
   */
  public clear = (): void => {
    this.input.current?.clear();
  };

  /**
   * Returns `true` if the input is currently focused, `false` otherwise.
   */
  public isFocused = (): boolean => {
    return this.input.current?.isFocused();
  };

  /**
   * @internal
   */
  public setNativeProps(nativeProps: Object) {
    return this.input.current?.setNativeProps(nativeProps);
  }

  private onTextFieldFocus = (event: NativeSyntheticEvent<TextInputFocusEventData>): void => {
    this.props.onFocus && this.props.onFocus(event);
  };

  private onTextFieldBlur = (event: NativeSyntheticEvent<TextInputFocusEventData>): void => {
    this.props.onBlur && this.props.onBlur(event);
  };

  UNSAFE_componentWillMount() {
    this.props.shake && this.shake();
  }

  UNSAFE_componentWillReceiveProps(newProps) {
    if (this.props.isValid === false && newProps.isValid === true) {
      this.scaleIcon(1);
    } else if (this.props.isValid === false && newProps.isValid === false)  {
      this.scaleIcon(0);
    }
  }

  shake = () => {
    const { shakeAnimationValue } = this;
    shakeAnimationValue.setValue(0);
    Animated.timing(shakeAnimationValue, {
      duration: 375,
      toValue: 3,
      // @ts-ignore
      ease: Easing.bounce,
    }).start();
  };

  scaleIcon = (value) => {
    // @ts-ignore
    Animated.timing(
      this.scaleIconValue,
      // @ts-ignore
      { toValue: value, duration: 400, easing: Easing.easeOutBack },
    ).start();
  };

  render() {
    const {
      style,
      disabled,
      containerStyle,
      inputContainerStyle,
      accessoryLeft,
      accessoryLeftContainerStyle,
      accessoryRight,
      accessoryRightContainerStyle,
      inputComponent: InputComponent = TextInput,
      inputStyle,
      captionProps,
      captionStyle,
      caption,
      label,
      labelStyle,
      labelProps,
      ...attributes
    } = this.props;

    const color = disabled ? '#4b5461' : 'rgba(70,76,83,0.3)';
    const translateX = this.shakeAnimationValue.interpolate({
      inputRange: [0, 0.5, 1, 1.5, 2, 2.5, 3],
      outputRange: [0, -15, 0, 15, 0, -15, 0],
    });
    const iconScale = this.scaleIconValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0.01, 1.6, 1],
    });

    return (
      <View style={StyleSheet.flatten([style, containerStyle])}>
        {renderNode(Label, label, { style: labelStyle, ...labelProps })}
        <InputContainer
          style={StyleSheet.flatten([
            inputContainerStyle,
            { transform: [{ translateX }] },
          ])}>
          {accessoryLeft && (
            <WrapIcon
              style={StyleSheet.flatten([
                accessoryLeftContainerStyle,
              ])}>
              {renderNode(Icon, accessoryLeft, { size: 20 })}
            </WrapIcon>
          )}
          <InputComponent
            forwardedRef={this.input}
            editable={!disabled}
            onFocus={this.onTextFieldFocus}
            onBlur={this.onTextFieldBlur}
            style={StyleSheet.flatten([inputStyle, { color }])}
            {...attributes}
          />
          <IconMaterial
            type={'material-community'}
            name={'check-circle'}
            color={'#90D796'}
            size={20}
            style={[{transform: [{scale: iconScale}]}]}
          />
          {accessoryRight && (
            <WrapIcon style={[accessoryRightContainerStyle]}>
              {renderNode(Icon, accessoryRight, { size: 20 })}
            </WrapIcon>
          )}
        </InputContainer>
        {!!caption && renderNode(Message, caption,  {
          ...captionProps,
          style: [captionStyle && captionStyle],
        })}
      </View>
    );
  }
}
