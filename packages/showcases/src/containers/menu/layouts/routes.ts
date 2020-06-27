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
    // @ts-ignore
    icon: (style: StyleProp<ImageStyle>, theme: ThemeKey) => {
      return ThemeService.select({
        Light: MenuIconAuth(style),
        Dark: MenuIconAuthDark(style),
      }, theme);
    },
    route: 'Auth',
  },
  {
    title: 'Social',
    // @ts-ignore
    icon: (style: StyleProp<ImageStyle>, theme: ThemeKey) => {
      return ThemeService.select({
        Light: MenuIconSocial(style),
        Dark: MenuIconSocialDark(style),
      }, theme);
    },
    route: 'Social',
  },
  {
    title: 'Articles',
    // @ts-ignore
    icon: (style: StyleProp<ImageStyle>, theme: ThemeKey) => {
      return ThemeService.select({
        Light: MenuIconArticles(style),
        Dark: MenuIconArticlesDark(style),
      }, theme);
    },
    route: 'Articles',
  },
  {
    title: 'Messaging',
    // @ts-ignore
    icon: (style: StyleProp<ImageStyle>, theme: ThemeKey) => {
      return ThemeService.select({
        Light: MenuIconMessaging(style),
        Dark: MenuIconMessagingDark(style),
      }, theme);
    },
    route: 'Messaging',
  },
  {
    title: 'Dashboards',
    // @ts-ignore
    icon: (style: StyleProp<ImageStyle>, theme: ThemeKey) => {
      return ThemeService.select({
        Light: MenuIconDashboards(style),
        Dark: MenuIconDashboardsDark(style),
      }, theme);
    },
    route: 'Dashboards',
  },
  {
    title: 'Ecommerce',
    // @ts-ignore
    icon: (style: StyleProp<ImageStyle>, theme: ThemeKey) => {
      return ThemeService.select({
        Light: MenuIconEcommerce(style),
        Dark: MenuIconEcommerceDark(style),
      }, theme);
    },
    route: 'Ecommerce',
  },
];
