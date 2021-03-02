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
      return <Icon style={style} size={48} name='autocomplete'/>;
    },
  },
  {
    title: 'Avatar',
    route: 'Avatar',
    icon: (style: ImageStyle): IconElement => {
      return <Icon style={style} size={48} type='material-community' name='face-profile'/>;
    },
  },
  {
    title: 'BottomNavigation',
    route: 'BottomNavigation',
    icon: (style: ImageStyle): IconElement => {
      return <Icon style={style} size={48} name='bottom-navigation'/>;
    },
  },
  {
    title: 'Button',
    route: 'Button',
    icon: (style: ImageStyle): IconElement => {
      return <Icon style={style} size={48} name='button'/>;
    },
  },
  {
    title: 'ButtonGroup',
    route: 'ButtonGroup',
    icon: (style: ImageStyle): IconElement => {
      return <Icon style={style} size={48} name='button-group'/>;
    },
  },
  {
    title: 'Calendar',
    route: 'Calendar',
    icon: (style: ImageStyle): IconElement => {
      return <Icon style={style} size={48} name='calendar'/>;
    },
  },
  {
    title: 'Card',
    route: 'Card',
    icon: (style: ImageStyle): IconElement => {
      return <Icon style={style} size={48} name='card'/>;
    },
  },
  {
    title: 'CheckBox',
    route: 'CheckBox',
    icon: (style: ImageStyle): IconElement => {
      return <Icon style={style} size={48} name='check-box'/>;
    },
  },
  {
    title: 'Datepicker',
    route: 'Datepicker',
    icon: (style: ImageStyle): IconElement => {
      return <Icon style={style} size={48} name='datepicker-dark'/>;
    },
  },
  {
    title: 'Drawer',
    route: 'Drawer',
    icon: (style: ImageStyle): IconElement => {
      return <Icon style={style} size={48} name='drawer'/>;
    },
  },
  {
    title: 'Icon',
    route: 'Icon',
    icon: (style: ImageStyle): IconElement => {
      return <Icon style={style} size={48} name='icon'/>;
    },
  },
  {
    title: 'Input',
    route: 'Input',
    icon: (style: ImageStyle): IconElement => {
      return <Icon style={style} size={48} name='input'/>;
    },
  },
  {
    title: 'Layout',
    route: 'Layout',
    icon: (style: ImageStyle): IconElement => {
      return <Icon style={style} size={48} name='modal'/>;
    },
  },
  {
    title: 'List',
    route: 'List',
    icon: (style: ImageStyle): IconElement => {
      return <Icon style={style} size={48} name='list'/>;
    },
  },
  {
    title: 'Menu',
    route: 'Menu',
    icon: (style: ImageStyle): IconElement => {
      return <Icon style={style} size={48} name='menu'/>;
    },
  },
  {
    title: 'Modal',
    route: 'Modal',
    icon: (style: ImageStyle): IconElement => {
      return <Icon style={style} size={48} name='modal'/>;
    },
  },
  {
    title: 'OverflowMenu',
    route: 'OverflowMenu',
    icon: (style: ImageStyle): IconElement => {
      return <Icon style={style} size={48} name='overflow-menu'/>;
    },
  },
  {
    title: 'Popover',
    route: 'Popover',
    icon: (style: ImageStyle): IconElement => {
      return <Icon style={style} size={48} name='popover'/>;
    },
  },
  {
    title: 'Radio',
    route: 'Radio',
    icon: (style: ImageStyle): IconElement => {
      return <Icon style={style} size={48} name='radio'/>;
    },
  },
  {
    title: 'RadioGroup',
    route: 'RadioGroup',
    icon: (style: ImageStyle): IconElement => {
      return <Icon style={style} size={48} name='radio'/>;
    },
  },
  {
    title: 'RangeCalendar',
    route: 'RangeCalendar',
    icon: (style: ImageStyle): IconElement => {
      return <Icon style={style} size={48} name='calendar'/>;
    },
  },
  {
    title: 'RangeDatepicker',
    route: 'RangeDatepicker',
    icon: (style: ImageStyle): IconElement => {
      return <Icon style={style} size={48} name='datepicker'/>;
    },
  },
  {
    title: 'Select',
    route: 'Select',
    icon: (style: ImageStyle): IconElement => {
      return <Icon style={style} size={48} name='select'/>;
    },
  },
  {
    title: 'Spinner',
    route: 'Spinner',
    icon: (style: ImageStyle): IconElement => {
      return <Icon style={style} size={48} name='spinner'/>;
    },
  },
  {
    title: 'TabView',
    route: 'TabView',
    icon: (style: ImageStyle): IconElement => {
      return <Icon style={style} size={48} name='tab-view'/>;
    },
  },
  {
    title: 'Text',
    route: 'Text',
    icon: (style: ImageStyle): IconElement => {
      return <Icon style={style} size={48} name='format-color-text'/>;
    },
  },
  {
    title: 'Toggle',
    route: 'Toggle',
    icon: (style: ImageStyle): IconElement => {
      return <Icon style={style} size={48} name='toggle-switch'/>;
    },
  },
  {
    title: 'Tooltip',
    route: 'Tooltip',
    icon: (style: ImageStyle): IconElement => {
      return <Icon style={style} size={48} name='tooltip'/>;
    },
  },
  {
    title: 'TopNavigation',
    route: 'TopNavigation',
    icon: (style: ImageStyle): IconElement => {
      return <Icon style={style} size={48} name='top-navigation'/>;
    },
  },
];
