import Color from 'color';
import type { BackgroundColors } from "../../types";
import {
  red,
  dodgerblue,
  black,
  limegreen,
  darkturquoise,
  orange,
  darkviolet,
} from '../../colors';

export const background: BackgroundColors = {
  default: Color(black).alpha(.87).rgb().toString(),
  primary: Color(dodgerblue).rgb().toString(),
  secondary: Color(darkviolet).rgb().toString(),
  info: Color(darkturquoise).rgb().toString(),
  success: Color(limegreen).rgb().toString(),
  warning: Color(orange).rgb().toString(),
  danger: Color(red).rgb().toString(),
};
