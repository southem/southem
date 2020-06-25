import {
  ImageStyle,
  StyleProp,
} from 'react-native';
import {
  ComponentsIconAvatar,
  ComponentsIconAvatarDark,
  ComponentsIconBottomNavigation,
  ComponentsIconBottomNavigationDark,
  ComponentsIconButton,
  ComponentsIconButtonDark,
  ComponentsIconButtonGroup,
  ComponentsIconButtonGroupDark,
  ComponentsIconCheckBox,
  ComponentsIconCheckBoxDark,
  ComponentsIconInput,
  ComponentsIconInputDark,
  ComponentsIconList,
  ComponentsIconListDark,
  ComponentsIconOverflowMenu,
  ComponentsIconOverflowMenuDark,
  ComponentsIconPopover,
  ComponentsIconPopoverDark,
  ComponentsIconRadio,
  ComponentsIconRadioDark,
  ComponentsIconTabView,
  ComponentsIconTabViewDark,
  ComponentsIconText,
  ComponentsIconTextDark,
  ComponentsIconToggle,
  ComponentsIconToggleDark,
  ComponentsIconTooltip,
  ComponentsIconTooltipDark,
  ComponentsIconTopNavigation,
  ComponentsIconTopNavigationDark,
  ComponentsIconModal,
  ComponentsIconModalDark,
} from '../../../assets/icons';
import {
  ThemeKey,
  ThemeService,
} from '../../../services/theme.service';
import { ComponentsContainerData } from './type';

export const routes: ComponentsContainerData[] = [
  {
    // @ts-ignore
    title: 'Button',
    icon: (style: StyleProp<ImageStyle>, theme: ThemeKey) => {
      return ThemeService.select({
        light: ComponentsIconButton(style),
        dark: ComponentsIconButtonDark(style),
      }, theme);
    },
    route: 'Button',
  },
  {
    // @ts-ignore
    title: 'Button Group',
    icon: (style: StyleProp<ImageStyle>, theme: ThemeKey) => {
      return ThemeService.select({
        light: ComponentsIconButtonGroup(style),
        dark: ComponentsIconButtonGroupDark(style),
      }, theme);
    },
    route: 'Button Group',
  },
  {
    // @ts-ignore
    title: 'Checkbox',
    icon: (style: StyleProp<ImageStyle>, theme: ThemeKey) => {
      return ThemeService.select({
        light: ComponentsIconCheckBox(style),
        dark: ComponentsIconCheckBoxDark(style),
      }, theme);
    },
    route: 'CheckBox',
  },
  {
    // @ts-ignore
    title: 'Toggle',
    icon: (style: StyleProp<ImageStyle>, theme: ThemeKey) => {
      return ThemeService.select({
        light: ComponentsIconToggle(style),
        dark: ComponentsIconToggleDark(style),
      }, theme);
    },
    route: 'Toggle',
  },
  {
    // @ts-ignore
    title: 'Radio',
    icon: (style: StyleProp<ImageStyle>, theme: ThemeKey) => {
      return ThemeService.select({
        light: ComponentsIconRadio(style),
        dark: ComponentsIconRadioDark(style),
      }, theme);
    },
    route: 'Radio',
  },
  {
    // @ts-ignore
    title: 'Input',
    icon: (style: StyleProp<ImageStyle>, theme: ThemeKey) => {
      return ThemeService.select({
        light: ComponentsIconInput(style),
        dark: ComponentsIconInputDark(style),
      }, theme);
    },
    route: 'Input',
  },
  {
    // @ts-ignore
    title: 'Text',
    icon: (style: StyleProp<ImageStyle>, theme: ThemeKey) => {
      return ThemeService.select({
        light: ComponentsIconText(style),
        dark: ComponentsIconTextDark(style),
      }, theme);
    },
    route: 'Text',
  },
  {
    // @ts-ignore
    title: 'Avatar',
    icon: (style: StyleProp<ImageStyle>, theme: ThemeKey) => {
      return ThemeService.select({
        light: ComponentsIconAvatar(style),
        dark: ComponentsIconAvatarDark(style),
      }, theme);
    },
    route: 'Avatar',
  },
  {
    // @ts-ignore
    title: 'Popover',
    icon: (style: StyleProp<ImageStyle>, theme: ThemeKey) => {
      return ThemeService.select({
        light: ComponentsIconPopover(style),
        dark: ComponentsIconPopoverDark(style),
      }, theme);
    },
    route: 'Popover',
  },
  {
    // @ts-ignore
    title: 'Tooltip',
    icon: (style: StyleProp<ImageStyle>, theme: ThemeKey) => {
      return ThemeService.select({
        light: ComponentsIconTooltip(style),
        dark: ComponentsIconTooltipDark(style),
      }, theme);
    },
    route: 'Tooltip',
  },
  {
    // @ts-ignore
    title: 'Overflow Menu',
    icon: (style: StyleProp<ImageStyle>, theme: ThemeKey) => {
      return ThemeService.select({
        light: ComponentsIconOverflowMenu(style),
        dark: ComponentsIconOverflowMenuDark(style),
      }, theme);
    },
    route: 'Overflow Menu',
  },
  {
    // @ts-ignore
    title: 'Tab View',
    icon: (style: StyleProp<ImageStyle>, theme: ThemeKey) => {
      return ThemeService.select({
        light: ComponentsIconTabView(style),
        dark: ComponentsIconTabViewDark(style),
      }, theme);
    },
    route: 'Tab View',
  },
  {
    // @ts-ignore
    title: 'List',
    icon: (style: StyleProp<ImageStyle>, theme: ThemeKey) => {
      return ThemeService.select({
        light: ComponentsIconList(style),
        dark: ComponentsIconListDark(style),
      }, theme);
    },
    route: 'List',
  },
  {
    // @ts-ignore
    title: 'Top Navigation',
    icon: (style: StyleProp<ImageStyle>, theme: ThemeKey) => {
      return ThemeService.select({
        light: ComponentsIconTopNavigation(style),
        dark: ComponentsIconTopNavigationDark(style),
      }, theme);
    },
    route: 'Top Navigation',
  },
  {
    // @ts-ignore
    title: 'Bottom Navigation',
    icon: (style: StyleProp<ImageStyle>, theme: ThemeKey) => {
      return ThemeService.select({
        light: ComponentsIconBottomNavigation(style),
        dark: ComponentsIconBottomNavigationDark(style),
      }, theme);
    },
    route: 'Bottom Navigation',
  },
  {
    // @ts-ignore
    title: 'Modal',
    icon: (style: StyleProp<ImageStyle>, theme: ThemeKey) => {
      return ThemeService.select({
        light: ComponentsIconModal(style),
        dark: ComponentsIconModalDark(style),
      }, theme);
    },
    route: 'Modal',
  },
];
