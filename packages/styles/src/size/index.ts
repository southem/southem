import type {
  ControlSizes,
  HeadingSizes,
  ParagraphSizes,
  TextSizes,
  ContainerShapes,
} from '../types';

const controlPaddings: ControlSizes = {
  small: 8,
  medium: 16,
  large: 24,
};

const controlHeights: ControlSizes = {
  small: 40,
  medium: 48,
  large: 56,
};

const controlBorderRadius: ControlSizes = {
  small: 4,
  medium: 4,
  large: 4,
};

const headingSizes: HeadingSizes = {
  xxxlarge: {
    fontSize: 35,
    letterSpacing: -0.2,
    lineHeight: 40,
  },

  xxlarge: {
    fontSize: 29,
    letterSpacing: -0.2,
    lineHeight: 32,
  },

  xlarge: {
    fontSize: 24,
    letterSpacing: -0.07,
    lineHeight: 28,
  },

  large: {
    fontSize: 20,
    letterSpacing: -0.07,
    lineHeight: 24,
  },

  medium: {
    fontSize: 16,
    letterSpacing: -0.05,
    lineHeight: 20,
  },

  small: {
    fontSize: 14,
    letterSpacing: -0.05,
    lineHeight: 20,
  },
};

const paragraphSizes: ParagraphSizes = {
  small: {
    fontSize: 14,
    lineHeight: 24,
  },

  medium: {
    fontSize: 16,
    lineHeight: 21,
  },

  large: {
    fontSize: 18,
    lineHeight: 18,
  },
};

const textSizes: TextSizes = {
  large: {
    fontSize: 20,
  },
  medium: {
    fontSize: 16,
  },
  small: {
    fontSize: 14,
  },
  xsmall: {
    fontSize: 12,
  },
};

const containerShapes: ContainerShapes = {
  circle: {
    borderRadius: 999,
  },
  pill: {
    borderRadius: 999,
  },
  rounded: {
    borderRadius: controlBorderRadius.medium,
  },
  roundedBottom: {
    borderBottomLeftRadius: controlBorderRadius.medium,
    borderBottomRightRadius: controlBorderRadius.medium,
  },
  roundedLeft: {
    borderBottomLeftRadius: controlBorderRadius.medium,
    borderTopLeftRadius: controlBorderRadius.medium,
  },
  roundedRight: {
    borderBottomRightRadius: controlBorderRadius.medium,
    borderTopRightRadius: controlBorderRadius.medium,
  },
  roundedTop: {
    borderTopLeftRadius: controlBorderRadius.medium,
    borderTopRightRadius: controlBorderRadius.medium,
  },
  square: {
    borderRadius: 0,
  },
};

export default {
  controlPaddings,
  controlHeights,
  controlBorderRadius,
  headingSizes,
  paragraphSizes,
  textSizes,
  containerShapes
}
