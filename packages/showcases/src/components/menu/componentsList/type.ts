import React from 'react';
import { ImageProps } from 'react-native';
import { StyleType } from '@southem/theme';
import {AppTheme} from '../../../services/theme.service';

export interface ComponentsListItemData {
  title: string;
  icon: (style: StyleType, theme: AppTheme) => React.ReactElement<ImageProps>;
}
