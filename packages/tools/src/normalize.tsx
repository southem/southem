/* eslint-disable */
import { PixelRatio } from 'react-native';
/**
 * Some code taken from https://jsfiddle.net/97ty7yjk/ &
 * https://stackoverflow.com/questions/34837342/font-size-on-iphone-6s-plus
 * https://reactnative.dev/docs/pixelratio
 */
import { DEVICE, PIXELRATIO } from './device';

// based on iPhone 11's scale
// tslint:disable-next-line:max-line-length
const [shortDimension, longDimension] =  DEVICE.width < DEVICE.height ? [DEVICE.width, DEVICE.height] : [DEVICE.height, DEVICE.width];

const guidelineBaseWidth = shortDimension / 360;
const guidelineBaseHeight = longDimension / 680;

export const normalize = (size: number) => Math.round(
  PixelRatio.roundToNearestPixel(guidelineBaseWidth * size),
);
export const normalizeVerticalScale = (size: number) => Math.round(
  PixelRatio.roundToNearestPixel(guidelineBaseHeight * size))
;
export const normalizeModerateScale = (size: number, factor: number = 0.5) => Math.round(
  PixelRatio.roundToNearestPixel(size + ( normalize(size) - size ) * factor),
);

export const normalizeFontAndLineHeight = (size: number) => {
  /**
  const fontScale = DeviceInfo.getFontScaleSync();

  if (fontScale && Number(fontScale)) {
    return Math.round(PixelRatio.roundToNearestPixel(size / Number(fontScale)));
  } else {
    return normalize(size);
  }
  **/
};

export const normalizeLetterSpacing = (size: number) => Number((size * guidelineBaseWidth).toFixed(2));
