import { IconPack } from '../../service';
import { IconProps } from '../../type';
import { createIconsMap } from './createIconsMap';

export const SimpleLineIconsPack: IconPack<IconProps> = {
  name: 'simple-line-icon',
  icons: createIconsMap(),
};
