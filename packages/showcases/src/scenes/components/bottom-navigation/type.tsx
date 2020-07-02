import React from 'react';
import { BottomNavigationTab } from '@southem/ui';
import { StarIcon } from '../../../components/icons';
import {
  ComponentShowcase,
  ComponentShowcaseItem,
  ComponentShowcaseSection,
  ComponentShowcaseSetting,
} from '../../../model/showcase.model';

const titleBottomNavigation: ComponentShowcaseItem = {
  props: {
    children: [
      <BottomNavigationTab title='Tab 1'/>,
      <BottomNavigationTab title='Tab 2'/>,
      <BottomNavigationTab title='Tab 3'/>,
    ],
  },
};

const iconBottomNavigation: ComponentShowcaseItem = {
  props: {
    children: [
      // @ts-ignore
      <BottomNavigationTab icon={StarIcon}/>,
      // @ts-ignore
      <BottomNavigationTab icon={StarIcon}/>,
      // @ts-ignore
      <BottomNavigationTab icon={StarIcon}/>,
    ],
  },
};

const iconTitleBottomNavigation: ComponentShowcaseItem = {
  props: {
    children: [
      // @ts-ignore
      <BottomNavigationTab icon={StarIcon} title='Tab 1'/>,
      // @ts-ignore
      <BottomNavigationTab icon={StarIcon} title='Tab 2'/>,
      // @ts-ignore
      <BottomNavigationTab icon={StarIcon} title='Tab 3'/>,
    ],
  },
};

const titleSection: ComponentShowcaseSection = {
  title: 'Title',
  items: [
    titleBottomNavigation,
  ],
};

const iconSection: ComponentShowcaseSection = {
  title: 'Icon',
  items: [
    iconBottomNavigation,
  ],
};

const iconTitleSection: ComponentShowcaseSection = {
  title: 'Icon Title',
  items: [
    iconTitleBottomNavigation,
  ],
};

export const bottomNavigationShowcase: ComponentShowcase = {
  title: 'Bottom Navigation',
  sections: [
    titleSection,
    iconSection,
    iconTitleSection,
  ],
};

export const bottomNavigationSettings: ComponentShowcaseSetting[] = [
  {
    propertyName: 'appearance',
    value: 'noIndicator',
    description: 'No Indicator',
  },
];
