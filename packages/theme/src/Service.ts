import React from 'react';
import {AppTheme, ThemeContextType, TypeTheme} from './type';

export const ThemeContext = React.createContext<ThemeContextType>({
  theme: AppTheme.Dark,
  // @ts-ignore
  setTheme: (theme: TypeTheme) => {},
  isDarkMode: () => false,
});
