import { createIconSetFromFontello } from 'react-native-vector-icons';
import { IconProps } from '../../type';
import { IconProvider, RenderIcon, createConfig } from '../../service';
import fontelloConfig from './config.json';

export const createIconsMap = (): { [key: string]: IconProvider<IconProps> } => {
  return new Proxy({}, {
    get(target: {}, name: string): IconProvider<IconProps> {
      return new RenderIcon(
        createIconSetFromFontello(createConfig(
          'fontello',
          fontelloConfig,
        )),
        name,
      );
    },
  });
};
