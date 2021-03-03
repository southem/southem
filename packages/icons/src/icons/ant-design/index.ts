import { IconPack } from '../../service';
import { IconProps } from '../../type';
import { createIconsMap } from './createIconsMap';

export const AntDesignIconsPack: IconPack<IconProps> = {
  name: 'ant-design',
  icons: createIconsMap(),
};
