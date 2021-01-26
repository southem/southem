import {transparent} from '../../colors';
import palette from '../_palette';

export default {
  Radio: {
    flexDirection: 'row',
    activeOpacity: 0.8,
    alignItems: 'center',
    WrapContent: {
      justifyContent: 'center',
      alignItems: 'center',

      WrapView: {
        position: 'absolute',
      },
      Touchable: {
        margin: 4,
        width: 20,
        height: 20,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: palette.default,
        alignItems: 'center',
        justifyContent: 'center',
        IconView: {
          width: 10,
          height: 10,
          borderRadius: 5,
          backgroundColor: palette.default,
        },
      },
    },
    Text: {
      marginHorizontal: 3,
      // fontSize
      color: palette.default,
    },
  },
  'Radio[disabled=true]': {
    opacity: 0.4,
  },
  'Radio[checked=true]': {
    WrapContent: {
      borderColor: palette.default,
      Touchable: {
        borderColor: palette.default,
        IconView: {
          backgroundColor: palette.default,
        },
      },
    },
  },
  'Radio[checked=false]': {
    WrapContent: {
      borderColor: palette.default,
      Touchable: {
        backgroundColor: transparent,
        IconView: {
          backgroundColor: transparent,
        },
      },
    },
  },
  'Radio[status=primary]': {
    WrapContent: {
      borderColor: palette.primary,
      Touchable: {
        borderColor: palette.primary,
        backgroundColor: transparent,
        IconView: {
          backgroundColor: palette.primary,
        },
      },
    },
  },
  'Radio[status=success]': {
    WrapContent: {
      borderColor: palette.success,
      Touchable: {
        borderColor: palette.success,
        backgroundColor: transparent,
        IconView: {
          backgroundColor: palette.success,
        },
      },
    },
  },
  'Radio[status=info]': {
    WrapContent: {
      borderColor: palette.info,
      Touchable: {
        borderColor: palette.info,
        backgroundColor: transparent,
        IconView: {
          backgroundColor: palette.info,
        },
      },
    },
  },
  'Radio[status=warning]': {
    WrapContent: {
      borderColor: palette.warning,
      Touchable: {
        borderColor: palette.warning,
        backgroundColor: transparent,
        IconView: {
          backgroundColor: palette.warning,
        },
      },
    },
  },
  'Radio[status=danger]': {
    WrapContent: {
      borderColor: palette.danger,
      Touchable: {
        borderColor: palette.danger,
        backgroundColor: transparent,
        IconView: {
          backgroundColor: palette.danger,
        },
      },
    },
  },
};
