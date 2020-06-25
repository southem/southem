import React from 'react';
import { ImageProps } from 'react-native';
import { StyleType } from '@southem/theme';
import { ThemeKey } from '../../../services/theme.service';

export interface LayoutsListItemData {
  title: string;
  icon: (style: StyleType, currentTheme: ThemeKey) => React.ReactElement<ImageProps>;
}
