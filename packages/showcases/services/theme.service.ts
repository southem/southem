import React from 'react';

export enum AppTheme {
  light = 'light',
  dark = 'dark',
}

export interface ThemeContextType {
  theme: AppTheme;
  setTheme: (theme: AppTheme) => void;
  isDarkMode: () => boolean;
}

export const ThemeContext = React.createContext<ThemeContextType>({
  theme: AppTheme.light,
  setTheme: (theme: AppTheme) => {},
  isDarkMode: () => false,
});
