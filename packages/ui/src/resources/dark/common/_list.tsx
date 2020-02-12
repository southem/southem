// tslint:disable
import { black } from '../../colors';

export default {
  List: {},
  ListItem: {
    flexDirection: 'row',
    alignItems: 'center',

    View: {
      flex: 1,
    },
    Icon: {
      width: 25,
      height: 25,
      marginHorizontal: 12,
      tintColor: black,
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
  },
};
