/* eslint-disable */
import {
  createIconSetFromIcoMoon,
  createIconSetFromFontello,
} from 'react-native-vector-icons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import Ionicon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import OcticonIcon from 'react-native-vector-icons/Octicons';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import ZocialIcon from 'react-native-vector-icons/Zocial';
import createConfig from './createConfig';
import icoMoonConfig from './selection.json';
import fontelloConfig from './config.json';

const customIcons = {};

export const registerCustomIconType = (id, customIcon) => {
  customIcons[id] = customIcon;
};

export default function createIcon(fontFamily: string) {
  switch (fontFamily) {
    case 'ant-design':
      return AntDesign;
    case 'entypo':
      return EntypoIcon;
    case 'evilicon':
      return EvilIcon;
    case 'feather':
      return FeatherIcon;
    case 'font-awesome':
      return FontAwesome;
    case 'font-awesome-5':
      return FontAwesome5;
    case 'fontisto':
      return Fontisto;
    case 'foundation':
      return FoundationIcon;
    case 'ionicon':
      return Ionicon;
    case 'material':
      return MaterialIcon;
    case 'material-community':
      return MaterialCommunityIcon;
    case 'octicon':
      return OcticonIcon;
    case 'simple-line-icon':
      return SimpleLineIcon;
    case 'zocial':
      return ZocialIcon;
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
