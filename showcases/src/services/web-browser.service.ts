import { Linking } from 'react-native';
// @ts-ignore
import SafariView from 'react-native-safari-view';
import { platform } from '../utils/device';

export class WebBrowserService {

  static openBrowserAsync = (url: string): Promise<any> => {
    if (platform('ios')) {
      return WebBrowserService.openInAppUrl(url).catch(() => WebBrowserService.openUrl(url));
    } else {
      return WebBrowserService.openUrl(url);
    }
  };

  private static openInAppUrl = (url: string): Promise<any> => {
    return SafariView.isAvailable()
                     .then(() => SafariView.show({ url }));
  };

  private static openUrl = (url: string): Promise<any> => {
    return Linking.openURL(url);
  };
}
