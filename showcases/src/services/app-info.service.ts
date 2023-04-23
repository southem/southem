import { Platform } from 'react-native';
import Constants from 'expo-constants';
import * as Application from 'expo-application';

export class AppInfoService {

  static getVersion = (): string => {
    // @ts-ignore
    return Application.nativeBuildVersion;
  };

  static getBuildNumber = (): string => {
    // @ts-ignore
    return Platform.select({
      // @ts-ignore
      ios: Constants.manifest.ios.buildNumber,
      // @ts-ignore
      android: Constants.manifest.android.versionCode,
    });
  };
}
