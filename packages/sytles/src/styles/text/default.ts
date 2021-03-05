import type { TextColors } from '../../types';
import palette from '../../palette';

export const text: TextColors = {
  link: palette.teal.darkest,
  default: palette.default.darkest,
  muted: palette.default.dark,
  white: 'white',
  selected: 'white',

  primary: palette.teal.darkest,
  secondary: palette.orange.darkest,

  danger: palette.red.darkest,
  info: palette.blue.darkest,
  success: palette.green.darkest,
  warning: palette.orange.darkest,
};
