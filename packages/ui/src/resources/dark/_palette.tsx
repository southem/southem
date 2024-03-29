/* eslint-disable */
import Color from 'color';
import {
  red,
  cornflowerblue,
  black,
  white,
  limegreen,
  darkturquoise,
  orange,
  darkviolet,
} from '../colors';

export default {
  default: Color(black).toString(),
  primary: Color(cornflowerblue).toString(),
  secondary: Color(darkviolet).toString(),
  info: Color(darkturquoise).toString(),
  success: Color(limegreen).toString(),
  warning: Color(orange).toString(),
  danger: Color(red).toString(),
  textHint: Color(black).alpha(.38).toString(),
  textDisabled: Color(black).alpha(.38).toString(),
  backgroundColor: Color(black).alpha(.12).toString(),
  borderColor: Color(black).alpha(.12).toString(),
  disabledColor: Color(black).alpha(.38).toString(),
  disabled: Color(white).alpha(0.38).rgb().string(),
  disabledTextColor: Color(black).alpha(.26).rgb().toString(),
  activeIcon: Color(black).alpha(.54).toString(),
  inactiveIcon: Color(black).alpha(.38).toString(),
};
