import { IconPack } from '../../service';
import { IconProps } from '../../type';
import { createIconsMap } from './createIconsMap';

export const EntypoIconsPack: IconPack<IconProps> = {
  name: 'entypo',
  icons: createIconsMap(),
};
