import { TextStyle, ViewStyle } from 'react-native';

export interface PrimitiveStyle {
  default: string;

  primary: string;
  secondary: string;

  danger: string;
  info: string;
  success: string;
  warning: string;
}

export interface Breakpoints {
  small: number;
  medium: number;
  large: number;
  xlarge: number;
}

export interface ScreenSizes extends Breakpoints {
  xsmall: number;
}

export type ColumnCount =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24;

export interface ContainerSizes {
  small: number;
  medium: number;
  large: number;
  xlarge: number;
}

export type Breakpoint = keyof Breakpoints;
export type ContainerSize = keyof ContainerSizes;
export type ScreenSize = keyof ScreenSizes;

export interface Layout {
  breakpoints: Breakpoints;
  gridColumnCount: ColumnCount;
  gutterWidth: number;
  containerSizes: ContainerSizes;
}

export interface TextSizes {
  xsmall: TextStyle;
  small: TextStyle;
  medium: TextStyle;
  large: TextStyle;
}
export type TextSize = keyof TextSizes;

export interface HeadingSizes {
  xxxlarge: TextStyle;
  xxlarge: TextStyle;
  xlarge: TextStyle;
  large: TextStyle;
  medium: TextStyle;
  small: TextStyle;

  [size: string]: TextStyle | undefined;
}

export type HeadingSize = keyof HeadingSizes;

export interface ParagraphSizes {
  small: TextStyle;
  medium: TextStyle;
  large: TextStyle;

  [size: string]: TextStyle | undefined;
}

export type ParagraphSize = keyof ParagraphSizes;

export interface SpacingSizes {
  xxxlarge: number;
  xxlarge: number;
  xlarge: number;
  large: number;
  medium: number;
  small: number;
  xsmall: number;
}

export type SpacingSize = keyof SpacingSizes;

export type Font = {
  fontFamily: string;
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
};

export interface Fonts {
  light: Font;
  regular: Font;
  bold: Font;
  medium: Font;
  thin: Font;
}

export interface TextColors extends PrimitiveStyle {
  muted: string;

  link: string;
  white: string;
  selected: string;
}

export type TextColor = keyof TextColors | string;

export interface ButtonColors extends PrimitiveStyle {
  disabled: string;
}

export interface ButtonColorsWithText extends ButtonColors {
  dangerText: string;
  defaultText: string;
  disabledText: string;
  primaryText: string;
  secondaryText: string;
}

export type ButtonColor = keyof ButtonColors | string;

export interface BorderColors extends PrimitiveStyle {}

export type BorderColor = keyof BorderColors | string;

export interface BackgroundColors extends PrimitiveStyle {}

export type BackgroundColor = keyof BackgroundColors | string;

export interface Colors {
  background: BackgroundColors;
  border: BorderColors;
  button: ButtonColorsWithText;
  text: TextColors;
}

export type Elevations = ViewStyle[];
export type Elevation = ViewStyle;

export interface ControlSizes {
  small: number;
  medium: number;
  large: number;
}

export type ControlSize = keyof ControlSizes;

export interface FillColorProps {
  backgroundColor: string;
  color: string;
}

export interface FillColors {
  default: FillColorProps;
  blue: FillColorProps;
  red: FillColorProps;
  orange: FillColorProps;
  yellow: FillColorProps;
  green: FillColorProps;
  teal: FillColorProps;
  purple: FillColorProps;
}

export type FillColor = keyof FillColors;

export interface Fills {
  subtle: FillColors;
  solid: FillColors;
}

export interface ContainerShapes {
  circle: ViewStyle;
  pill: ViewStyle;
  rounded: ViewStyle;
  roundedBottom: ViewStyle;
  roundedLeft: ViewStyle;
  roundedRight: ViewStyle;
  roundedTop: ViewStyle;
  square: ViewStyle;
}


export interface StylesTheme {
  // Colors
  colors: Colors;
  fills: Fills;

  // Layout
  layout: Layout;
  spacing: SpacingSizes;

  // Typography
  fonts: Fonts;

  headingSizes: HeadingSizes;
  paragraphSizes: ParagraphSizes;
  textSizes: TextSizes;

  // Elevations
  elevations: Elevations;

  // Controls - Buttons, Pickers, Inputs etc.
  controlPaddings: ControlSizes;
  controlHeights: ControlSizes;
  controlBorderRadius: ControlSizes;

  // Containers
  containerShapes: ContainerShapes;
}
