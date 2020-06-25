import { ThemeType } from '@southem/theme';
import { ThemeKey } from '../../../services/theme.service';

export interface Theme {
  name: ThemeKey;
  theme: ThemeType;
}
