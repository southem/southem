import React from 'react';
// @ts-ignore
import {Appearance, useColorScheme } from 'react-native';
// @ts-ignore
import type { AppearancePreferences, ColorSchemeName } from 'react-native/Libraries/Utilities/Appearance';
// import { ColorSchemeName } from 'react-native-appearance';
import { AppStorage } from './app-storage.service';

export type ThemeType = 'light' | 'dark';


export interface ThemeContextValue {
  /**
   * Should return the name of current theme
   */
  currentTheme: ThemeType;
  /**
   * Should switch theme globally
   */
  setCurrentTheme: (theme: ThemeType) => void;
  /**
   * Should return true if current theme is dark or dark mode enabled
   */
  isDarkMode: () => boolean;
  /**
   * Should create a theme based on current
   */
  createTheme: (upstreamTheme: ThemeType) => any;
}

export class Theming {

  // @ts-ignore
  static ThemeContext = React.createContext<ThemeContextValue>(null);

  /**
   * @see ThemeContextValue
   *
   * Creates context value with standard configuration:
   *
   * - `currentTheme` is set depending on current appearance set on the device.
   * - `setCurrentTheme` will be called when device appearance is changed.
   * - `isDarkMode` returns true if current device appearance is `dark`.
   * - `createTheme` will take an `upstreamTheme` and merge it with `currentTheme`.
   *
   * @param {Record<Mapping, Record<Theme, any>>} themes - set of themes available in app.
   * @param {Theme} theme - name of theme that will be applied if there is no preferred appearance set.
   *
   * @returns {[ThemeContextValue, any]} - array of two values:
   * - value to be set in `ThemeContext.Provider`
   * - and theme to be set in `ApplicationProvider`.
   */
  static useTheming = (themes: Record<ThemeType, any>, theme: ThemeType): [ThemeContextValue, any] => {

    const [currentTheme, setCurrentTheme] = React.useState<ThemeType>(theme);

    React.useEffect(() => {
      const subscription = Appearance.addChangeListener((preferences: AppearancePreferences): void => {
        const appearanceTheme: ThemeType = Theming.createAppearanceTheme(
          preferences.colorScheme,
          theme,
        );
        setCurrentTheme(appearanceTheme);
      });

      return () => subscription.remove();
    }, []);

    const isDarkMode = (): boolean => {
      return currentTheme === 'dark';
    };

    const createTheme = (upstreamTheme: ThemeType): any => {
      return { ...themes[currentTheme], ...themes[upstreamTheme][currentTheme] };
    };

    const themeContext: ThemeContextValue = {
      currentTheme,
      setCurrentTheme: (nextTheme) => {
        // @ts-ignore
        AppStorage.setTheme(nextTheme).then(() => null);
        setCurrentTheme(nextTheme);
      },
      isDarkMode,
      createTheme,
    };

    return [themeContext, themes[currentTheme]];
  };

  static useTheme = (upstreamTheme: ThemeType): any => {
    const themeContext: ThemeContextValue = React.useContext(Theming.ThemeContext);
    return themeContext.createTheme(upstreamTheme);
  };

  // static colorScheme = useColorScheme();
  private static createAppearanceTheme = (
    // @ts-ignore
    appearance: useColorScheme,
    preferredTheme: ThemeType): ThemeType => {
    if (appearance === 'no-preference') {
      return preferredTheme;
    }
    return appearance;
  };
}



