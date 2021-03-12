/* eslint-disable */
import { normalize } from '@southem/tools';
import { typography } from '../../typography';
import palette from '../_palette';
import { fontSizeBody } from '../../spacing';

export default {
  Message: {
    marginTop: 4,
    fontSize: 12,
    fontWeight: '400',

    Icon: {
      width: 20,
      height: 20,
      marginRight: 6,
    },
  },
  Label: {
    color: palette.default,
    ...typography.regular,
    fontSize: normalize(14),
    marginBottom: 4,
  },
  Input: {
    width: '100%',
    marginHorizontal: 8,
    InputContainer: {
      paddingHorizontal: 8,
      flexDirection: 'row',
      alignItems: 'center',
      WrapIcon: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 4,
        marginVertical: 2,
        Icon: {
          position: 'relative',
          justifyContent: 'center',
          alignItems: 'center',
        },
      },
    },
    Message: {
      color: palette.danger,
      // margin: 5,
    },
  },
  TextInput: {
    flex: 1,
    minHeight: normalize(40),
    marginHorizontal: 5,
    alignSelf: 'center',
    color: palette.default,
    fontSize: fontSizeBody,

    // The following style will be copied to Props.
    selectionColor: palette.textHint,
    placeholderTextColor: palette.textHint,
    underlineColorAndroid: 'transparent',
  },
  'Input[appearance=underline]': {
    InputContainer: {
      borderBottomWidth: 1,
      borderColor: palette.default,
    },
  },
  'Input[appearance=borderline]': {
    InputContainer: {
      borderWidth: 1,
      borderRadius: 3,
      borderColor: palette.default,
    },
  },
  'Input[status=primary]': {
    Label: {
      color: palette.primary,
    },
    Message: {
      color: palette.primary,
    },
    InputContainer: {
      borderColor: palette.primary,
      WrapIcon: {
        paddingLeft: 4,
        Icon: {
          // The following style will be copied to Props.
          color: palette.primary,
        },
      },
    },
  },
  'Input[status=success]': {
    Label: {
      color: palette.success,
    },
    Message: {
      color: palette.success,
    },
    InputContainer: {
      borderColor: palette.success,
      WrapIcon: {
        paddingLeft: 4,
        Icon: {
          // The following style will be copied to Props.
          color: palette.success,
        },
      },
    },
  },
  'Input[status=info]': {
    Label: {
      color: palette.info,
    },
    Message: {
      color: palette.info,
    },
    InputContainer: {
      borderColor: palette.info,
      WrapIcon: {
        paddingLeft: 4,
        Icon: {
          // The following style will be copied to Props.
          color: palette.info,
        },
      },
    },
  },
  'Input[status=warning]': {
    Label: {
      color: palette.warning,
    },
    Message: {
      color: palette.warning,
    },
    InputContainer: {
      borderColor: palette.warning,
      WrapIcon: {
        paddingLeft: 4,
        Icon: {
          // The following style will be copied to Props.
          color: palette.warning,
        },
      },
    },
  },
  'Input[status=danger]': {
    Label: {
      color: palette.danger,
    },
    Message: {
      color: palette.danger,
    },
    InputContainer: {
      borderColor: palette.danger,
      WrapIcon: {
        paddingLeft: 4,
        Icon: {
          // The following style will be copied to Props.
          color: palette.danger,
        },
      },
    },
  },
  'Input[size=small]': {
    InputContainer: {
      borderWidth: 1,
      borderRadius: 4,

      TextInput: {
        minHeight: normalize(32),
      },
    },
  },
  'Input[size=medium]': {
    InputContainer: {
      borderWidth: 1,
      borderRadius: 4,

      TextInput: {
        minHeight: normalize(40),
      },
    },
  },
  'Input[size=large]': {
    InputContainer: {
      borderWidth: 1,
      borderRadius: 4,

      TextInput: {
        minHeight: normalize(48),
      },
    },
  },
};
