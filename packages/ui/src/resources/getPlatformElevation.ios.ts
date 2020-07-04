import { normalize } from '../tools';
import { black, transparent } from './colors';

interface IShadowOffset {
  height: number;
  width: number;
}

interface IGetPlatformElevation {
  shadowOpacity?: number;
  shadowRadius?: number;
  shadowOffset?: IShadowOffset;
  shadowColor?: string;
  zIndex?: number;
}

export const getPlatformElevation = (
  elevation: number,
  shadowOpacity: number = 0.3,
  shadowRadius: number,
  shadowOffset: IShadowOffset = { height: 8, width: -2 }): IGetPlatformElevation => {
    if (elevation === 0) {
        return {
            shadowColor: transparent,
            zIndex: 0,
        };
    }

    return {
        shadowColor: black,
        shadowOpacity,
        shadowRadius,
        shadowOffset,
        zIndex: normalize(elevation),
    };
};
