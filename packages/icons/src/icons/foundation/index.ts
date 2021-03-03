import { IconPack } from '../../service';
import { IconProps } from '../../type';
import { createIconsMap } from './createIconsMap';

export const FoundationIconsPack: IconPack<IconProps> = {
  name: 'foundation',
  icons: createIconsMap(),
};
