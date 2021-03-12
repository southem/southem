import { black } from '../../colors';
import palette from '../_palette';
// @ts-ignore
import { getPlatformElevation } from '../../getPlatformElevation';

export default {
  Card: {
    flex: 1,
    overflow: 'hidden',
    backgroundColor: '#222B45',

    Header: {
      backgroundColor: black,
      paddingHorizontal: 24,
      paddingVertical: 16,
    },
    Body: {
      flex: 1,
      paddingHorizontal: 24,
      paddingVertical: 16,
    },
    Footer: {
      flex: 1,
      paddingHorizontal: 24,
      paddingVertical: 16,
    },
    View: {
      height: 0,
    },
  },
  'Card[appearance=outline]': {
    borderWidth: 1,
    borderColor: '#101426',
    // borderColor: palette.borderColor,
    ...getPlatformElevation(4, 0.18, 4, {
      width: 0, height: 1,
    }),
  },
  'Card[appearance=filled]': {
    borderWidth: 0,
    borderColor: 'transparent',
  },
  'Card[status=basic]': {
    View: {
      height: 4,
      backgroundColor: palette.backgroundColor,
    },
  },
  'Card[status=primary]': {
    View: {
      height: 4,
      backgroundColor: palette.primary,
    },
  },
  'Card[status=success]': {
    View: {
      height: 4,
      backgroundColor: palette.success,
    },
  },
  'Card[status=info]': {
    View: {
      height: 4,
      backgroundColor: palette.info,
    },
  },
  'Card[status=warning]': {
    View: {
      height: 4,
      backgroundColor: palette.warning,
    },
  },
  'Card[status=danger]': {
    View: {
      height: 4,
      backgroundColor: palette.danger,
    },
  },
  'Card[rounded=true]': {
    borderRadius: 8,
  },
  'Card[rounded=false]': {
    borderRadius: 0,
  },
};
