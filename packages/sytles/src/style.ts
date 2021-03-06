/* tslint:disable */
import type { StylesTheme } from './types';

import palette from './palette';
import styles from './styles';
import size from './size';
import { elevations } from './elevations';
import { fills } from './fills';
import { spacing } from './spacing';
import { fonts } from './fonts';

const defaultStyle: StylesTheme = {
  colors: styles,
  fills,
  fonts,
  layout: undefined,
  size,
  spacing,
  elevations,
}

export default defaultStyle;
