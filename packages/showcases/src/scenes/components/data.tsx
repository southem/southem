import React from 'react';
import { ImageStyle } from 'react-native';
import { Icon, IconElement } from '@southem/ui';
import { MenuItem } from '../../model/menu-item.model';

export interface ComponentData extends MenuItem {
  route: string;
}

export const data: ComponentData[] = [
  {
    title: 'Autocomplete',
    route: 'Autocomplete',
    icon: (style: ImageStyle) => {
      return <Icon {...style} size={48} name='autocomplete'/>;
    },
  },
  {
    title: 'Avatar',
    route: 'Avatar',
    icon: (style: ImageStyle): IconElement => {
      return <Icon {...style} size={48} name='avatar'/>;
    },
  },
  {
    title: 'BottomNavigation',
    route: 'BottomNavigation',
    icon: (style: ImageStyle): IconElement => {
      return <Icon {...style} size={48} name='bottom-navigation'/>;
    },
  },
  {
    title: 'Button',
    route: 'Button',
    icon: (style: ImageStyle): IconElement => {
      return <Icon {...style} size={48} name='button'/>;
    },
  },
  {
    title: 'ButtonGroup',
    route: 'ButtonGroup',
    icon: (style: ImageStyle): IconElement => {
      return <Icon {...style} size={48} name='button-group'/>;
    },
  },
  {
    title: 'Calendar',
    route: 'Calendar',
    icon: (style: ImageStyle): IconElement => {
      return <Icon {...style} size={48} name='calendar'/>;
    },
  },
  {
    title: 'Card',
    route: 'Card',
    icon: (style: ImageStyle): IconElement => {
      return <Icon {...style} name='card'/>;
    },
  },
  {
    title: 'CheckBox',
    route: 'CheckBox',
    icon: (style: ImageStyle): IconElement => {
      return <Icon {...style} name='check-box'/>;
    },
  },
  {
    title: 'Datepicker',
    route: 'Datepicker',
    icon: (style: ImageStyle): IconElement => {
      return <Icon {...style} name='datepicker-dark'/>;
    },
  },
  {
    title: 'Drawer',
    route: 'Drawer',
    icon: (style: ImageStyle): IconElement => {
      return <Icon {...style} name='drawer'/>;
    },
  },
  {
    title: 'Icon',
    route: 'Icon',
    icon: (style: ImageStyle): IconElement => {
      return <Icon {...style} name='icon'/>;
    },
  },
  {
    title: 'Input',
    route: 'Input',
    icon: (style: ImageStyle): IconElement => {
      return <Icon {...style} name='input'/>;
    },
  },
  {
    title: 'Layout',
    route: 'Layout',
    icon: (style: ImageStyle): IconElement => {
      return <Icon {...style} name='modal'/>;
    },
  },
  {
    title: 'List',
    route: 'List',
    icon: (style: ImageStyle): IconElement => {
      return <Icon {...style} name='list'/>;
    },
  },
  {
    title: 'Menu',
    route: 'Menu',
    icon: (style: ImageStyle): IconElement => {
      return <Icon {...style} name='menu'/>;
    },
  },
  {
    title: 'Modal',
    route: 'Modal',
    icon: (style: ImageStyle): IconElement => {
      return <Icon {...style} name='modal'/>;
    },
  },
  {
    title: 'OverflowMenu',
    route: 'OverflowMenu',
    icon: (style: ImageStyle): IconElement => {
      return <Icon {...style} name='overflow-menu'/>;
    },
  },
  {
    title: 'Popover',
    route: 'Popover',
    icon: (style: ImageStyle): IconElement => {
      return <Icon {...style} name='popover'/>;
    },
  },
  {
    title: 'Radio',
    route: 'Radio',
    icon: (style: ImageStyle): IconElement => {
      return <Icon {...style} name='radio'/>;
    },
  },
  {
    title: 'RadioGroup',
    route: 'RadioGroup',
    icon: (style: ImageStyle): IconElement => {
      return <Icon {...style} name='radio'/>;
    },
  },
  {
    title: 'RangeCalendar',
    route: 'RangeCalendar',
    icon: (style: ImageStyle): IconElement => {
      return <Icon {...style} name='calendar'/>;
    },
  },
  {
    title: 'RangeDatepicker',
    route: 'RangeDatepicker',
    icon: (style: ImageStyle): IconElement => {
      return <Icon {...style} name='datepicker'/>;
    },
  },
  {
    title: 'Select',
    route: 'Select',
    icon: (style: ImageStyle): IconElement => {
      return <Icon {...style} name='select'/>;
    },
  },
  {
    title: 'Spinner',
    route: 'Spinner',
    icon: (style: ImageStyle): IconElement => {
      return <Icon {...style} name='spinner'/>;
    },
  },
  {
    title: 'TabView',
    route: 'TabView',
    icon: (style: ImageStyle): IconElement => {
      return <Icon {...style} name='tab-view'/>;
    },
  },
  {
    title: 'Text',
    route: 'Text',
    icon: (style: ImageStyle): IconElement => {
      return <Icon {...style} name='format-color-text'/>;
    },
  },
  {
    title: 'Toggle',
    route: 'Toggle',
    icon: (style: ImageStyle): IconElement => {
      return <Icon {...style} name='toggle-switch'/>;
    },
  },
  {
    title: 'Tooltip',
    route: 'Tooltip',
    icon: (style: ImageStyle): IconElement => {
      return <Icon {...style} name='tooltip'/>;
    },
  },
  {
    title: 'TopNavigation',
    route: 'TopNavigation',
    icon: (style: ImageStyle): IconElement => {
      return <Icon {...style} name='top-navigation'/>;
    },
  },
];
