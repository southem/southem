import { SvgProps } from 'react-native-svg';
import { IconProvider } from '../../service/type';
import { findIconByName } from './findIconByName';
import { SouthemIcon } from './iccon.component';

export const createIconsMap = (): { [key: string]: IconProvider<SvgProps> } => {
  return new Proxy({}, {
    get(target: {}, name: string): IconProvider<SvgProps> {
      // @ts-ignore
      return new SouthemIcon(findIconByName(name));
    },
  });
};
