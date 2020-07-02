import palette from '../_palette';
import { normalize } from '../../../tools';

export default {
  BottomNavigation: {
    flexDirection: 'row',
    height: normalize(50),
  },
  'BottomNavigation[appearance=default]': {
    TabIndicator: {
      height: 2,
      backgroundColor: palette.primary,
      position: 'absolute',
    },
  },
  BottomNavigationTab: {
    flex: 1,
  },
  'BottomNavigationTab[selected=true]': {
    Icon: {
      color: palette.primary,
    },
    Text: {
      color: palette.primary,
    },
  },
};
