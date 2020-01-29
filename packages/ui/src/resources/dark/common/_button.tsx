import { black, transparent, white } from '../../colors';
import { fontSizeButton } from '../../spacing';
import palette from '../_palette';

export default {
  Button: {
    activeOpacity: 0.9,
    borderRadius: 3,
    borderColor: palette.default,
    backgroundColor: palette.default,
    paddingVertical: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    ActivityIndicator: {
      marginRight: 3,
      color: white,
    },
    Icon: {
      padding: 0,
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
  'Button[type=filled]': {
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
  'Button[type=outline]': {
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
  'Button[type=ghost]': {
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
  'Button[status=white]': {
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
    minWidth: 42 - 16,
    height: 42 - 16,
    Text: {
      fontSize: fontSizeButton - 2,
    },
  },
  'Button[size=small]': {
    minWidth: 42 - 8,
    height: 42 - 8,
    Icon: {
      size: 16,
      minWidth: 16,
      minHeight: 16,
    },
    Text: {
      fontSize: fontSizeButton - 1,
    },
  },
  'Button[size=medium]': {
    minWidth: 42,
    height: 42,
    Text: {
      fontSize: fontSizeButton,
    },
  },
  'Button[size=large]': {
    minWidth: 42 + 8,
    height: 42 + 8,
    Text: {
      fontSize: fontSizeButton + 1,
    },
  },
  'Button[size=big]': {
    minWidth: 42 + 16,
    height: 42 + 16,
    Text: {
      fontSize: fontSizeButton + 2,
    },
  },
  'Button[fluid=true]': {
    width: '100%',
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
