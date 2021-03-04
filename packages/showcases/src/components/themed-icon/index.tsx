import React from 'react';
import { ImageStyle } from 'react-native';
import { IconElement, IconProps } from '@southem/icons';
import { useTheme } from '@southem/theme';

export interface ThemedIconProps extends Omit<IconProps, 'name'> {
  light: (style: ImageStyle) => IconElement;
  dark: (style: ImageStyle) => IconElement;
}

export const ThemedIcon = (props: ThemedIconProps): React.ReactElement => {

  const themeContext = useTheme();
  const { light, dark, ...iconProps } = props;

  return themeContext.isDarkMode() ? dark(iconProps) : light(iconProps);
};
