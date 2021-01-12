import React from 'react';
import { AppTheme, ThemeContextType } from './type';

export const ThemeContext = React.createContext<ThemeContextType>({
  theme: AppTheme.Dark,
  // @ts-ignore
  setTheme: (theme: AppTheme) => {},
  isDarkMode: () => false,
});
