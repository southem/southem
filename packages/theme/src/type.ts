import { StyleSheet as RNStyleSheet } from 'react-native';

export enum Interaction {
  HOVER = 'hover',
  ACTIVE = 'active',
  FOCUSED = 'focused',
  INDETERMINATE = 'indeterminate',
  VISIBLE = 'visible',
}

export enum State {
  CHECKED = 'checked',
  SELECTED = 'selected',
  DISABLED = 'disabled',
}

type ThemeValue = string;

export type ThemeType = Record<string, ThemeValue>;
export type StyleType = Record<string, any>;
export type Styles<T> = RNStyleSheet.NamedStyles<T>;
