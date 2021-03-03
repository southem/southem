import { IconPack } from '../../service';
import { IconProps } from '../../type';
import { createIconsMap } from './createIconsMap';

export const FontAwesomeIconsPack: IconPack<IconProps> = {
  name: 'font-awesome',
  icons: createIconsMap(),
};
