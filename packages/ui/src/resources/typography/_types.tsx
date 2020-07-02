import { normalize } from '../../tools';
import { fontWeight } from './_font-weight';

export default {
  thin: {
    fontFamily: 'Fira Sans Thin',
    fontStyle: 'normal',
    ...fontWeight.thin,
  },
  thinItalic: {
    fontFamily: 'Fira Sans Thin Italic',
    fontStyle: 'normal',
    ...fontWeight.thin,
  },
  extraLight: {
    fontFamily: 'Fira Sans Extra Light',
    fontStyle: 'normal',
    ...fontWeight.extraLight,
  },
  extraLightItalic: {
    fontFamily: 'Fira Sans Extra Light Italic',
    fontStyle: 'normal',
    ...fontWeight.extraLight,
  },
  light: {
    fontFamily: 'Fira Sans Light',
    fontStyle: 'normal',
    ...fontWeight.light,
  },
  lightItalic: {
    fontFamily: 'Fira Sans Light Italic',
    fontStyle: 'normal',
    ...fontWeight.light,
  },
  regular: {
    fontFamily: 'Fira Sans',
    fontStyle: 'normal',
    ...fontWeight.normal,
  },
  regularItalic: {
    fontFamily: 'Fira Sans Italic',
    fontStyle: 'normal',
    ...fontWeight.normal,
  },
  medium: {
    fontFamily: 'Fira Sans Medium',
    fontStyle: 'normal',
    ...fontWeight.medium,
  },
  semiBold: {
    fontFamily: 'Fira Sans Semi Bold',
    fontStyle: 'normal',
    ...fontWeight.semiBold,
  },
  semiBoldItalic: {
    fontFamily: 'Fira Sans Semi Bold Italic',
    fontStyle: 'normal',
    ...fontWeight.semiBold,
  },
  bold: {
    fontFamily: 'Fira Sans Bold',
    fontStyle: 'normal',
    ...fontWeight.bold,
  },
  boldItalic: {
    fontFamily: 'Fira Sans Bold Italic',
    fontStyle: 'normal',
    ...fontWeight.bold,
  },
  extraBold: {
    fontFamily: 'Fira Sans Extra Bold',
    fontStyle: 'normal',
    ...fontWeight.extraBold,
  },
  extraBoldItalic: {
    fontFamily: 'Fira Sans Extra Bold Italic',
    fontStyle: 'normal',
    ...fontWeight.extraBold,
  },
  black: {
    fontFamily: 'Fira Sans Black',
    fontStyle: 'normal',
    ...fontWeight.black,
  },
  blackItalic: {
    fontFamily: 'Fira Sans Black Italic',
    fontStyle: 'normal',
    ...fontWeight.black,
  },
  h1: {
    fontFamily: 'Fira Sans Bold',
    fontStyle: 'normal',
    fontSize: normalize(44),
    ...fontWeight.bold,
  },
  h2: {
    fontFamily: 'Fira Sans Bold',
    fontStyle: 'normal',
    fontSize: normalize(38),
    ...fontWeight.bold,
  },
  h3: {
    fontFamily: 'Fira Sans Bold',
    fontStyle: 'normal',
    fontSize: normalize(30),
    ...fontWeight.bold,
  },
  h4: {
    fontFamily: 'Fira Sans Bold',
    fontStyle: 'normal',
    fontSize: normalize(24),
    ...fontWeight.bold,
  },
  h5: {
    fontFamily: 'Fira Sans Bold',
    fontStyle: 'normal',
    fontSize: normalize(18),
    ...fontWeight.bold,
  },
  h6: {
    fontFamily: 'Fira Sans Bold',
    fontStyle: 'normal',
    fontSize: normalize(16),
    ...fontWeight.bold,
  },
  s1: {
    fontFamily: 'Fira Sans',
    fontStyle: 'normal',
    fontSize: normalize(15),
    ...fontWeight.normal,
  },
  s2: {
    fontFamily: 'Fira Sans',
    fontStyle: 'normal',
    fontSize: normalize(13),
    ...fontWeight.normal,
  },
  p1: {
    fontFamily: 'Fira Sans',
    fontStyle: 'normal',
    fontSize: normalize(16),
    ...fontWeight.normal,
  },
  p2: {
    fontFamily: 'Fira Sans',
    fontStyle: 'normal',
    fontSize: normalize(14),
    ...fontWeight.normal,
  },
  c1: {
    fontFamily: 'Fira Sans Extra Light',
    fontStyle: 'normal',
    fontSize: normalize(12),
    ...fontWeight.extraLight,
  },
  c2: {
    fontFamily: 'Fira Sans Thin',
    fontStyle: 'normal',
    fontSize: normalize(10),
    ...fontWeight.thin,
  },
};
