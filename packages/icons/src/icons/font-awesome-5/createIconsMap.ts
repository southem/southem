import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { IconProps } from '../../type';
import { IconProvider, RenderIcon } from '../../service';

export const createIconsMap = (): { [key: string]: IconProvider<IconProps> } => {
  return new Proxy({}, {
    get(target: {}, name: string): IconProvider<IconProps> {
      return new RenderIcon(FontAwesome5, name);
    },
  });
};
