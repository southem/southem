import { Theme } from '../../services/theme.service';
import { ThemeItem } from './type';

export class ThemesService {

  // @ts-ignore
  static createThemeListItems = (themes): ThemeItem[] => {
    return Object.keys(themes)
      // @ts-ignore
      .map((theme: Theme) => ThemesService.createThemeForMapping(
        themes,
        theme,
      ));
  };

  // @ts-ignore
  static createThemeForMapping = (themes, theme: Theme): ThemeItem => {
    // @ts-ignore
    return {
      name: theme,
      theme: themes[theme],
    };
  };

}
