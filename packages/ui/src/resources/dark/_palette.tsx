/* eslint-disable */
import Color from 'color';
import {
  red,
  dodgerblue,
  black,
  limegreen,
  darkturquoise,
  orange,
  darkviolet,
} from '../colors';

export default {
  default: Color(black).alpha(.5).toString(),
  primary: Color(dodgerblue).toString(),
  secondary: Color(darkviolet).toString(),
  info: Color(darkturquoise).toString(),
  success: Color(limegreen).toString(),
  warning: Color(orange).toString(),
  danger: Color(red).toString(),
  textHint: 'rgba(0, 0, 0, 0.38)',
  textDisabled: 'rgba(0, 0, 0, 0.38)',
  backgroundColor: Color(black).alpha(.12).toString(),
  borderColor: Color(black).alpha(.12).toString(),
  disabledColor: Color(black).alpha(.38).toString(),
  disabledTextColor: Color(black).alpha(.26).toString(),
  activeIcon: Color(black).alpha(.54).toString(),
  inactiveIcon: Color(black).alpha(.38).toString(),
};
