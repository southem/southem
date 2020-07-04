/* eslint-disable */
import { PixelRatio } from 'react-native';
/**
 * Some code taken from https://jsfiddle.net/97ty7yjk/ &
 * https://stackoverflow.com/questions/34837342/font-size-on-iphone-6s-plus
 * https://reactnative.dev/docs/pixelratio
 */
import { DEVICE, PIXELRATIO } from './device';

/**
const DEVICEHEIGHT = DEVICE.height;
const DEVICEWIDTH = DEVICE.width;

export const normalize = size => {
  if (PIXELRATIO >= 2 && PIXELRATIO < 3) {
    // iphone 5s and older Androids
    if (DEVICEHEIGHT <= 360) {
      return size * 0.95;
    }
    // iphone 5
    if (DEVICEWIDTH <= 667) {
      return size;
      // iphone 6-6s
    } else
    if (DEVICEWIDTH >= 667 && DEVICEWIDTH <= 735) {
      return size * 1.15;
    }
    // older phablets
    return size * 1.25;
  } else
  if (PIXELRATIO >= 3 && PIXELRATIO < 3.5) {
    // catch Android font scaling on small machines
    // where pixel ratio / font scale ratio => 3:3
    if (DEVICEHEIGHT <= 360) {
      return size;
    }
    // Catch other weird android width sizings
    if (DEVICEWIDTH <= 667) {
      return size * 1.15;
      // catch in-between size Androids and scale font up
      // a tad but not too much
    }
    if (DEVICEWIDTH >= 667 && DEVICEWIDTH <= 735) {
      return size * 1.2;
    }
    // catch larger devices
    // ie iphone 6s plus / 7 plus / mi note
    return size * 1.27;
  } else
  if (PIXELRATIO >= 3.5) {
    // catch Android font scaling on small machines
    // where pixel ratio / font scale ratio => 3:3
    if (DEVICEHEIGHT <= 360) {
      return size;
      // Catch other smaller android height sizings
    }
    if (DEVICEWIDTH <= 667) {
      return size * 1.2;
      // catch in-between size Androids and scale font up
      // a tad but not too much
    }
    if (DEVICEWIDTH >= 667 && DEVICEWIDTH <= 735) {
      return size * 1.25;
    }
    // catch larger phablet devices
    return size * 1.4;
  } else { return size; }
};

 export const normalizeSize = (size) => {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }

  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
};
**/
// based on iPhone 11's scale
const scale = DEVICE.width / 360;

export const normalize = (size: number) => Math.round(PixelRatio.roundToNearestPixel(size * scale));

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

export const normalizeLetterSpacing = (size: number) => Number((size * scale).toFixed(2));
