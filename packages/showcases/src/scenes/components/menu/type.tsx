import { StarIcon } from '../../../components/icons';
import {
  ComponentShowcase,
  ComponentShowcaseItem,
  ComponentShowcaseSection,
  ComponentShowcaseSetting,
} from '../../../model/showcase.model';

const defaultMenuItems = [
  { title: 'Item 1' },
  { title: 'Item 2' },
  { title: 'Item 3' },
];

const withIconMenuItems = [
  {
    title: 'Item 1',
    accessoryLeft: StarIcon,
  },
  {
    title: 'Item 2',
    accessoryLeft: StarIcon,
  },
  {
    title: 'Item 3',
    accessoryLeft: StarIcon,
  },
];

const withDisabledItemMenuItems = [
  {
    title: 'Item 1',
    accessoryLeft: StarIcon,
  },
  {
    title: 'Item 2',
    accessoryLeft: StarIcon,
    disabled: true,
  },
  {
    title: 'Item 3',
    accessoryLeft: StarIcon,
  },
];

const withGroupsMenuItems = [
  {
    title: 'Item 1',
    accessoryLeft: StarIcon,
  },
  {
    title: 'Item 2',
    accessoryLeft: StarIcon,
    subItems: [
      {
        title: 'Item 21',
        accessoryLeft: StarIcon,
        disabled: true,
      },
      {
        title: 'Item 22',
        accessoryLeft: StarIcon,
      },
      {
        title: 'Item 23',
        accessoryLeft: StarIcon,
      },
    ],
  },
  {
    title: 'Item 3',
    accessoryLeft: StarIcon,
  },
];

const defaultMenu: ComponentShowcaseItem = {
  title: 'Default',
  props: {
    data: defaultMenuItems,
  },
};

const withIconsMenu: ComponentShowcaseItem = {
  title: 'Icon',
  props: {
    data: withIconMenuItems,
  },
};

const withDisabledItemMenu: ComponentShowcaseItem = {
  title: 'Disabled Item',
  props: {
    data: withDisabledItemMenuItems,
  },
};

const defaultSection: ComponentShowcaseSection = {
  title: 'Default',
  items: [
    defaultMenu,
    withIconsMenu,
    withDisabledItemMenu,
  ],
};

const withGroupsMenu: ComponentShowcaseItem = {
  title: 'Groups',
  props: {
    data: withGroupsMenuItems,
  },
};

const withGroupsSection: ComponentShowcaseSection = {
  title: 'With Groups',
  items: [
    withGroupsMenu,
  ],
};

export const menuShowcase: ComponentShowcase = {
  title: 'Menu',
  sections: [
    defaultSection,
    withGroupsSection,
  ],
};

export const menuSettings: ComponentShowcaseSetting[] = [
  {
    propertyName: 'appearance',
    value: 'default',
  },
  {
    propertyName: 'appearance',
    value: 'noDivider',
  },
];
