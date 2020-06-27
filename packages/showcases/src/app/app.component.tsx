import React from 'react';
import {enableScreens} from 'react-native-screens';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {darkTheme} from '@southem/ui';
import Theme, {ThemeProvider, ThemeProviderProps} from '@southem/theme';
import {
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
import {
  getCurrentStateName,
  RouteState,
} from '../core/navigation';
import { trackScreenTransition } from '../utils/analytics';
import { AppStorage } from '../services/app-storage.service';
import {
  Theme as TypeTheme,
  AppTheme,
  ThemeContext,
  ThemeContextType,
} from '../services/theme.service';
import {
  StatusBar,
  SplashImage,
  LoadingAnimationProps,
} from '../components';
import { themes } from './themes';
import { AppLoading, LoadFontsTask, Task } from './app-loading.component';
import { RootNavigator } from '../core/navigation/routes';

enableScreens();

Theme.registerDefaultTheme(darkTheme);

const defaultConfig: { theme: TypeTheme } = {
  theme: 'light',
};

const loadingTasks: Task[] = [
  // Should be used it when running Expo.
  // In Bare RN Project this is configured by react-native.config.js
  // @ts-ignore
  () => LoadFontsTask({
    'Fira Sans': FiraSans_Regular,
    'Fira Sans Italic': FiraSans_Italic,
    'Fira Sans Thin': FiraSans_Thin,
    'Fira Sans Thin Italic': FiraSans_Thin_Italic,
    'Fira Sans Extra Light': FiraSans_ExtraLight,
    'Fira Sans ExtraLight Italic': FiraSans_ExtraLight_Italic,
    'Fira Sans Light': FiraSans_Light,
    'Fira Sans Light Italic': FiraSans_Light_Italic,
    'Fira Sans Medium': FiraSans_Medium,
    'Fira Sans Medium Italic': FiraSans_Medium_Italic,
    'Fira Sans Semi Bold': FiraSans_SemiBold,
    'Fira Sans Semi Bold Italic': FiraSans_SemiBold_Italic,
    // 'Fira Sans Bold': FiraSans_Bold,
    // 'Fira Sans Bold Italic': FiraSans_Bold_Italic,
    'Fira Sans Extra Bold': FiraSans_ExtraBold,
    'Fira Sans ExtraBold Italic': FiraSans_ExtraBold_Italic,
    'Fira Sans Black': FiraSans_Black,
    'Fira Sans Black Italic': FiraSans_Black_Italic,
  }),
  // @ts-ignore
  () => AppStorage.getTheme(defaultConfig.theme).then(result => ['theme', result]),
];

// @ts-ignore
const App = (props): React.ReactElement => {

  const [theme, setTheme] = React.useState<AppTheme>(AppTheme.Dark);
  const isDarkMode = (): boolean => {
    return theme === AppTheme.Dark;
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

  const onTransitionTrackError = (error: any): void => {
    console.warn('Analytics error: ', error.message);
  };

  const onNavigationStateChange = (prevState: RouteState, currentState: RouteState) => {
    const prevStateName: string = getCurrentStateName(prevState);
    const currentStateName: string = getCurrentStateName(currentState);

    if (prevStateName !== currentStateName) {
      trackScreenTransition(currentStateName)
        .catch(onTransitionTrackError);
    }
  };

  return (
    <React.Fragment>
      <ThemeProvider {...applicationProviderConfig}>
        <ThemeContext.Provider value={themeContextProviderConfig}>
          <SafeAreaProvider>
            <StatusBar/>
            <RootNavigator
              // @ts-ignore
              onNavigationStateChange={onNavigationStateChange}
            />
          </SafeAreaProvider>
        </ThemeContext.Provider>
      </ThemeProvider>
    </React.Fragment>
  );
};

const Splash = ({ loading }: LoadingAnimationProps): React.ReactElement => (
  // @ts-ignore
  <SplashImage
    loading={loading}
    source={require('../assets/images/splash.png')}
  />
);

export default (): React.ReactElement => (
  <AppLoading
    tasks={loadingTasks}
    initialConfig={defaultConfig}
    // @ts-ignore
    placeholder={Splash}>
    {props => <App {...props}/>}
  </AppLoading>
);
