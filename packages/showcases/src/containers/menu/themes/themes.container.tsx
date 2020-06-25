import React from 'react';
import { Themes } from './themes.component';
import {
  ThemeContextType,
  ThemeContext,
  ThemeKey,
  themes,
} from '../../../services/theme.service';
import { Theme } from './type';

export class ThemesContainer extends React.Component {

  private EXCLUDE_THEMES: ThemeKey[] = [
    'dark',
  ];

  private data: Theme[] = [];

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
    return { name: theme, theme: themes[theme] };
  };

  private renderContent = (context: ThemeContextType): React.ReactElement<any> => {
    return (
      <Themes
        data={this.data}
        currentTheme={context.theme}
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
