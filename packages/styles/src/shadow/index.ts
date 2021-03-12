import { Animated, Platform } from 'react-native';
import { normalize } from '@southem/tools';
import { transparent } from '../colors';
import palette from '../palette';

interface IShadowOffset {
  height: number;
  width: number;
}

interface IGetPlatformElevation {
  elevation?: number;
  shadowOpacity: number;
  shadowRadius: number;
  shadowOffset: IShadowOffset;
  shadowColor: string;
  zIndex?: number;
}

export default function shadow(elevation: number | Animated.Value = 0): IGetPlatformElevation | Object {
  if (elevation instanceof Animated.Value) {
    const inputRange = [0, 1, 2, 3, 8, 24];

    return {
      shadowColor: palette.default.dark,
      shadowOffset: {
        width: new Animated.Value(0),
        height: elevation.interpolate({
          inputRange,
          outputRange: [0, 0.5, 0.75, 2, 7, 23],
        }),
      },
      shadowOpacity: new Animated.Value(0.24),
      shadowRadius: elevation.interpolate({
        inputRange,
        outputRange: [0, 0.75, 1.5, 3, 8, 24],
      }),
    };
  } else {
    let height, width, radius, opacity = 0.24, color = palette.default.dark;
    switch (elevation) {
      case 0:
        width = 0;
        height = 0;
        radius = 0;
        opacity = 0;
        color = transparent;
        break;
      case 1:
        width = 1;
        height = 1;
        radius = 8;
        opacity = 0.15;
        break;
      case 2:
        width = 2;
        height = 2;
        radius = 10;
        opacity = 0.2;
        break;
      case 3:
        width = 3;
        height = 3;
        radius = 12;
        opacity = 0.25;
        break;
      case 4:
        width = 4;
        height = 4;
        radius = 8;
        opacity = 0.3;
        break;
      case 5:
        width = 5;
        height = 5;
        radius = 8;
        opacity = 0.35;
        break;
      default:
        height = elevation - 1;
        radius = elevation;
        opacity = 0.35;
    }

    // tslint:disable-next-line:no-shadowed-variable
    function ifIos(elevation): IGetPlatformElevation {
      return {
        shadowColor: color,
        shadowOffset: {
          width,
          height,
        },
        shadowOpacity: opacity,
        shadowRadius: radius,
        zIndex: normalize(elevation),
      };
    }

    // tslint:disable-next-line:no-shadowed-variable
    function ifAndroid(elevation): IGetPlatformElevation {
      return {
        elevation: normalize(elevation),
        shadowColor: color,
        shadowOffset: {
          width,
          height,
        },
        shadowOpacity: opacity,
        shadowRadius: radius,
      };
    }

    return Platform.select({
      ios: ifIos(elevation),
      android: ifAndroid(elevation),
    });
  }
}
