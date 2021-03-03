import React from 'react';
import {enableScreens} from 'react-native-screens';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {darkTheme, lightTheme, StatusBar } from '@southem/ui';
import Theme, {
  ThemeProvider,
  TypeTheme,
} from '@southem/theme';
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
import {
  SplashImage,
  LoadingAnimationProps,
} from '../components';
import { AppLoading, LoadFontsTask, Task } from './app-loading.component';
import { AppNavigator } from '../navigation/app.navigator';

enableScreens();

Theme.registerTheme('dark', darkTheme);
Theme.registerTheme('light', lightTheme);

const defaultConfig: { theme: TypeTheme } = {
  theme: 'dark',
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
const App = (props): React.ReactElement => {
  return (
    <React.Fragment>
      <IconRegistry icons={[...SouthemIconsPack, AppIconsPack]}/>
      <ThemeProvider theme={'dark'}>
        <SafeAreaProvider>
          <StatusBar />
          <AppNavigator />
        </SafeAreaProvider>
      </ThemeProvider>
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
