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
    title: 'Button',
    // @ts-ignore
    icon: (style: StyleProp<ImageStyle>, theme: ThemeKey) => {
      return ThemeService.select({
        Light: ComponentsIconButton(style),
        Dark: ComponentsIconButtonDark(style),
      }, theme);
    },
    route: 'Button',
  },
  {
    title: 'Button Group',
    // @ts-ignore
    icon: (style: StyleProp<ImageStyle>, theme: ThemeKey) => {
      return ThemeService.select({
        Light: ComponentsIconButtonGroup(style),
        Dark: ComponentsIconButtonGroupDark(style),
      }, theme);
    },
    route: 'ButtonGroup',
  },
  {
    title: 'Checkbox',
    // @ts-ignore
    icon: (style: StyleProp<ImageStyle>, theme: ThemeKey) => {
      return ThemeService.select({
        Light: ComponentsIconCheckBox(style),
        Dark: ComponentsIconCheckBoxDark(style),
      }, theme);
    },
    route: 'CheckBox',
  },
  {
    title: 'Toggle',
    // @ts-ignore
    icon: (style: StyleProp<ImageStyle>, theme: ThemeKey) => {
      return ThemeService.select({
        Light: ComponentsIconToggle(style),
        Dark: ComponentsIconToggleDark(style),
      }, theme);
    },
    route: 'Toggle',
  },
  {
    title: 'Radio',
    // @ts-ignore
    icon: (style: StyleProp<ImageStyle>, theme: ThemeKey) => {
      return ThemeService.select({
        Light: ComponentsIconRadio(style),
        Dark: ComponentsIconRadioDark(style),
      }, theme);
    },
    route: 'Radio',
  },
  {
    title: 'Input',
    // @ts-ignore
    icon: (style: StyleProp<ImageStyle>, theme: ThemeKey) => {
      return ThemeService.select({
        Light: ComponentsIconInput(style),
        Dark: ComponentsIconInputDark(style),
      }, theme);
    },
    route: 'Input',
  },
  {
    title: 'Text',
    // @ts-ignore
    icon: (style: StyleProp<ImageStyle>, theme: ThemeKey) => {
      return ThemeService.select({
        Light: ComponentsIconText(style),
        Dark: ComponentsIconTextDark(style),
      }, theme);
    },
    route: 'Text',
  },
  {
    title: 'Avatar',
    // @ts-ignore
    icon: (style: StyleProp<ImageStyle>, theme: ThemeKey) => {
      return ThemeService.select({
        Light: ComponentsIconAvatar(style),
        Dark: ComponentsIconAvatarDark(style),
      }, theme);
    },
    route: 'Avatar',
  },
  {
    title: 'Popover',
    // @ts-ignore
    icon: (style: StyleProp<ImageStyle>, theme: ThemeKey) => {
      return ThemeService.select({
        Light: ComponentsIconPopover(style),
        Dark: ComponentsIconPopoverDark(style),
      }, theme);
    },
    route: 'Popover',
  },
  {
    title: 'Tooltip',
    // @ts-ignore
    icon: (style: StyleProp<ImageStyle>, theme: ThemeKey) => {
      return ThemeService.select({
        Light: ComponentsIconTooltip(style),
        Dark: ComponentsIconTooltipDark(style),
      }, theme);
    },
    route: 'Tooltip',
  },
  {
    title: 'Overflow Menu',
    // @ts-ignore
    icon: (style: StyleProp<ImageStyle>, theme: ThemeKey) => {
      return ThemeService.select({
        Light: ComponentsIconOverflowMenu(style),
        Dark: ComponentsIconOverflowMenuDark(style),
      }, theme);
    },
    route: 'OverflowMenu',
  },
  {
    title: 'Tab View',
    // @ts-ignore
    icon: (style: StyleProp<ImageStyle>, theme: ThemeKey) => {
      return ThemeService.select({
        Light: ComponentsIconTabView(style),
        Dark: ComponentsIconTabViewDark(style),
      }, theme);
    },
    route: 'TabView',
  },
  {
    title: 'List',
    // @ts-ignore
    icon: (style: StyleProp<ImageStyle>, theme: ThemeKey) => {
      return ThemeService.select({
        Light: ComponentsIconList(style),
        Dark: ComponentsIconListDark(style),
      }, theme);
    },
    route: 'List',
  },
  {
    title: 'Top Navigation',
    // @ts-ignore
    icon: (style: StyleProp<ImageStyle>, theme: ThemeKey) => {
      return ThemeService.select({
        Light: ComponentsIconTopNavigation(style),
        Dark: ComponentsIconTopNavigationDark(style),
      }, theme);
    },
    route: 'TopNavigation',
  },
  {
    title: 'Bottom Navigation',
    // @ts-ignore
    icon: (style: StyleProp<ImageStyle>, theme: ThemeKey) => {
      return ThemeService.select({
        Light: ComponentsIconBottomNavigation(style),
        Dark: ComponentsIconBottomNavigationDark(style),
      }, theme);
    },
    route: 'BottomNavigation',
  },
  {
    title: 'Modal',
    // @ts-ignore
    icon: (style: StyleProp<ImageStyle>, theme: ThemeKey) => {
      return ThemeService.select({
        Light: ComponentsIconModal(style),
        Dark: ComponentsIconModalDark(style),
      }, theme);
    },
    route: 'Modal',
  },
];
