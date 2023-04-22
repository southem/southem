import {
  ComponentShowcase,
  ComponentShowcaseItem,
  ComponentShowcaseSection,
} from '../../../model/showcase.model';

const bigAvatar: ComponentShowcaseItem = {
  title: 'Big',
  props: {
    size: 'big',
  },
};

const largeAvatar: ComponentShowcaseItem = {
  title: 'Large',
  props: {
    size: 'large',
  },
};

const mediumAvatar: ComponentShowcaseItem = {
  title: 'Medium',
  props: {
    size: 'medium',
  },
};

const smallAvatar: ComponentShowcaseItem = {
  title: 'Small',
  props: {
    size: 'small',
  },
};

const miniAvatar: ComponentShowcaseItem = {
  title: 'Mini',
  props: {
    size: 'mini',
  },
};

const roundAvatar: ComponentShowcaseItem = {
  title: 'Round',
  props: {
    shape: 'round',
  },
};

const roundedAvatar: ComponentShowcaseItem = {
  title: 'Rounded',
  props: {
    shape: 'rounded',
  },
};

const squareAvatar: ComponentShowcaseItem = {
  title: 'Square',
  props: {
    shape: 'square',
  },
};

const shapeSection: ComponentShowcaseSection = {
  title: 'Shape',
  items: [
    roundAvatar,
    roundedAvatar,
    squareAvatar,
  ],
};

const sizeSection: ComponentShowcaseSection = {
  title: 'Size',
  items: [
    bigAvatar,
    largeAvatar,
    mediumAvatar,
    smallAvatar,
    miniAvatar,
  ],
};

export const avatarShowcase: ComponentShowcase = {
  title: 'Avatar',
  sections: [
    sizeSection,
    shapeSection,
  ],
};
