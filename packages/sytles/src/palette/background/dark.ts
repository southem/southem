import Color from 'color';
import {
  red,
  cornflowerblue,
  black,
  limegreen,
  darkturquoise,
  orange,
  darkviolet,
} from '../../colors';
import type { BackgroundColors } from "../../types";

export const darkBackground: BackgroundColors = {
  default: Color(black).alpha(0.38).rgb().toString(),
  primary: Color(cornflowerblue).alpha(0.18).rgb().toString(),
  secondary: Color(darkviolet).rgb().toString(),
  info: Color(darkturquoise).rgb().toString(),
  success: Color(limegreen).rgb().toString(),
  warning: Color(orange).rgb().toString(),
  danger: Color(red).rgb().toString(),
};
