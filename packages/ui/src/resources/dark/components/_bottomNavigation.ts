import palette from '../_palette';
import { normalize } from '@southem/tools';

export default {
  BottomNavigation: {
    flexDirection: 'row',
    height: normalize(50),
    minHeight: 56,
    paddingVertical: 4,
    backgroundColor: '#222B45',
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

    Icon: {
      fontSize: 20,
      marginTop: normalize(2),
    },

    Text: {
      fontSize: 14,
      fontWeight: '600',
      marginBottom: 4,
    },
  },
  'BottomNavigationTab[appearance=default]': {
    Text: {
      color: '#8F9BB3',
    },
    Icon: {
      color: '#8F9BB3',
    },
  },
  'BottomNavigation[appearance=noIndicator]': {
    TabIndicator: {
      height: 0,
      backgroundColor: 'transparent',
      position: 'absolute',
    },
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
