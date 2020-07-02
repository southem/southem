/* tslint:disable */
import deepMerge from './tools/deepMerge';
import mergeComponentAndThemes from './tools/mergeComponentAndThemes';
import { resolveIncludes } from './tools/resolveIncludes';
import normalizeTheme from './normalizer/normalizeTheme';
import defaultTheme from './resources/default';

interface Themes {
  default: object;
  light: object;
  dark: object;
}

// @ts-ignore
const themes: Themes = {};

// Privates, ideally those should be symbols
const THEME_STYLES = '@southem.theme';

const resolveStyle = (style, baseStyle) => normalizeTheme(resolveIncludes(style, baseStyle));

/**
 * Theme
 *
 * @example
 * const defaultTheme = {};
 * const defaultThemePro = {};
 *
 * Theme.registerTheme('default', [
 *   defaultTheme,
 *   defaultThemePro,
 * ]);
 */
class Theme {

  constructor(themeStyle) {
    // @ts-ignore
    // this[THEME_STYLES] = resolveStyle(themeStyle);
  }

  /**
   * registerTheme
   * @param {String} themeName
   * @param {Array|Object} styleSheets
   */
  static registerTheme(themeName, styleSheets: Array<Object>|Object): void {
    let mergedStyleSheets = styleSheets;

    if (Array.isArray(styleSheets)) {
      mergedStyleSheets = deepMerge({}, ...styleSheets);
    }

    // themes[themeName] = new Theme(themeName, mergedStyleSheets);
    // @ts-ignore
    themes[themeName] = resolveStyle(mergedStyleSheets);
  }

  /**
   * registerDefaultTheme
   * @param {Object} styleSheets
   */
  static registerDefaultTheme(styleSheets): void {
    Theme.registerTheme('default', styleSheets);
  }

  /**
   * getTheme
   * @param {String} themeName
   * @return {Object}
   */
  static getTheme(themeName): Object {
    // @ts-ignore
    if (themeName === 'default' && !themes.default) {
      Theme.registerDefaultTheme(defaultTheme);
    }

    return themes[themeName];
  }

  /**
   * getDefaultTheme
   * @return {Object}
   */
  static getDefaultTheme(): Object {
    return Theme.getTheme('default');
  }

  /**
   * isDefine
   * @param {String} themeName
   * @return {Boolean}
   */
  static isDefine(themeName): Boolean {
    return !!themes[themeName];
  }
}

export {
  Theme as default,
  themes,
};
