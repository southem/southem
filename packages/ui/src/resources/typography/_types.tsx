import { normalize } from '../../tools';
import { fontSizeBody } from '../spacing';
import { fontWeight } from './_font-weight';

export default {
  thin: {
    fontFamily: 'Fira Sans',
    fontWeight: fontWeight.thin,
    fontSize: fontSizeBody,
  },
  extraLight: {
    fontFamily: 'Fira Sans',
    fontWeight: fontWeight.extraLight,
    fontSize: fontSizeBody,
  },
  light: {
    fontFamily: 'Fira Sans',
    fontWeight: fontWeight.light,
    fontSize: fontSizeBody,
  },
  regular: {
    fontFamily: 'Fira Sans',
    fontWeight: fontWeight.normal,
    fontSize: fontSizeBody,
    // lineHeight: 24,
  },
  medium: {
    fontFamily: 'Fira Sans',
    fontWeight: fontWeight.medium,
    fontSize: fontSizeBody,
    // lineHeight: 24,
  },
  semiBold: {
    fontFamily: 'Fira Sans',
    fontWeight: fontWeight.semiBold,
    fontSize: fontSizeBody,
    // lineHeight: 24,
  },
  bold: {
    fontFamily: 'Fira Sans',
    fontWeight: fontWeight.bold,
    fontSize: fontSizeBody,
    // lineHeight: 24,
  },
  extraBold: {
    fontFamily: 'Fira Sans',
    fontWeight: fontWeight.extraBold,
    fontSize: fontSizeBody,
    // lineHeight: 24,
  },
  black: {
    fontFamily: 'Fira Sans',
    fontWeight: fontWeight.black,
    fontSize: fontSizeBody,
    // lineHeight: 24,
  },
  h1: {
    fontFamily: 'Fira Sans',
    fontWeight: fontWeight.bold,
    fontSize: normalize(40),
  },
  h2: {
    fontFamily: 'Fira Sans',
    fontWeight: fontWeight.bold,
    fontSize: normalize(34),
  },
  h3: {
    fontFamily: 'Fira Sans',
    fontWeight: fontWeight.bold,
    fontSize: normalize(28),
  },
  h4: {
    fontFamily: 'Fira Sans',
    fontWeight: fontWeight.bold,
    fontSize: normalize(22),
  },
  h5: {
    fontFamily: 'Fira Sans',
    fontWeight: fontWeight.bold,
    fontSize: normalize(18),
  },
  h6: {
    fontFamily: 'Fira Sans',
    fontWeight: fontWeight.bold,
    fontSize: normalize(12),
  },
  s1: {
    fontFamily: 'Fira Sans',
    fontWeight: fontWeight.normal,
    fontSize: normalize(12),
  },
  s2: {
    fontFamily: 'Fira Sans',
    fontWeight: fontWeight.normal,
    fontSize: normalize(11),
  },
  p1: {
    fontFamily: 'Fira Sans',
    fontWeight: fontWeight.normal,
    fontSize: normalize(13),
  },
  p2: {
    fontFamily: 'Fira Sans',
    fontWeight: fontWeight.normal,
    fontSize: normalize(12),
  },
  c1: {
    fontFamily: 'Fira Sans',
    fontWeight: fontWeight.extraLight,
    fontSize: normalize(10),
  },
  c2: {
    fontFamily: 'Fira Sans',
    fontWeight: fontWeight.thin,
    fontSize: normalize(9),
  },
};
