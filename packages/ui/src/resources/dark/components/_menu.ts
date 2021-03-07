import { palette } from '@southem/styles';

export default {
  Menu: {},
  MenuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingVertical: 8,

    Icon: {
      color: 'white',
      fontSize: 20,
      size: 20,
      width: 20,
      height: 20,
      marginHorizontal: 8,
    },

    Text: {
      color: 'white',
      fontSize: 14,
      fontWeight: '600',
      marginHorizontal: 8,
      flex: 1,
      textAlign: 'left',
    },
  },
  'MenuItem[appearance=default]': {
    paddingLeft: 5,
    // backgroundColor: palette.purple.darkest,
    backgroundColor: '#222B45',
  },

  'MenuItem[appearance=grouped]': {
    paddingLeft: 12,
    backgroundColor: '#222B45',
  },

  'MenuItem[selected=true]': {
    backgroundColor: 'rgba(51, 102, 255, 0.08)',
    View: {
      width: 4,
      backgroundColor: '#3366FF',
    },
    Icon: {
      color: '#3366FF',
    },
    Text: {
      color: '#3366FF',
    },
  },
  'MenuItem[disabled=true]': {
    Icon: {
      color: 'rgba(143, 155, 179, 0.48)',
    },
    Text: {
      color: 'rgba(143, 155, 179, 0.48)',
    },
  },

  OverflowMenu: {
    width: 160,
    maxHeight: 256,
    borderRadius: 4,
  },
};
