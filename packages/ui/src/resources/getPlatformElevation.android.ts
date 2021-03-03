/* eslint-disable */
import { normalize } from '@southem/tools';
import { black } from './colors';

interface IShadowOffset {
  height: number;
  width: number;
}

interface IGetPlatformElevation {
  elevation: number;
  shadowOpacity: number;
  shadowRadius: number;
  shadowOffset: IShadowOffset;
  shadowColor: string;
}

export const getPlatformElevation = (
  elevation: number,
  shadowOpacity: number = 0.3,
  shadowRadius: number,
  shadowOffset: IShadowOffset = { height: 8, width: -2 }): IGetPlatformElevation => ({
    elevation: normalize(elevation),
    shadowColor: black,
    shadowOpacity,
    shadowRadius,
    shadowOffset,
});
