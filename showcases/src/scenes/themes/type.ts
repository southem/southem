import { ThemeType } from '@southem/theme';
import { Theme } from '../../services/theme.service';

export interface ThemeItem {
  name: Theme;
  theme: ThemeType;
}
