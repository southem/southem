import { IconPack } from '../../service';
import { IconProps } from '../../type';
import { createIconsMap } from './createIconsMap';

export const FontAwesome5IconsPack: IconPack<IconProps> = {
  name: 'font-awesome-5',
  icons: createIconsMap(),
};
