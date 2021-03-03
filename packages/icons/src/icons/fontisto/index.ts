import { IconPack } from '../../service';
import { IconProps } from '../../type';
import { createIconsMap } from './createIconsMap';

export const FontIstoIconsPack: IconPack<IconProps> = {
  name: 'fontisto',
  icons: createIconsMap(),
};
