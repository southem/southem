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
import createIconFromName from '@southem/ui/src/common/icon/createIconFromName';

describe('Render Helpers', () => {
  it('should return correct icon type', () => {
    expect(createIconFromName('zocial')).toEqual(ZocialIcon);
    expect(createIconFromName('octicon')).toEqual(OcticonIcon);
    expect(createIconFromName('material')).toEqual(MaterialIcon);
    expect(createIconFromName('ionicon')).toEqual(Ionicon);
    expect(createIconFromName('foundation')).toEqual(FoundationIcon);
    expect(createIconFromName('evilicon')).toEqual(EvilIcon);
    expect(createIconFromName('entypo')).toEqual(EntypoIcon);
    expect(createIconFromName('font-awesome')).toEqual(FontAwesomeIcon);
  });

  it('should return Material Icon on not found icon type', () => {
    expect(createIconFromName('a')).toEqual(MaterialIcon);
  });
});
