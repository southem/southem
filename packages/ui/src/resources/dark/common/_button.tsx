import { normalize } from '@southem/tools';
import { black, transparent, white } from '../../colors';
import { fontSizeButton } from '../../spacing';
import palette from '../_palette';

const sizeButton = normalize(42);

export default {
  Button: {
    activeOpacity: 0.9,
    borderRadius: 3,
    borderColor: palette.default,
    backgroundColor: palette.default,
    paddingLeft: 6,
    paddingRight: 6,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: sizeButton,
    ActivityIndicator: {
      marginRight: 3,
      color: white,
    },
    Icon: {
      paddingHorizontal: 3,
      size: 18,
      minWidth: 18,
      minHeight: 18,
      color: white,
      textAlign: 'center',
      marginVertical: 3,
    },
    Text: {
      alignItems: 'stretch',
      fontSize: fontSizeButton,
      fontWeight: '500',
      color: white,
      margin: 2,
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
      alignItems: 'stretch',
      fontSize: fontSizeButton,
      fontWeight: '500',
      color: white,
      margin: 2,
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
    padding: 1,
    minWidth: sizeButton - 16,
    height: sizeButton - 16,
    Text: {
      margin: 0,
      fontSize: fontSizeButton - 4,
    },
  },
  'Button[size=small]': {
    minWidth: sizeButton - 8,
    height: sizeButton - 8,
    Icon: {
      size: 16,
      minWidth: 16,
      minHeight: 16,
    },
    Text: {
      margin: 0,
      fontSize: fontSizeButton - 2,
    },
  },
  'Button[size=medium]': {
    minWidth: sizeButton,
    height: sizeButton,
    Text: {
      fontSize: fontSizeButton,
    },
  },
  'Button[size=large]': {
    minWidth: sizeButton + 8,
    height: sizeButton + 8,
    Text: {
      fontSize: fontSizeButton + 1,
    },
  },
  'Button[size=big]': {
    minWidth: sizeButton + 16,
    height: sizeButton + 16,
    Text: {
      fontSize: fontSizeButton + 2,
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
