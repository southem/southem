import React from 'react';
import { themes } from '@southem/theme';
import { Themes } from './themes.component';
import {
  ThemeContextType,
  ThemeContext,
  ThemeKey,
} from '../../../services/theme.service';
import { Theme } from './type';

export class ThemesContainer extends React.Component {

  private EXCLUDE_THEMES: ThemeKey[] = [
    'Dark',
  ];

  private data: Theme[] = [];

  // @ts-ignore
  constructor(props) {
    super(props);
    this.data = Object.keys(themes)
      // @ts-ignore
      .filter(this.shouldIncludeTheme)
      // @ts-ignore
      .map(this.toThemeObject);
  }

  private shouldIncludeTheme = (themeKey: ThemeKey): boolean => {
    return !this.EXCLUDE_THEMES.includes(themeKey);
  };

  private toThemeObject = (theme: ThemeKey): Theme => {
    return {
      name: theme,
      // @ts-ignore
      theme: themes[theme],
    };
  };

  private renderContent = (context: ThemeContextType): React.ReactElement<any> => {
    return (
      <Themes
        data={this.data}
        currentTheme={context.theme}
        // @ts-ignore
        onToggleTheme={context.setTheme}
      />
    );
  };

  public render(): React.ReactNode {
    return (
      <ThemeContext.Consumer>
        {this.renderContent}
      </ThemeContext.Consumer>
    );
  }
}
