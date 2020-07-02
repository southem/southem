/* eslint-disable */
import React, { PureComponent } from 'react';
import {
  StyleSheet,
  GestureResponderEvent,
  NativeSyntheticEvent,
  StyleProp,
  TargetedEvent,
  TextStyle,
  TouchableOpacityProps,
  View,
} from 'react-native';
import { withThemes } from '@southem/theme';
import {
  Overwrite,
  RenderProp,
  renderNode,
  renderTextElement,
  StatusType,
  StyledComponentProps,
} from '../../devsupport';
import { Touchable as RNTouchableOpacity } from '../touchable';
import { Text } from '../Text';
import type { TextProps, TextElement } from '../Text';

type RadioStyledProps = Overwrite<StyledComponentProps, {
  appearance?: 'default' | string;
}>;

// @ts-ignore
export interface RadioProps extends TouchableOpacityProps, RadioStyledProps {
  children?: RenderProp<TextProps> | React.ReactText;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  status?: StatusType;
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
}

export type RadioElement = React.ReactElement<RadioProps>;

const mapPropToStyles = [
  'activeOpacity',
];
const WrapContent = withThemes('WrapContent')(View);
const WrapView = withThemes('WrapView')(View);
const IconView = withThemes('IconView')(View);
const TouchableOpacity = withThemes('Touchable')(RNTouchableOpacity);

/**
 * Styled Radio component.
 *
 * @extends React.Component
 *
 * @property {boolean} checked - Determines whether component is checked.
 * Default is `false`.
 *
 * @property {boolean} disabled - Determines whether component is disabled.
 * Default is `false`.
 *
 * @property {string} status - Determines the status of the component.
 * Can be `primary`, `success`, `info`, `warning` or `danger`.
 *
 * @property {string} title - Determines title of the component.
 *
 * @property {StyleProp<TextStyle>} titleStyle - Customizes title style.
 *
 * @property {(selected: boolean) => void} onChange - Triggered on onChange value.
 *
 * @property TouchableOpacityProps
 *
 * @property StyledComponentProps
 *
 * @example Simple usage example
 *
 * ```
 * import React from 'react';
 * import { Radio } from '@southem/ui';
 *
 * export class RadioShowcase extends React.Component {
 *   public state = {
 *     checked: false,
 *   };
 *
 *   private onChange = (checked: boolean) => {
 *     this.setState({ checked });
 *   };
 *
 *   public render(): React.ReactNode {
 *     return (
 *       <Radio
 *         checked={this.state.checked}
 *         onChange={this.onChange}
 *       />
 *     )
 *   }
 * }
 * ```
 *
 * @example Inline styling example
 *
 * ```
 * import React from 'react';
 * import { Radio, RadioProps } from '@ui/common';
 *
 * export const RadioShowcase = (props?: RadioProps): React.ReactElement<RadioProps> => {
 *   return (
 *     <Radio
 *       style={styles.radio}
 *       titleStyle={styles.radioText}
 *       title='Place your title'
 *       checked={true}
 *     />
 *   );
 * };
 * ```
 */
// @ts-ignore
@withThemes('Radio', mapPropToStyles)
export class Radio extends PureComponent<RadioProps> {
  static displayName = 'Radio';
  static defaultProps = {
    children: null,
    title: '',
    titleStyle: undefined,
    disabled: false,
    checked: false,
    // tslint:disable-next-line:no-console
    onChange: () => console.log('Please attach a method to this component'),
  };

  private onFocus = (event: NativeSyntheticEvent<TargetedEvent>): void => {
    this.props.onFocus && this.props.onFocus(event);
  };

  private onBlur = (event: NativeSyntheticEvent<TargetedEvent>): void => {
    this.props.onBlur && this.props.onBlur(event);
  };

  private onPress = () => {
    if (this.props.onChange) {
      this.props.onChange(!this.props.checked);
    }
  };

  private onPressIn = (event: GestureResponderEvent) => {
    if (this.props.onPressIn) {
      this.props.onPressIn(event);
    }
  };

  private onPressOut = (event: GestureResponderEvent) => {
    if (this.props.onPressOut) {
      this.props.onPressOut(event);
    }
  };

  render() {
    const {
      children,
      title,
      titleStyle,
      style,
      disabled,
      ...attributes
    } = this.props;

    return (
      <RNTouchableOpacity
        activeOpacity={1.0}
        disabled={disabled}
        onPress={this.onPress}
        onPressIn={this.onPressIn}
        onPressOut={this.onPressOut}
        style={style}
        {...attributes}>
        <WrapContent>
          <WrapView />
          <View>
            <IconView />
          </View>
        </WrapContent>
        {renderTextElement(children || title, { style: titleStyle })}
      </RNTouchableOpacity>
    );
  }
}
