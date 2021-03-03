import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { IconProps } from '../../type';
import { IconProvider, RenderIcon } from '../../service';

export const createIconsMap = (): { [key: string]: IconProvider<IconProps> } => {
  return new Proxy({}, {
    get(target: {}, name: string): IconProvider<IconProps> {
      return new RenderIcon(MaterialIcons, name);
    },
  });
};
