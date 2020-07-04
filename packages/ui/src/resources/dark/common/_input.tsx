/* eslint-disable */
import {typography} from '../../typography';
import palette from '../_palette';
import {fontSizeBody} from '../../spacing';
import { normalize } from '../../../tools';

export default {
  Message: {},
  Label: {},
  Input: {
    width: '100%',
    paddingHorizontal: 10,
    Label: {
      color: palette.default,
      ...typography.regular,
      fontSize: 12,
    },
    InputContainer: {
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
      margin: 5,
      fontSize: 12,
    },
  },
  'Input[underline=true]': {
    InputContainer: {
      borderBottomWidth: 1,
      borderColor: palette.default,
    },
  },
  'Input[borderline=true]': {
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
    InputContainer: {
      borderColor: palette.primary,
      WrapIcon: {
        paddingLeft: 4,
        Icon: {
          // The following style will be copied to Props.
          color: palette.primary,
        },
      },
      TextInput: {
        placeholderTextColor: palette.primary,
      },
    },
  },
  'Input[status=success]': {
    Label: {
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
      TextInput: {
        placeholderTextColor: palette.success,
      },
    },
  },
  'Input[status=info]': {
    Label: {
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
      TextInput: {
        placeholderTextColor: palette.info,
      },
    },
  },
  'Input[status=warning]': {
    Label: {
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
      TextInput: {
        placeholderTextColor: palette.warning,
      },
    },
  },
  'Input[status=danger]': {
    Label: {
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
      TextInput: {
        placeholderTextColor: palette.danger,
      },
    },
  },
  TextInput: {
    flex: 1,
    height: normalize(42),
    minHeight: normalize(30),
    marginHorizontal: 5,
    alignSelf: 'center',
    color: palette.textHint,
    fontSize: fontSizeBody,

    // The following style will be copied to Props.
    selectionColor: palette.textHint,
    placeholderTextColor: palette.textHint,
    underlineColorAndroid: 'transparent',
  },
};
