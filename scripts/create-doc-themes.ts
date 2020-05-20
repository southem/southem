interface Theme {
  [key: string]: ThemeVariableValue;
}

type ThemeVariableValue = string | number;

export interface DocThemes {
  [themeName: string]: DocTheme;
}

export interface DocTheme {
  name: string;
  parent: string | null;
  data: DocThemeData;
}

export interface DocThemeData {
  [variableName: string]: DocThemeVariableMeta;
}

export interface DocThemeVariableMeta {
  name: string;
  value: string | number;
  parents: DocThemeVariable[];
  childs: DocThemeVariable[];
}

export interface DocThemeVariable {
  theme: string;
  prop: string;
}

type PackageName = 'themes' | 'material';
type ThemeName = 'light' | 'dark';
const THEME_REF_KEY: string = '$';

/**
 * @param {PackageName} themePackage - SouTheme themePackage name.
 * @param {ThemeName[]} themes - Eva theme names. Should have the same name as $themeName.json file (e.g light.json)
 * @returns themes object structured to be displayed in documentation
 */
export const createDocThemesForPackage = (themePackage: PackageName, ...themes: ThemeName[]): DocThemes => {
  return themes.reduce((acc: DocThemes, themeName: ThemeName): DocThemes => {
    return { ...acc, [`${themePackage} ${themeName}`]: createTheme(themePackage, themeName) };
  }, {});
};

const createTheme = (themePackage: PackageName, themeName: ThemeName): DocTheme  => {
  const theme: Theme = require(`@southem/themes/${themePackage}/${themeName}`);
  return { name: themeName, parent: null, data: createThemeData(theme, themeName) };
};

const createThemeData = (theme: Theme, themeName: ThemeName): DocThemeData => {
  return Object.keys(theme).reduce((acc: DocThemeData, themeVariableName: string): DocThemeData => {
    return { ...acc, [themeVariableName]: createVariableMeta(theme, themeName, themeVariableName) };
  }, {});
};

const createVariableMeta = (theme: Theme, themeName: string, themeVariableName: string): DocThemeVariableMeta => {
  const parentsKeys: string[] = findVariableParentsRecursive(theme, themeVariableName, []);
  const childrenKeys: string[] = findVariableChildren(theme, themeVariableName);

  return {
    name: themeVariableName,
    value: findVariableValueRecursive(theme, themeVariableName),
    parents: createThemeVariables(themeName, parentsKeys),
    childs: createThemeVariables(themeName, childrenKeys),
  };
};

const findVariableValueRecursive = (theme: Theme, themeVariableName: string): ThemeVariableValue => {
  if (isReferencingKey(themeVariableName)) {
    const themeKey: string = toThemeKey(themeVariableName);
    return findThemeValue(theme, themeKey);
  }

  return findThemeValue(theme, themeVariableName);
};

const findVariableParentsRecursive = (theme: Theme, themeVariableName: string, parents: string[] = []): string[] => {
  const variableValue: ThemeVariableValue = theme[themeVariableName];

  if (isReferencingKey(variableValue)) {
    const themeKey: string = toThemeKey(variableValue);
    return findVariableParentsRecursive(theme, themeKey, [...parents, themeKey]);
  }

  return parents;
};

const findVariableChildren = (theme: Theme, themeVariableName: string): string[] => {
  return Object.keys(theme).filter((comparableThemeKey: string): boolean => {
    const themeValue: ThemeVariableValue = theme[comparableThemeKey];
    return isReferencingKey(themeValue) && themeVariableName === toThemeKey(themeValue);
  });
};

const findThemeValue = (theme: Theme, name: string): ThemeVariableValue => {
  const value: ThemeVariableValue | undefined = theme[name];

  if (isReferencingKey(value)) {
    const themeKey: string = toThemeKey(value);
    return findThemeValue(theme, themeKey);
  }

  return value;
};

const isReferencingKey = (value: ThemeVariableValue): boolean  => {
  return `${value}`.startsWith(THEME_REF_KEY);
};

const toThemeKey = (value: ThemeVariableValue): string => {
  return `${value}`.substring(1);
};

const createThemeVariables = (theme: string, keys: string[]): DocThemeVariable[] => {
  return keys.map((key: string): DocThemeVariable => {
    return { theme, prop: key };
  });
};
