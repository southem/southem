import {
  ImageStyle,
  StyleProp,
} from 'react-native';
import {
  MenuIconAuth,
  MenuIconArticles,
  MenuIconDashboards,
  MenuIconEcommerce,
  MenuIconMessaging,
  MenuIconSocial,
  MenuIconAuthDark,
  MenuIconSocialDark,
  MenuIconArticlesDark,
  MenuIconMessagingDark,
  MenuIconDashboardsDark,
  MenuIconEcommerceDark,
} from '../../../assets/icons';
import {
  ThemeKey,
  ThemeService,
} from '../../../services/theme.service';
import { LayoutsContainerData } from './type';

export const routes: LayoutsContainerData[] = [
  {
    title: 'Auth',
    icon: (style: StyleProp<ImageStyle>, theme: ThemeKey) => {
      return ThemeService.select({
        'Light': MenuIconAuth(style),
        'Dark': MenuIconAuthDark(style),
      }, theme);
    },
    route: 'Auth',
  },
  {
    title: 'Social',
    icon: (style: StyleProp<ImageStyle>, theme: ThemeKey) => {
      return ThemeService.select({
        'Light': MenuIconSocial(style),
        'Dark': MenuIconSocialDark(style),
      }, theme);
    },
    route: 'Social',
  },
  {
    title: 'Articles',
    icon: (style: StyleProp<ImageStyle>, theme: ThemeKey) => {
      return ThemeService.select({
        'Light': MenuIconArticles(style),
        'Dark': MenuIconArticlesDark(style),
      }, theme);
    },
    route: 'Articles',
  },
  {
    title: 'Messaging',
    icon: (style: StyleProp<ImageStyle>, theme: ThemeKey) => {
      return ThemeService.select({
        'Light': MenuIconMessaging(style),
        'Dark': MenuIconMessagingDark(style),
      }, theme);
    },
    route: 'Messaging',
  },
  {
    title: 'Dashboards',
    icon: (style: StyleProp<ImageStyle>, theme: ThemeKey) => {
      return ThemeService.select({
        'Light': MenuIconDashboards(style),
        'Dark': MenuIconDashboardsDark(style),
      }, theme);
    },
    route: 'Dashboards',
  },
  {
    title: 'Ecommerce',
    icon: (style: StyleProp<ImageStyle>, theme: ThemeKey) => {
      return ThemeService.select({
        'Light': MenuIconEcommerce(style),
        'Dark': MenuIconEcommerceDark(style),
      }, theme);
    },
    route: 'Ecommerce',
  },
];
