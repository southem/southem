/* eslint-disable */
import {
  createIconSetFromIcoMoon,
  createIconSetFromFontello,
} from 'react-native-vector-icons';
import ZocialIcon from 'react-native-vector-icons/Zocial';
import OcticonIcon from 'react-native-vector-icons/Octicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import createConfig from './createConfig';
import icoMoonConfig from './selection.json';
import fontelloConfig from './config.json';

const customIcons = {};

export const registerCustomIconType = (id, customIcon) => {
  customIcons[id] = customIcon;
};

export default function createIconFromName(fontFamily) {
  switch (fontFamily) {
    case 'zocial':
      return ZocialIcon;
    case 'octicon':
      return OcticonIcon;
    case 'material':
      return MaterialIcon;
    case 'material-community':
      return MaterialCommunityIcon;
    case 'ionicon':
      return Ionicon;
    case 'foundation':
      return FoundationIcon;
    case 'evilicon':
      return EvilIcon;
    case 'entypo':
      return EntypoIcon;
    case 'font-awesome':
      return FAIcon;
    case 'simple-line-icon':
      return SimpleLineIcon;
    case 'feather':
      return FeatherIcon;
    case 'moon':
      return createIconSetFromIcoMoon(createConfig('moon', icoMoonConfig));
    case 'fontello':
      return createIconSetFromFontello(createConfig('fontello', fontelloConfig));
    default:
      if (customIcons.hasOwnProperty(fontFamily)) {
        return customIcons[fontFamily];
      }
      return MaterialIcon;
  }
}