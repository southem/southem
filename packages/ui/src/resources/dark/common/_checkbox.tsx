import palette from '../_palette';

export default {
  CheckBox: {
    flexDirection: 'row',
    activeOpacity: 0.8,
    alignItems: 'center',
    Text: {
      color: palette.default,
      marginHorizontal: 8,
    },
  },
  'CheckBox[disabled=true]': {
    opacity: 0.4,
  },
  'CheckBox[checked=true]': {
    Text: {
      color: palette.default,
    },
  },
  'CheckBox[checked=false]': {
    Text: {
      color: palette.default,
    },
  },
  'CheckBox[status=primary]': {
    Text: {
      color: palette.primary,
    },
  },
  'CheckBox[status=success]': {
    Text: {
      color: palette.success,
    },
  },
  'CheckBox[status=info]': {
    Text: {
      color: palette.info,
    },
  },
  'CheckBox[status=warning]': {
    Text: {
      color: palette.warning,
    },
  },
  'CheckBox[status=danger]': {
    Text: {
      color: palette.danger,
    },
  },
  CheckMark: {
    backgroundColor: palette.default,
    alignItems: 'center',
    justifyContent: 'center',
  },
  'CheckMark[checked=true]': {
    name: 'check-box',
  },
  'CheckMark[checked=false]': {
    name: 'check-box-outline-blank',
  },
  'CheckMark[indeterminate=true]': {
    name: 'indeterminate-check-box',
  },
  'CheckMark[status=primary]': {
    color: palette.primary,
  },
  'CheckMark[status=success]': {
    color: palette.success,
  },
  'CheckMark[status=info]': {
    color: palette.info,
  },
  'CheckMark[status=warning]': {
    color: palette.warning,
  },
  'CheckMark[status=danger]': {
    color: palette.danger,
  },
};
