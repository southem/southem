import { IconPack } from '../../service';
import { IconProps } from '../../type';
import { createIconsMap } from './createIconsMap';

export const EvilIconsPack: IconPack<IconProps> = {
  name: 'evilicon',
  icons: createIconsMap(),
};
