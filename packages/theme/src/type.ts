/* tslint:disable */
import { StyleSheet, StyleProp, ViewStyle } from 'react-native';

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
export type StyleType = StyleProp<ViewStyle>;
export type Styles<T> = StyleSheet.NamedStyles<T>;
export type TypeTheme = 'default' | 'light' | 'dark';

export enum AppTheme {
  Default = 'default',
  Light = 'light',
  Dark = 'dark',
}

export interface ThemeContextType {
  theme: TypeTheme;
  setTheme: (theme: TypeTheme) => void;
  isDarkMode: () => boolean;
}
