import { normalize } from '@southem/tools';
import { black, transparent, white } from '../../colors';
import { fontSizeButton } from '../../spacing';
import palette from '../_palette';

const sizeButton = normalize(40);

export default {
  Button: {
    activeOpacity: 0.9,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: palette.default,
    backgroundColor: palette.default,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    ActivityIndicator: {
      marginRight: 3,
      color: white,
    },
    Icon: {
      color: white,
      marginHorizontal: 4,
      alignSelf: 'center',
    },
    Text: {
      alignItems: 'stretch',
      fontSize: fontSizeButton,
      fontWeight: '500',
      color: white,
    },
  },
  'Button[appearance=filled]': {
    borderColor: palette.default,
    backgroundColor: palette.default,
    ActivityIndicator: {
      marginRight: 3,
      color: white,
    },
    Icon: {
      color: white,
    },
    Text: {
      color: white,
    },
  },
  'Button[appearance=outline]': {
    borderWidth: 2,
    backgroundColor: transparent,
    ActivityIndicator: {
      color: palette.default,
    },
    Icon: {
      color: palette.default,
    },
    Text: {
      color: palette.default,
    },
  },
  'Button[appearance=ghost]': {
    borderColor: transparent,
    backgroundColor: transparent,
    ActivityIndicator: {
      color: palette.default,
    },
    Icon: {
      color: palette.default,
    },
    Text: {
      color: palette.default,
    },
  },
  'Button[status=primary]': {
    borderColor: palette.primary,
    backgroundColor: palette.primary,
    ActivityIndicator: {
      color: white,
    },
    Icon: {
      color: white,
    },
  },
  'Button[status=success]': {
    borderColor: palette.success,
    backgroundColor: palette.success,
    ActivityIndicator: {
      color: white,
    },
    Icon: {
      color: white,
    },
  },
  'Button[status=info]': {
    borderColor: palette.info,
    backgroundColor: palette.info,
    ActivityIndicator: {
      color: white,
    },
    Icon: {
      color: white,
    },
  },
  'Button[status=warning]': {
    borderColor: palette.warning,
    backgroundColor: palette.warning,
    ActivityIndicator: {
      color: white,
    },
    Icon: {
      color: white,
    },
  },
  'Button[status=danger]': {
    borderColor: palette.danger,
    backgroundColor: palette.danger,
    ActivityIndicator: {
      color: white,
    },
    Icon: {
      color: white,
    },
  },
  'Button[status=basic]': {
    borderColor: white,
    backgroundColor: white,
    ActivityIndicator: {
      color: black,
    },
    Icon: {
      color: black,
    },
    Text: {
      color: palette.default,
    },
  },
  'Button[disabled=true]': {
    opacity: 0.4,
  },
  'Button[loading=true]': {
    opacity: 0.4,
  },
  'Button[size=mini]': {
    minWidth: sizeButton - 16,
    minHeight: sizeButton - 16,
    paddingHorizontal: 6,
    paddingVertical: 6,
    Text: {
      fontSize: 10,
      fontWeight: 'bold',
      marginHorizontal: 6,
    },
    Icon: {
      size: 14,
      fontSize: 14,
      width: 14,
      height: 14,
      minWidth: 14,
      minHeight: 14,
      marginHorizontal: 6,
    },
  },
  'Button[size=small]': {
    minWidth: sizeButton - 8,
    minHeight: sizeButton - 8,
    paddingHorizontal: 8,
    paddingVertical: 8,
    Text: {
      fontSize: 12,
      fontWeight: 'bold',
      marginHorizontal: 8,
    },
    Icon: {
      size: 16,
      fontSize: 16,
      minWidth: 16,
      minHeight: 16,
      width: 16,
      height: 16,
      marginHorizontal: 8,
    },
  },
  'Button[size=medium]': {
    minWidth: sizeButton,
    minHeight: sizeButton,
    paddingHorizontal: 10,
    paddingVertical: 12,
    Text: {
      fontSize: 14,
      fontWeight: 'bold',
      marginHorizontal: 10,
    },
    Icon: {
      size: 20,
      fontSize: 20,
      minWidth: 20,
      minHeight: 20,
      width: 20,
      height: 20,
      marginHorizontal: 10,
    },
  },
  'Button[size=large]': {
    minWidth: sizeButton + 8,
    minHeight: sizeButton + 8,
    paddingHorizontal: 10,
    paddingVertical: 14,
    Text: {
      fontSize: 16,
      fontWeight: 'bold',
      marginHorizontal: 10,
    },
    Icon: {
      size: 24,
      fontSize: 24,
      minWidth: 24,
      minHeight: 24,
      width: 24,
      height: 24,
      marginHorizontal: 10,
    },
  },
  'Button[size=big]': {
    minWidth: sizeButton + 16,
    minHeight: sizeButton + 16,
    paddingHorizontal: 12,
    paddingVertical: 16,
    Text: {
      fontSize: 18,
      fontWeight: 'bold',
      marginHorizontal: 12,
    },
    Icon: {
      size: 24,
      fontSize: 24,
      minWidth: 24,
      minHeight: 24,
      width: 24,
      height: 24,
      marginHorizontal: 12,
    },
  },
  'Button[fluid=true]': {
    marginLeft: 0,
    marginRight: 0,
  },
  'Button[circular=true]': {
    borderRadius: 54 / 2,
    marginLeft: 0,
    marginRight: 0,
    paddingLeft: 2,
    paddingRight: 2,
    Text: {
      margin: 2,
    },
  },
};
