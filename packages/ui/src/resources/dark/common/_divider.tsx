import { fontSizeCaption } from '../../spacing';
import palette from '../_palette';

export default {
  Divider: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  'Divider[orientation=vertical]': {
    height: '100%',
    DividerLabel: {
      marginTop: 8,
      marginBottom: 8,
    },
    DividerLine: {
      flex: 1,
      minWidth: 1,
      minHeight: 16,
      width: 1,
    },
  },
  'Divider[orientation=horizontal]': {
    width: '100%',
    flexDirection: 'row',
    DividerLabel: {
      marginLeft: 8,
      marginRight: 8,
    },
    DividerLine: {
      flex: 1,
      minWidth: 16,
      minHeight: 1,
      height: 1,
    },
  },
  DividerLabel: {
    color: palette.default,
    fontSize: fontSizeCaption,
  },
  DividerLine: {
    height: 1,
    backgroundColor: '#E5E5E5',
    width: '100%',
  },
};
