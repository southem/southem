import AsyncStorage from '@react-native-async-storage/async-storage';
import { TypeTheme } from '@southem/theme';

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
