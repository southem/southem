import React from 'react';
import { ImageStyle } from 'react-native';
import { IconElement, IconProps } from '@southem/ui';
import { ThemeContext } from '../../services/theme.service';

export interface ThemedIconProps extends Omit<IconProps, 'name'> {
  light: (style: ImageStyle) => IconElement;
  dark: (style: ImageStyle) => IconElement;
}

export const ThemedIcon = (props: ThemedIconProps): React.ReactElement => {

  const themeContext = React.useContext(ThemeContext);
  alert(themeContext);
  const { light, dark, ...iconProps } = props;

  return themeContext.isDarkMode() ? dark(iconProps) : light(iconProps);
};
