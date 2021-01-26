import { AsyncStorage, YellowBox } from 'react-native';
import { TypeTheme } from '../../../theme';

const THEME_KEY: string = 'theme';

export class AppStorage {

  static getTheme = (fallback?: TypeTheme): Promise<TypeTheme> => {
    // @ts-ignore
    return AsyncStorage.getItem(THEME_KEY).then((theme: Theme) => {
      return theme || fallback;
    });
  };

  static setTheme = (theme: TypeTheme): Promise<void> => {
    return AsyncStorage.setItem(THEME_KEY, theme);
  };
}

/**
 * In a Bare React Native project you should use
 * https://github.com/react-native-community/async-storage
 *
 * However, Expo runs AsyncStorage exported from react-native.
 * Just to save application bundle size, we still using this one.
 */
YellowBox.ignoreWarnings(['AsyncStorage has been extracted']);
