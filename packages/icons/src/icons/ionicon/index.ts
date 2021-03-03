import { IconPack } from '../../service';
import { IconProps } from '../../type';
import { createIconsMap } from './createIconsMap';

export const IonIconsPack: IconPack<IconProps> = {
  name: 'ionicon',
  icons: createIconsMap(),
};
