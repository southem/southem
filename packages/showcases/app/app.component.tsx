import React from 'react';
import {
  ThemeProvider,
  ThemeProviderProps,
} from '@southem/theme';
import { themes } from './themes';
import { AppNavigator } from '@southem/showcases/navigation/app.navigator';
import {
  AppTheme,
  ThemeContext,
  ThemeContextType,
} from '@southem/showcases/services/theme.service';

export default (): React.ReactElement => {

  const [theme, setTheme] = React.useState<AppTheme>(AppTheme.light);

  const isDarkMode = (): boolean => {
    return theme === AppTheme.dark;
  };

  const applicationProviderConfig: ThemeProviderProps = {
    theme: themes[theme],
    // @ts-ignore
    customMapping: customMapping,
  };

  const themeContextProviderConfig: ThemeContextType = {
    theme: theme,
    setTheme: setTheme,
    isDarkMode: isDarkMode,
  };

  return (
    <React.Fragment>
      <ThemeProvider {...applicationProviderConfig}>
        <ThemeContext.Provider value={themeContextProviderConfig}>
          <AppNavigator/>
        </ThemeContext.Provider>
      </ThemeProvider>
    </React.Fragment>
  );
};
