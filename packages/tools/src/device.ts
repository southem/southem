/* tslint:disable */
import {
  Dimensions,
  Platform,
  StatusBar,
  I18nManager,
  NativeModules,
  AccessibilityInfo,
  AccessibilityChangeEvent
} from 'react-native';
import { get } from 'lodash';

import {
  IPHONE_X_LONG_SIDE,
  IPHONE_XR_LONG_SIDE,
} from './const';

export enum orientations {
  PORTRAIT = 'portrait',
  LANDSCAPE = 'landscape'
}

let statusBarHeight: number;

// @ts-ignore
const { isPad, isTVOS } = Platform;
const { width: windowWidth, height: windowHeight } = Dimensions.get('window');
const {
  height: screenHeight,
  width: screenWidth
} = Dimensions.get('screen');
const xDimensionsMatch = (
  (windowHeight === IPHONE_X_LONG_SIDE) || (windowWidth === IPHONE_X_LONG_SIDE)
);

const xrDimensionsMatch = (
  (windowHeight === IPHONE_XR_LONG_SIDE) || (windowWidth === IPHONE_XR_LONG_SIDE)
);

function setStatusBarHeight() {
  const {StatusBarManager} = NativeModules;
  statusBarHeight = StatusBarManager?.HEIGHT || 0; // So there will be a value for any case
  // statusBarHeight = isIOS ? 20 : StatusBarManager.HEIGHT;
  // if (isIOS) {
  //   // override guesstimate height with the actual height from StatusBarManager
  //   StatusBarManager.getHeight((data: any) => (statusBarHeight = data.height));
  // }
}

function getOrientation(height: number, width: number) {
  return width < height ? orientations.PORTRAIT : orientations.LANDSCAPE;
}

function getAspectRatio() {
  return screenWidth < screenHeight ? screenHeight / screenWidth : screenWidth / screenHeight;
}

export const DeviceNative = {
  width: windowWidth,
  height: windowHeight
}

export function platform(os: string): boolean {
  return Platform.OS === os;
}

export function isAndroid(): boolean {
  return platform('android');
}

export function isAndroidRTL(): boolean {
  return platform('android') &&
    I18nManager.isRTL;
}

const isWeb: boolean = platform('web');

export function isTablet(): boolean {
  return 'isPad' in Platform && Platform.isPad || (
    getAspectRatio() < 1.6 && Math.max(screenWidth, screenHeight) >= 900
  );
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
