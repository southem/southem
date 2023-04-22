import React from 'react';
import { StyleSheet } from 'react-native';
import { BottomNavigationTab } from '@southem/ui';
import { StarIcon } from '../../../components';
import {
  ComponentShowcase,
  ComponentShowcaseItem,
  ComponentShowcaseSection,
  ComponentShowcaseSetting,
} from '../../../model/showcase.model';

const styles = StyleSheet.create({
  customIcons: {
    marginTop: 10,
  },
});

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
      <BottomNavigationTab style={styles.customIcons}  icon={StarIcon} title='Tab 1'/>,
      // @ts-ignore
      <BottomNavigationTab style={styles.customIcons} icon={StarIcon} title='Tab 2'/>,
      // @ts-ignore
      <BottomNavigationTab style={styles.customIcons} icon={StarIcon} title='Tab 3'/>,
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
