import { IconPack } from '../../service';
import { IconProps } from '../../type';
import { createIconsMap } from './createIconsMap';

export const OcticonsIconsPack: IconPack<IconProps> = {
  name: 'octicon',
  icons: createIconsMap(),
};
