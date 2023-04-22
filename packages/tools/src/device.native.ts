/* tslint:disable */
import {
  Dimensions,
  Platform,
  StatusBar,
  I18nManager,
  PixelRatio,
} from 'react-native';
import { get } from 'lodash';
import DeviceInfo from 'react-native-device-info';

import {
  IPHONE_X_LONG_SIDE,
  IPHONE_XR_LONG_SIDE,
} from './const';

// @ts-ignore
const { OS, isPad, isTVOS } = Platform;
const { width, height } = Dimensions.get('window');
const xDimensionsMatch = (
  (height === IPHONE_X_LONG_SIDE) || (width === IPHONE_X_LONG_SIDE)
);

const xrDimensionsMatch = (
  (height === IPHONE_XR_LONG_SIDE) || (width === IPHONE_XR_LONG_SIDE)
);

export const DeviceNative = { width, height };
export const PIXELRATIO = PixelRatio.get();

export function platform(os: string): boolean {
  return OS === os;
}

export function isAndroid() {
  return platform('android');
}

export function isAndroidRTL() {
  return platform('android') &&
    I18nManager.isRTL;
}

export function isTablet(): boolean {
  return DeviceInfo.isTablet();
}

export function isIphoneX(): boolean {
  return (
    platform('ios') &&
    !isPad &&
    !isTVOS &&
    xDimensionsMatch
  );
}

export function isIphoneXR(): boolean {
  return (
    platform('ios') &&
    !isPad &&
    !isTVOS &&
    xrDimensionsMatch
  );
}
export function ifAndroid(androidStyle, regularStyle) {
  if (isAndroid()) {
    return androidStyle;
  }
  return regularStyle;
}

export function ifTablet(tableStyle, regularStyle) {
  if (isTablet()) {
    return tableStyle;
  }
  return regularStyle;
}

export function ifIphoneX(iphoneXStyle, regularStyle) {
  if (isIphoneX()) {
    return iphoneXStyle;
  }
  return regularStyle;
}

export function getStatusBarHeight(safe?: boolean): number {
  return Platform.select({
    ios: ifIphoneX(safe ? 44 : 30, 30),
    android: StatusBar.currentHeight,
  });
}

export function getBottomSpace() {
  return isIphoneX() ? 34 : 0;
}

/**
 * Receives settings for different devices
 * If the device is recognized, it returns only settings for that device
 * If not, it returns settings for 'default'
 *
 * @param {object} settings The settings provided for
 * @return {settings} Returns device specific (or 'default') settings
 */

interface Settings {
  iPhoneX?: Object
  iPhoneXR?: Object
  default?: Object,
}

export function select(settings: Settings) {
  if (settings.iPhoneX && isIphoneX) {
    return settings.iPhoneX;
  }

  if (settings.iPhoneXR && isIphoneXR) {
    return settings.iPhoneXR;
  }

  return get(settings, 'default');
}
