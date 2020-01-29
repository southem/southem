import { typography } from '../../typography';
import palette from '../_palette';

export default {
  Text: {
    color: palette.default,
    ...typography.regular,
  },
  'Text[category=h1]': {
    ...typography.h1,
  },
  'Text[category=h2]': {
    ...typography.h2,
  },
  'Text[category=h3]': {
    ...typography.h3,
  },
  'Text[category=h4]': {
    ...typography.h4,
  },
  'Text[category=h5]': {
    ...typography.h5,
  },
  'Text[category=h6]': {
    ...typography.h6,
  },
  'Text[category=s1]': {
    ...typography.s1,
  },
  'Text[category=s2]': {
    ...typography.s2,
  },
  'Text[category=p1]': {
    ...typography.p1,
  },
  'Text[category=p2]': {
    ...typography.p2,
  },
  'Text[category=c1]': {
    ...typography.c1,
  },
  'Text[category=c2]': {
    ...typography.c2,
  },
  'Text[category=label]': {
    ...typography.regular,
  },
  'Text[status=primary]': {
    color: palette.primary,
  },
  'Text[status=success]': {
    color: palette.success,
  },
  'Text[status=warning]': {
    color: palette.warning,
  },
  'Text[status=danger]': {
    color: palette.danger,
  },
};
