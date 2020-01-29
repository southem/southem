// @ts-ignore
import { transparent } from '../../colors';
import { typography } from '../../typography';
import palette from '../_palette';

export default {
  Title: {
    ...typography.medium,
    ...typography.h4,
    backgroundColor: transparent,
    color: palette.default,
    marginBottom: 4,
  },
};
