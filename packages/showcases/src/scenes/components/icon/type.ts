import {
  ComponentShowcase,
  ComponentShowcaseItem,
  ComponentShowcaseSection,
  ComponentShowcaseSetting,
} from '../../../model/showcase.model';

const defaultIcon: ComponentShowcaseItem = {
  title: 'Default',
  props: {},
};

const zoomIcon: ComponentShowcaseItem = {
  title: 'Zoom',
  props: {
    // animationName: 'zoomIn',
  },
};

const pulseIcon: ComponentShowcaseItem = {
  title: 'Pulse',
  props: {
    // animationName: 'pulse',
  },
};

const shakeIcon: ComponentShowcaseItem = {
  title: 'Shake',
  props: {
    // animationName: 'shake',
  },
};

const infiniteExample: ComponentShowcaseItem = {
  title: 'Infinite',
  props: {
    // animationName: 'shake',
    animationConfig: {
      cycles: -1,
    },
  },
};

const defaultSection: ComponentShowcaseSection = {
  title: 'Default',
  items: [
    defaultIcon,
  ],
};

const animationSection: ComponentShowcaseSection = {
  title: 'Animations',
  items: [
    zoomIcon,
    pulseIcon,
    shakeIcon,
  ],
};

const infiniteSection: ComponentShowcaseSection = {
  title: 'Infinite Animation',
  items: [
    infiniteExample,
  ],
};

export const iconShowcase: ComponentShowcase = {
  title: 'Icon',
  sections: [
    defaultSection,
    animationSection,
    infiniteSection,
  ],
};

export const iconSettings: ComponentShowcaseSetting[] = [
  {
    propertyName: 'type',
    value: 'feather',
  },
  {
    propertyName: 'type',
    value: 'font-awesome',
  },
  {
    propertyName: 'type',
    value: 'material',
  },
  {
    propertyName: 'type',
    value: 'material-community',
  },
];
