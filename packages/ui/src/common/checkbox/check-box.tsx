import React, { PureComponent } from 'react';
import {
  ViewStyle,
  TextStyle,
  StyleProp,
  StyleSheet,
  TargetedEvent,
  GestureResponderEvent,
  NativeSyntheticEvent,
  TouchableOpacityProps,
} from 'react-native';
import { withThemes } from '@southem/theme';
import {
  StatusType,
  renderNode,
  renderTextElement,
} from '../../devsupport';
import { View } from '../view';
import { TextProps } from '../text';
import {
  CheckMark,
  CheckMarkProps,
} from './check-mark';
import { Touchable as RNTouchableOpacity } from '../touchable';

// @ts-ignore
const mapPropToStyles = [
  'activeOpacity',
];

export interface CheckBoxProps extends TouchableOpacityProps {
  style?: StyleProp<ViewStyle>;
  children?: any;
  text?: string;
  textStyle?: StyleProp<TextStyle>;
  checked?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  status?: StatusType;
  onChange?: (checked: boolean, indeterminate: boolean) => void;
}

type TextElement = React.ReactElement<TextProps>;
export type CheckBoxElement = React.ReactElement<CheckBoxProps>;

/**
 * Styled CheckBox component.
 *
 * @extends React.Component
 *
 * @property {boolean} checked - Determines whether component is checked.`
 * Default is `false`.
 *
 * @property {boolean} disabled - Determines whether component is disabled.
 * Default is `false.
 *
 * @property {string} status - Determines the status of the component.
 * Can be `primary`, `success`, `info`, `warning` or `danger`.
 *
 * @property {string} text - Determines text of the component.
 *
 * @property {StyleProp<TextStyle>} textStyle - Customizes text style.
 *
 * @property {(checked: boolean) => void} onChange - Fires on checkbox value change.
 *
 * @property TouchableOpacityProps
 *
 * @property CheckBoxProps
 *
 * @example Simple usage example
 *
 * ```
 * import React from 'react';
 * import { Checkbox } from '@southem/ui';
 *
 * export class CheckBoxShowcase extends React.Component {
 *
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
 *       <Checkbox
 *         checked={this.state.checked}
 *         onChange={this.onChange}
 *       />
 *     );
 *   }
 * }
 * ```
 *
 * @example Inline styling example
 *
 * ```
 * import React from 'react';
 * import { CheckBox, CheckBoxProps } from '@southem/ui';
 *
 * export const CheckBoxShowcase = (props?: CheckBoxProps): React.ReactElement<CheckBoxProps> => {
 *   return (
 *     <Checkbox
 *       style={styles.checkbox}
 *       textStyle={styles.checkboxText}
 *       text='Place your text'
 *       checked={this.state.checked}
 *     />
 *   );
 * };
 * ```
 * */
class CheckBoxComponent extends PureComponent<CheckBoxProps> {
  static displayName = 'CheckBox';
  static defaultProps = {
    children: null,
    text: '',
    textStyle: undefined,
    disabled: false,
    checked: false,
    onChange: (): void => {},
  };

  private onFocus = (event: NativeSyntheticEvent<TargetedEvent>): void => {
    this.props.onFocus && this.props.onFocus(event);
  };

  private onBlur = (event: NativeSyntheticEvent<TargetedEvent>): void => {
    this.props.onBlur && this.props.onBlur(event);
  };

  private onPress = (): void => {
    if (this.props.onChange) {
      this.props.onChange(!this.props.checked, false);
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
      checked,
      children,
      disabled,
      onChange,
      text,
      textStyle,
      status,
      style,
      ...attributes
    } = this.props;

    return (
      <RNTouchableOpacity
        {...{
          style,
          disabled,
          ...attributes,
          activeOpacity: 1.0,
          onPress: this.onPress,
          onPressIn: this.onPressIn,
          onPressOut: this.onPressOut,
        }}>
        <View style={styles.highlightContainer}>
          <View style={styles.highlight}/>
          <View style={styles.selectContainer}>
            {renderNode(CheckMark, true, {
              checked,
              status,
            })}
          </View>
        </View>
        {
          // @ts-ignore
          renderTextElement(children || text, { style: StyleSheet.flatten(textStyle) })
        }
      </RNTouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  highlightContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  highlight: {
    position: 'absolute',
  },
});

export const CheckBox = withThemes('CheckBox', mapPropToStyles)(CheckBoxComponent);
