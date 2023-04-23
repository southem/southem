import { ThemeType } from '@southem/components';
import { Theme } from '../../services/theme.service';

export interface ThemeItem {
  mapping: string;
  name: Theme;
  theme: ThemeType;
}
