// @ts-ignore
import { transparent } from '../../colors';
import { typography } from '../../typography';
import { fontSizeTitle } from '../../spacing';
import palette from '../_palette';

export default {
  Title: {
    ...typography.semiBold,
    fontSize: fontSizeTitle,
    backgroundColor: transparent,
    color: palette.default,
    marginBottom: 4,
  },
};
