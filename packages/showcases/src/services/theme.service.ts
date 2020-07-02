import React from 'react';
import { ThemeType } from '@southem/theme';

export type Theme = 'default' | 'light' | 'dark';

export enum AppTheme {
  Default = 'default',
  Light = 'light',
  Dark = 'dark',
}

interface ThemeRegistry {
  Default: ThemeType;
  Light: ThemeType;
  Dark: ThemeType;
}

export type ThemeKey = keyof ThemeRegistry;

export interface ThemeContextType {
  theme: AppTheme;
  setTheme: (theme: AppTheme) => void;
  isDarkMode: () => boolean;
}

export const ThemeContext = React.createContext<ThemeContextType>({
  theme: AppTheme.Dark,
  // @ts-ignore
  setTheme: (theme: AppTheme) => {},
  isDarkMode: () => false,
});
