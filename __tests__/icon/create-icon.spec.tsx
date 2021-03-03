/* eslint-disable */
import ZocialIcon from 'react-native-vector-icons/Zocial';
import OcticonIcon from 'react-native-vector-icons/Octicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
// @ts-ignore
import createIcon from '@southem/icons/src/components/createIcon';

describe('Render Helpers', () => {
  it('should return correct icon type', () => {
    expect(createIcon('zocial')).toEqual(ZocialIcon);
    expect(createIcon('octicon')).toEqual(OcticonIcon);
    expect(createIcon('material')).toEqual(MaterialIcon);
    expect(createIcon('ionicon')).toEqual(Ionicon);
    expect(createIcon('foundation')).toEqual(FoundationIcon);
    expect(createIcon('evilicon')).toEqual(EvilIcon);
    expect(createIcon('entypo')).toEqual(EntypoIcon);
    expect(createIcon('font-awesome')).toEqual(FontAwesomeIcon);
  });

  it('should return Material Icon on not found icon type', () => {
    expect(createIcon('a')).toEqual(MaterialIcon);
  });
});
