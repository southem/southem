import { IconPack } from '../../service';
import { IconProps } from '../../type';
import { createIconsMap } from './createIconsMap';

export const MaterialCommunityIconsPack: IconPack<IconProps> = {
  name: 'material-community',
  icons: createIconsMap(),
};
