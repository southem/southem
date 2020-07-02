import React, { PureComponent } from 'react';
import {
  GestureResponderEvent,
  NativeSyntheticEvent,
  LayoutAnimation,
  TargetedEvent,
  TouchableOpacityProps,
  TextProps,
} from 'react-native';
import { withThemes } from '@southem/theme';
import {
  Overwrite,
  RenderProp,
  renderTextElement,
  StatusType,
  StyledComponentProps,
} from '../../devsupport';
import { Touchable } from '../touchable';
import { Toggle } from './toggle';

type ToggleStyledProps = Overwrite<StyledComponentProps, {
  appearance?: 'default' | string;
}>;

// @ts-ignore
export interface SwitchProps extends TouchableOpacityProps, ToggleStyledProps {
  children?: RenderProp<TextProps> | React.ReactText;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  status?: StatusType;
}

export type SwitchElement = React.ReactElement<SwitchProps>;

const mapPropToStyles = [
  'activeOpacity',
];

/**
 * Switches toggle the state of a single setting on or off.
 *
 * @extends React.Component
 *
 * @property {boolean} checked - Whether component is checked.
 * Defaults to *false*.
 *
 * @property {(boolean) => void} onChange - Called when toggle
 * should switch it's value.
 *
 * @property {ReactText | (TextProps) => ReactElement} children - String, number or a function component
 * to render near the toggle.
 * If it is a function, expected to return a Text.
 *
 * @property {string} status - Status of the component.
 * Can be `basic`, `primary`, `success`, `info`, `warning`, `danger` or `control`.
 * Defaults to *basic*.
 * Use *control* status when needed to display within a contrast container.
 *
 * @property {TouchableOpacityProps} ...TouchableOpacityProps - Any props applied to TouchableOpacity component.
 *
 * @overview-example ToggleSimpleUsage
 *
 * @overview-example ToggleStates
 * Toggle can be checked or disabled.
 *
 * @overview-example ToggleStatus
 * Toggle may marked with `status` property, which is useful within forms validation.
 * An extra status is `control`, which is designed to be used on high-contrast backgrounds.
 *
 * @overview-example ToggleStyling
 * Toggle and it's inner views can be styled by passing them as function components.
 * ```
 * import { Switch, Text } from '@southem/ui';
 *
 * <Switch>
 *   {evaProps => <Text {...evaProps}>Place your Text</Text>}
 * </Switch>
 * ```
 *
 * @overview-example ToggleTheming
 * In most cases this is redundant, if [custom theme is configured](docs/guides/branding).
 */
// @ts-ignore
@withThemes('Switch', mapPropToStyles)
export class Switch extends PureComponent<SwitchProps> {
  public static displayName = 'Switch';
  public static defaultProps = {
    disabled: false,
    checked: false,
    // tslint:disable-next-line:no-console
    onChange: (): void => console.log('Please attach a method to this component'),
  };

  componentDidUpdate() {
    LayoutAnimation.spring();
  }

  private onFocus = (event: NativeSyntheticEvent<TargetedEvent>): void => {
    if (this.props.disabled) {
      return;
    }

    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  };

  private onBlur = (event: NativeSyntheticEvent<TargetedEvent>): void => {
    if (this.props.disabled) {
      return;
    }

    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  };

  private onPressIn = (event: GestureResponderEvent): void => {
    if (this.props.onPressIn) {
      this.props.onPressIn(event);
    }
  };

  private onPressOut = (event: GestureResponderEvent): void => {
    if (this.props.onPressOut) {
      this.props.onPressOut(event);
    }
  };

  private onPress = (): void => {
    if (this.props.onChange) {
      this.props.onChange(!this.props.checked);
    }
  };

  public render(): React.ReactElement<TouchableOpacityProps> {
    const {
      style,
      checked,
      disabled,
      children,
      onChange,
      ...touchableProps
    } = this.props;

    return (
      <Touchable
        style={style}
        disabled={disabled}
        {...touchableProps}
        onPress={this.onPress}
        onFocus={this.onFocus}
        onBlur={this.onBlur}>
        <Toggle {...{
          checked,
          disabled,
        }} />
        {renderTextElement(children)}
      </Touchable>
    );
  }
}
