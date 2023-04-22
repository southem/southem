import { StarIcon } from '../../../components/icons';
import {
  ComponentShowcase,
  ComponentShowcaseItem,
  ComponentShowcaseSection,
  ComponentShowcaseSetting,
} from '../../../model/showcase.model';

const defaultButton: ComponentShowcaseItem = {
  title: 'Default',
  props: {},
};

const disabledButton: ComponentShowcaseItem = {
  title: 'Disabled',
  props: {
    disabled: true,
  },
};

const leftIconButton: ComponentShowcaseItem = {
  title: 'Left Icon',
  props: {
    accessoryLeft: StarIcon,
  },
};

const rightIconButton: ComponentShowcaseItem = {
  title: 'Right Icon',
  props: {
    accessoryRight: StarIcon,
  },
};

const disabledIconButton: ComponentShowcaseItem = {
  title: 'Disabled',
  props: {
    accessoryLeft: StarIcon,
    disabled: true,
  },
};

const bigButton: ComponentShowcaseItem = {
  title: 'Big',
  props: {
    accessoryLeft: StarIcon,
    size: 'big',
  },
};

const largeButton: ComponentShowcaseItem = {
  title: 'Large',
  props: {
    accessoryLeft: StarIcon,
    size: 'large',
  },
};

const mediumButton: ComponentShowcaseItem = {
  title: 'Medium',
  props: {
    accessoryLeft: StarIcon,
    size: 'medium',
  },
};

const smallButton: ComponentShowcaseItem = {
  title: 'Small',
  props: {
    accessoryLeft: StarIcon,
    size: 'small',
  },
};

const miniButton: ComponentShowcaseItem = {
  title: 'Mini',
  props: {
    accessoryLeft: StarIcon,
    size: 'mini',
  },
};
const textSection: ComponentShowcaseSection = {
  title: 'Text',
  items: [
    defaultButton,
    disabledButton,
  ],
};

const iconSection: ComponentShowcaseSection = {
  title: 'Icon',
  items: [
    leftIconButton,
    rightIconButton,
    disabledIconButton,
  ],
};

const sizeSection: ComponentShowcaseSection = {
  title: 'Size',
  items: [
    bigButton,
    largeButton,
    mediumButton,
    smallButton,
    miniButton,
  ],
};

export const buttonShowcase: ComponentShowcase = {
  title: 'Button',
  sections: [
    textSection,
    iconSection,
    sizeSection,
  ],
};

export const buttonSettings: ComponentShowcaseSetting[] = [
  {
    propertyName: 'appearance',
    value: 'filled',
  },
  {
    propertyName: 'appearance',
    value: 'outline',
  },
  {
    propertyName: 'appearance',
    value: 'ghost',
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

