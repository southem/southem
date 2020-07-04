import {
  ComponentShowcase,
  ComponentShowcaseItem,
  ComponentShowcaseSection,
  ComponentShowcaseSetting,
} from '../../../model/showcase.model';

const defaultButtonGroup: ComponentShowcaseItem = {
  title: 'Default',
  props: {},
};

const bigButtonGroup: ComponentShowcaseItem = {
  title: 'Big',
  props: {
    size: 'big',
  },
};

const largeButtonGroup: ComponentShowcaseItem = {
  title: 'Large',
  props: {
    size: 'large',
  },
};

const mediumButtonGroup: ComponentShowcaseItem = {
  title: 'Medium',
  props: {
    size: 'medium',
  },
};

const smallButtonGroup: ComponentShowcaseItem = {
  title: 'Small',
  props: {
    size: 'small',
  },
};

const miniButtonGroup: ComponentShowcaseItem = {
  title: 'Mini',
  props: {
    size: 'mini',
  },
};

const defaultSection: ComponentShowcaseSection = {
  title: 'Default',
  items: [
    defaultButtonGroup,
  ],
};

const sizeSection: ComponentShowcaseSection = {
  title: 'Size',
  items: [
    bigButtonGroup,
    largeButtonGroup,
    mediumButtonGroup,
    smallButtonGroup,
    miniButtonGroup,
  ],
};

export const buttonGroupShowcase: ComponentShowcase = {
  title: 'Button Group',
  sections: [
    defaultSection,
    sizeSection,
  ],
};

export const buttonGroupSettings: ComponentShowcaseSetting[] = [
  {
    propertyName: 'appearance',
    value: 'filled',
  },
  {
    propertyName: 'appearance',
    value: 'outline',
  },
  {
    propertyName: 'status',
    value: 'primary',
  },
  {
    propertyName: 'status',
    value: 'success',
  },
  {
    propertyName: 'status',
    value: 'info',
  },
  {
    propertyName: 'status',
    value: 'warning',
  },
  {
    propertyName: 'status',
    value: 'danger',
  },
  {
    propertyName: 'status',
    value: 'basic',
  },
];
