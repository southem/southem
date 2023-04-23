/* tslint:disable */
import {
  Dimensions,
  Platform,
  StatusBar,
  I18nManager,
  PixelRatio,
} from 'react-native';
import { get } from 'lodash';
import Constants from 'expo-constants';

// @ts-ignore
const { OS, isPad, isTVOS } = Platform;
const { width, height } = Dimensions.get('window');

export const DEVICE = { width, height };
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

export const isPortrait = (): boolean => {
  const dim = Dimensions.get('screen');
  return dim.height >= dim.width;
};

export const isLandscape = (): boolean => {
  const dim = Dimensions.get('screen');
  return dim.width >= dim.height;
};

export function isTablet(): boolean {
  if (platform('ios')) {
    // @ts-ignore
    return (Constants.platform.ios && Constants.platform.ios.userInterfaceIdiom === 'tablet');
  }

  return false;
}

export function isIphoneX(): boolean {
  // @ts-ignore
  return (
    platform('ios') &&
    !isPad &&
    !isTVOS &&
    !isTablet()
  );
}

export function isIphoneXR(): boolean {
  // @ts-ignore
  return (
    platform('ios') &&
    !isPad &&
    !isTVOS &&
    !isTablet()
  );
}
export function ifAndroid(androidProps: any, regularProps: any) {
  if (isAndroid()) {
    return androidProps;
  }
  return regularProps;
}

export function ifTablet(tabletProps: any, regularProps: any) {
  if (isTablet()) {
    return tabletProps;
  }
  return regularProps;
}

export function ifIphoneX(iphoneXProps: any, regularProps: any) {
  if (isIphoneX()) {
    return iphoneXProps;
  }
  return regularProps;
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
  if (settings.iPhoneX && isIphoneX()) {
    return settings.iPhoneX;
  }

  if (settings.iPhoneXR && isIphoneXR()) {
    return settings.iPhoneXR;
  }

  return get(settings, 'default');
}
