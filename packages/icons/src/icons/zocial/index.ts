import { IconPack } from '../../service';
import { IconProps } from '../../type';
import { createIconsMap } from './createIconsMap';

export const ZocialIconsPack: IconPack<IconProps> = {
  name: 'zocial',
  icons: createIconsMap(),
};
