import {
  reduce,
  isPlainObject,
} from 'lodash';
import StyleNormalizer from './StyleNormalizer';

const themeNormalizer = new StyleNormalizer();

/**
 * Normalize theme properties shorthands.
 *
 * @param theme
 * @returns {*}
 */
export default function normalizeTheme(theme) {
  return reduce(theme, (normalizedStyle, val, prop) => {
    /* eslint-disable no-param-reassign */
    if (isPlainObject(val)) {
      normalizedStyle[prop] = normalizeTheme(val);
    } else if (themeNormalizer.canNormalize(prop)) {
      normalizedStyle = {
        ...normalizedStyle,
        ...themeNormalizer.normalize(prop, val),
      };
    } else {
      normalizedStyle[prop] = val;
    }
    /* eslint-enable no-param-reassign */

    return normalizedStyle;
  }, {});
}
