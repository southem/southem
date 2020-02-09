// tslint:disable
import React from 'react';
import {
  View,
  ViewProps,
  ViewStyle,
  StyleProp,
  StyleSheet,
} from 'react-native';
import { withThemes } from '@southem/theme';
import { connectAnimation } from '@southem/animation';
import DividerLabel from './DividerLabel';
import DividerLine from './DividerLine';

type OrientationTrait =
  | 'vertical'
  | 'horizontal';

export interface DividerProps extends ViewProps {
  orientation?: OrientationTrait;
  children?: any;
  lineStyle?: StyleProp<ViewStyle>;
  label?: string;
  labelStyle?: StyleProp<ViewStyle>;
}

export type DividerElement = React.ReactElement<DividerProps>;

/**
 * Styled `Divider` component. Behaves like React Native `View`.
 * The key feature of using `Divider` instead of `View` is that
 * it automatically picks color fitting to current theme.
 *
 * @property {ViewProps} ...ViewProps - Any props applied to View component.
 */
class DividerComponent extends React.Component<DividerProps> {

  static displayName: string = 'Divider';
  static defaultProps = {
    children: null,
    orientation: 'horizontal',
    lineStyle: null,
    label: null,
    labelStyle: null,
  };


  public render(): DividerElement {
    let {
      children,
      lineStyle,
      label,
      labelStyle,
      ...attributes
    } = this.props;

    if (typeof children === 'string') {
      label = children;
      children = null;
    }

    if (!children && label) {
      if (labelStyle && typeof labelStyle === 'number') {
        labelStyle = StyleSheet.flatten(labelStyle);
      }
      children = (
        <DividerLabel style={labelStyle}>
          {label}
        </DividerLabel>
      );
    }

    if (lineStyle && typeof lineStyle === 'number') {
      lineStyle = StyleSheet.flatten(lineStyle);
    }

    return (
      <View {...attributes}>
        <DividerLine style={lineStyle}/>
        {children}
        {children && <DividerLine style={lineStyle}/>}
      </View>
    );
  }
}

const AnimatedDivider = connectAnimation(DividerComponent);
export const Divider = withThemes('Divider')(AnimatedDivider);
