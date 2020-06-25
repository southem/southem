import React from 'react';
import { enableScreens } from 'react-native-screens';
import { AppLoading } from 'expo';
import { darkTheme } from '@southem/ui';
import Theme, { ThemeProvider, ThemeProviderProps } from '@southem/theme';
import {
  useFonts,
  FiraSans_Thin,
  FiraSans_Thin_Italic,
  FiraSans_ExtraLight,
  FiraSans_ExtraLight_Italic,
  FiraSans_Light,
  FiraSans_Light_Italic,
  FiraSans_Regular,
  FiraSans_Italic,
  FiraSans_Medium,
  FiraSans_Medium_Italic,
  FiraSans_SemiBold,
  FiraSans_SemiBold_Italic,
  // FiraSans_Bold,
  // FiraSans_Bold_Italic,
  FiraSans_ExtraBold,
  FiraSans_ExtraBold_Italic,
  FiraSans_Black,
  FiraSans_Black_Italic,
} from '@southem/fonts';
import { AppNavigator } from '@southem/showcases/navigation/app.navigator';
import { AppTheme, ThemeContext, ThemeContextType } from '@southem/showcases/services/theme.service';
import { themes } from './themes';

enableScreens();

Theme.registerDefaultTheme(darkTheme);

export default (): React.ReactElement => {

  const [theme, setTheme] = React.useState<AppTheme>(AppTheme.light);

  const isDarkMode = (): boolean => {
    return theme === AppTheme.dark;
  };

  // @ts-ignore
  const applicationProviderConfig: ThemeProviderProps = {
    theme: themes[theme],
  };

  const themeContextProviderConfig: ThemeContextType = {
    theme: theme,
    setTheme: setTheme,
    isDarkMode: isDarkMode,
  };

  const [fontsLoaded] = useFonts({
    'Fira Sans': FiraSans_Regular,
    'Fira Sans Italic': FiraSans_Italic,
    'Fira Sans Thin': FiraSans_Thin,
    'Fira Sans Thin Italic': FiraSans_Thin_Italic,
    'Fira Sans Extra Light': FiraSans_ExtraLight,
    'Fira Sans ExtraLight Italic': FiraSans_ExtraLight_Italic,
    'Fira Sans Light': FiraSans_Light,
    'Fira Sans Light Italic': FiraSans_Light_Italic,
    'Fira Sans Medium' : FiraSans_Medium,
    'Fira Sans Medium Italic': FiraSans_Medium_Italic,
    'Fira Sans Semi Bold': FiraSans_SemiBold,
    'Fira Sans Semi Bold Italic': FiraSans_SemiBold_Italic,
    // 'Fira Sans Bold': FiraSans_Bold,
    // 'Fira Sans Bold Italic': FiraSans_Bold_Italic,
    'Fira Sans Extra Bold': FiraSans_ExtraBold,
    'Fira Sans ExtraBold Italic': FiraSans_ExtraBold_Italic,
    'Fira Sans Black': FiraSans_Black,
    'Fira Sans Black Italic': FiraSans_Black_Italic,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <React.Fragment>
        <ThemeProvider {...applicationProviderConfig}>
          <ThemeContext.Provider value={themeContextProviderConfig}>
            <AppNavigator/>
          </ThemeContext.Provider>
        </ThemeProvider>
      </React.Fragment>
    );
  }
};
