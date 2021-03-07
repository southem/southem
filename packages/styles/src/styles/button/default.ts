import type { ButtonColorsWithText } from '../../types';
import palette from '../../palette';

export const button: ButtonColorsWithText = {
  disabled: palette.default.light,
  disabledText: palette.default.darkest,

  default: palette.default.lightest,
  defaultText: palette.default.darkest,

  primary: palette.teal.base,
  primaryText: 'white',

  secondary: palette.orange.base,
  secondaryText: 'white',

  danger: palette.red.base,
  dangerText: 'white',

  info: palette.blue.darkest,
  success:  palette.green.darkest,
  warning: palette.orange.darkest,
};
