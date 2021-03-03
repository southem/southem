import { IconPack } from '../../service';
import { IconProps } from '../../type';
import { createIconsMap } from './createIconsMap';

export const MoonIconsPack: IconPack<IconProps> = {
  name: 'moon',
  icons: createIconsMap(),
};
