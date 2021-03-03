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
  renderTextElement,
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
  appearance?: 'default' | string;
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

// @ts-ignore
@withThemes('Input', mapPropToStyles)
export class Input extends React.Component<InputProps> {
  static displayName = 'TextInput';

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
        {renderTextElement(label, { style: labelStyle, ...labelProps })}
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
            testID='RNInputText'
            autoCapitalize={'none'}
            autoCorrect={false}
            underlineColorAndroid={'transparent'}
            editable={!disabled}
            onFocus={this.onTextFieldFocus}
            onBlur={this.onTextFieldBlur}
            maxLength={32}
            {...attributes}
            forwardedRef={this.input}
            style={StyleSheet.flatten([inputStyle, { color }])}
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
