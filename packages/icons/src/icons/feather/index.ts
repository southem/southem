import { IconPack } from '../../service';
import { IconProps } from '../../type';
import { createIconsMap } from './createIconsMap';

export const FeatherIconsPack: IconPack<IconProps> = {
  name: 'feather',
  icons: createIconsMap(),
};
