/* tslint:disable */
import {
  pick,
  keys,
  merge,
} from 'lodash';
import pickBy from './pickBy';

export default function mergeComponentAndThemes(
  componentStyle, themeComponentStyle, themeStyle) {
  const componentThemedStyle = merge({}, componentStyle, themeComponentStyle);

  // Picking only required root theme style, used by component.
  // We do not want to merge whole theme to component style.
  // const intersectedRootThemeStyle = pick(themeStyle, keys(componentThemedStyle));
  const intersectedRootThemeStyle = pickBy(themeStyle, componentThemedStyle);

  // Merging only common style, not all theme style with component style
  return merge({}, intersectedRootThemeStyle, componentThemedStyle);
}
