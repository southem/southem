import { IconPack } from '../../service';
import { IconProps } from '../../type';
import { createIconsMap } from './createIconsMap';

export const MaterialIconsPack: IconPack<IconProps> = {
  name: 'material',
  icons: createIconsMap(),
};
