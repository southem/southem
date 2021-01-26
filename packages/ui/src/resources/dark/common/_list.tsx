// tslint:disable
import { black, transparent } from '../../colors';

export default {
  List: {
    backgroundColor: transparent,
  },

  ListItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 5,

    View: {
      flex: 1,
    },

    Icon: {
      width: 25,
      height: 25,
      marginHorizontal: 12,
      color: black,
    },

    Title: {
      textAlign: 'left',
      // marginHorizontal: titleMarginHorizontal,
      // fontFamily: titleFontFamily,
      // fontSize: titleFontSize,
      // lineHeight: titleLineHeight,
      // fontWeight: titleFontWeight,
      color: black,
    },

    titleStyle: {
      backgroundColor: 'red'
    },
  },
};
