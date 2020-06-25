import React from 'react';
import { ThemeType } from '@southem/theme';

export type Theme = 'default' | 'light' | 'dark';

export enum AppTheme {
  default = 'default',
  light = 'light',
  dark = 'dark',
}

interface ThemeRegistry {
  default: ThemeType;
  light: ThemeType;
  dark: ThemeType;
}

export type ThemeKey = keyof ThemeRegistry;

export interface ThemeContextType {
  theme: AppTheme;
  setTheme: (theme: AppTheme) => void;
  isDarkMode: () => boolean;
}

export const ThemeContext = React.createContext<ThemeContextType>({
  theme: AppTheme.light,
  // @ts-ignore
  setTheme: (theme: AppTheme) => {},
  isDarkMode: () => false,
});

export class ThemeService {

  public static select = <T>(config: { [key in ThemeKey | 'default']?: T },
                             currentTheme: ThemeKey): T | null => {

    if (config[currentTheme]) {
      // @ts-ignore
      return config[currentTheme];
    } else if (config.default) {
      return config.default;
    } else {
      return null;
    }
  };

}
