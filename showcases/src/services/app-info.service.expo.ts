import { Platform } from 'react-native';
import Constants from 'expo-constants';

export class AppInfoService {

  static getVersion = (): string => {
    // @ts-ignore
    return Constants.manifest.version;
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
