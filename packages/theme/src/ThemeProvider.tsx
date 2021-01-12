import React from 'react';
import {AppTheme, TypeTheme, ThemeContextType } from './type';
import { ThemeContext } from './Service';
import { LayoutProvider } from './LayoutProvider';

export interface ThemeProviderProps {
  children?: React.ReactNode;
  theme?: TypeTheme;
}

export const ThemeProvider = (props: ThemeProviderProps) => {
  const { children } = props;

  const [theme, setTheme] = React.useState<TypeTheme>(props.theme);
  const isDarkMode = (): boolean => {
    return theme === AppTheme.Dark;
  };

  // @ts-ignore
  const applicationProviderConfig: ThemeProviderProps = {
    // @ts-ignore
    theme,
  };

  const themeContextProviderConfig: ThemeContextType = {
    theme,
    setTheme: setTheme,
    isDarkMode: isDarkMode,
  };

  return (
    <ThemeContext.Provider value={themeContextProviderConfig}>
      <LayoutProvider {...applicationProviderConfig}>
        {children}
      </LayoutProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return React.useContext(ThemeContext);
};

/**
 * <ToastProvider>{children}</ToastProvider>
 * */
