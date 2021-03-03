import { IconPack } from '../../service';
import { IconProps } from '../../type';
import { createIconsMap } from './createIconsMap';

export const FontElloIconsPack: IconPack<IconProps> = {
  name: 'fontello',
  icons: createIconsMap(),
};
