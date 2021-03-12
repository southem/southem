import React from 'react';
import deepmerge from 'deepmerge';
import type { StylesTheme } from '../types';

export interface StylingType {
  useStyles(overrides?: StylesTheme): StylesTheme;
}

export default function createStyling<Object>(
  defaultStyle: StylesTheme,
): StylingType {
  const StyleContext: React.Context<StylesTheme> = React.createContext<StylesTheme>(defaultStyle);

  const useStyles = (overrides?: StylesTheme): StylesTheme => {
    const styles = React.useContext(StyleContext);
    return React.useMemo(
      () => deepmerge(styles, overrides || {}),
      [styles, overrides],
    );
  };

  return {
    useStyles,
  };
}
