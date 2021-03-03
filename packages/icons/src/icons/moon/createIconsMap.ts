import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import { IconProps } from '../../type';
import { IconProvider, RenderIcon, createConfig } from '../../service';
import icoMoonConfig from './selection.json';

export const createIconsMap = (): { [key: string]: IconProvider<IconProps> } => {
  return new Proxy({}, {
    get(target: {}, name: string): IconProvider<IconProps> {
      return new RenderIcon(
        createIconSetFromIcoMoon(
          createConfig(
            'moon',
            icoMoonConfig,
          )),
        name,
      );
    },
  });
};
