import React from 'react';
import { Appearance, AppearancePreferences, ColorSchemeName } from 'react-native-appearance';
import { AppStorage } from './app-storage.service';

export type Theme = 'light' | 'dark';


export interface ThemeContextValue {
  /**
   * Should return the name of current theme
   */
  currentTheme: Theme;
  /**
   * Should switch theme globally
   */
  setCurrentTheme: (theme: Theme) => void;
  /**
   * Should return true if current theme is dark or dark mode enabled
   */
  isDarkMode: () => boolean;
  /**
   * Should create a theme based on current
   */
  createTheme: (upstreamTheme: Theme) => any;
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
  static useTheming = (themes: Record<Theme, any>, theme: Theme): [ThemeContextValue, any] => {

    const [currentTheme, setCurrentTheme] = React.useState<Theme>(theme);

    React.useEffect(() => {
      const subscription = Appearance.addChangeListener((preferences: AppearancePreferences): void => {
        const appearanceTheme: Theme = Theming.createAppearanceTheme(
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

    const createTheme = (upstreamTheme: Theme): any => {
      return { ...themes[currentTheme], ...themes[upstreamTheme][currentTheme] };
    };

    const themeContext: ThemeContextValue = {
      currentTheme,
      setCurrentTheme: (nextTheme) => {
        // @ts-ignore
        AppStorage.setTheme(nextTheme);
        setCurrentTheme(nextTheme);
      },
      isDarkMode,
      createTheme,
    };

    return [themeContext, themes[currentTheme]];
  };

  static useTheme = (upstreamTheme: Theme): any => {
    const themeContext: ThemeContextValue = React.useContext(Theming.ThemeContext);
    return themeContext.createTheme(upstreamTheme);
  };

  private static createAppearanceTheme = (appearance: ColorSchemeName,
                                          preferredTheme: Theme): Theme => {
    if (appearance === 'no-preference') {
      return preferredTheme;
    }
    return appearance;
  };
}



