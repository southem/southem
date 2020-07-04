/* eslint-disable */
import { withThemes } from '@southem/theme';
import { connectAnimation } from '@southem/animation';
import createIconFromName from './createIconFromName';

const mapPropToStyles = [
  'type',
  'name',
  'color',
  'size',
];

/**
 * Create Icon component with wanted font family and styleName (optional).
 * Usage: <Icon name="icon-name" size={20} color="#4F8EF7" />
 * @param fontFamily - font used for icons (icon font)
 * @param componentStyleName
 */
export default function (fontFamily: string, componentStyleName: string = 'Icon') {
  const IconComponent = createIconFromName(fontFamily);
  const AnimatedIcon = connectAnimation(IconComponent);
  return withThemes(componentStyleName, mapPropToStyles)(AnimatedIcon);
}
