import React from 'react';
import * as Font from 'expo-font';
import { AppearanceProvider } from 'react-native-appearance';
import { enableScreens } from 'react-native-screens';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { darkTheme, lightTheme, StatusBar } from '@southem/ui';
import Theme, {
  ThemeProvider,
  TypeTheme,
} from '@southem/theme';
import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  Fontisto,
  Foundation,
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
  Octicons,
  SimpleLineIcons,
  Zocial,
} from '@expo/vector-icons';
import {
  FiraSans_Thin,
  FiraSans_Thin_Italic,
  FiraSans_Extra_Light,
  FiraSans_Extra_Light_Italic,
  FiraSans_Light,
  FiraSans_Light_Italic,
  FiraSans_Regular,
  FiraSans_Italic,
  FiraSans_Medium,
  FiraSans_Medium_Italic,
  FiraSans_Semi_Bold,
  FiraSans_Semi_Bold_Italic,
  FiraSans_Bold,
  FiraSans_Bold_Italic,
  FiraSans_Extra_Bold,
  FiraSans_Extra_Bold_Italic,
  FiraSans_Black,
  FiraSans_Black_Italic,
} from '@southem/fonts';
import { IconRegistry, SouthemIconsPack } from '@southem/icons';
import { AppStorage } from '../services/app-storage.service';
import { AppIconsPack } from './app-icons-pack';
import { appDarkTheme, appLightTheme, appThemes } from './app-theming';
import {
  SplashImage,
  LoadingAnimationProps,
} from '../components';
import { AppLoading, LoadFontsTask, Task } from './app-loading.component';
import { AppNavigator } from '../navigation/app.navigator';
import { ThemeType, Theming} from '../services/theme.service';

enableScreens();

Theme.registerTheme('dark', [darkTheme, appDarkTheme]);
Theme.registerTheme('light', [lightTheme, appLightTheme]);

const defaultConfig: { theme: TypeTheme } = {
  theme: 'dark',
};

const preloadFonts: Record<string, Font.FontSource> = {
  ...AntDesign.font,
  ...Entypo.font,
  ...EvilIcons.font,
  ...Feather.font,
  ...FontAwesome.font,
  ...FontAwesome5.font,
  ...Fontisto.font,
  ...Foundation.font,
  ...Ionicons.font,
  ...MaterialIcons.font,
  ...MaterialCommunityIcons.font,
  ...Octicons.font,
  ...SimpleLineIcons.font,
  ...Zocial.font,
};

const loadingTasks: Task[] = [
  // Should be used it when running Expo.
  // In Bare RN Project this is configured by react-native.config.js
  // @ts-ignore
  () => LoadFontsTask(preloadFonts),
  // @ts-ignore
  () => LoadFontsTask({
    'Fira Sans': FiraSans_Regular,
    'Fira Sans Italic': FiraSans_Italic,
    'Fira Sans Thin': FiraSans_Thin,
    'Fira Sans Thin Italic': FiraSans_Thin_Italic,
    'Fira Sans Extra Light': FiraSans_Extra_Light,
    'Fira Sans Extra Light Italic': FiraSans_Extra_Light_Italic,
    'Fira Sans Light': FiraSans_Light,
    'Fira Sans Light Italic': FiraSans_Light_Italic,
    'Fira Sans Medium': FiraSans_Medium,
    'Fira Sans Medium Italic': FiraSans_Medium_Italic,
    'Fira Sans Semi Bold': FiraSans_Semi_Bold,
    'Fira Sans Semi Bold Italic': FiraSans_Semi_Bold_Italic,
    'Fira Sans Bold': FiraSans_Bold,
    'Fira Sans Bold Italic': FiraSans_Bold_Italic,
    'Fira Sans Extra Bold': FiraSans_Extra_Bold,
    'Fira Sans Extra Bold Italic': FiraSans_Extra_Bold_Italic,
    'Fira Sans Black': FiraSans_Black,
    'Fira Sans Black Italic': FiraSans_Black_Italic,
    'opensans-regular': require('../assets/fonts/opensans-regular.ttf'),
    'roboto-regular': require('../assets/fonts/roboto-regular.ttf'),
  }),
  // @ts-ignore
  () => AppStorage.getTheme(defaultConfig.theme).then(result => ['theme', result]),
];

// @ts-ignore
const App: React.FC<{ theme: ThemeType }> = ({ theme }): React.ReactElement => {
  const [themeContext, currentTheme] = Theming.useTheming(appThemes, theme);

  return (
    <React.Fragment>
      <IconRegistry icons={[...SouthemIconsPack, AppIconsPack]}/>
      <AppearanceProvider>
        <ThemeProvider theme={currentTheme}>
          <Theming.ThemeContext.Provider value={themeContext}>
            <SafeAreaProvider>
              <StatusBar />
              <AppNavigator />
            </SafeAreaProvider>
          </Theming.ThemeContext.Provider>
        </ThemeProvider>
      </AppearanceProvider>
    </React.Fragment>
  );
};

const Splash = ({ loading }: LoadingAnimationProps): React.ReactElement => (
  // @ts-ignore
  <SplashImage
    loading={loading}
    source={require('../assets/images/image-splash.png')}
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
