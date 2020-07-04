import { white, black } from '../../colors';
import palette from '../_palette';
// @ts-ignore
import { getPlatformElevation } from '../../getPlatformElevation';

export default {
  Card: {
    flex: 1,
    overflow: 'hidden',

    Header: {
      backgroundColor: 'black',
    },
    Body: {
      flex: 1,
      padding: 4,
    },
    Footer: {
      flex: 1,
    },
  },
  'Card[appearance=outline]': {
    borderWidth: 2,
    borderColor: palette.borderColor,
    ...getPlatformElevation(4, 0.18, 4, {
      width: 0, height: 1,
    }),
  },
  'Card[rounded=true]': {
    borderRadius: 8,
  },
  'Card[rounded=false]': {
    borderRadius: 0,
  },
};
