import { Renderer } from '../components';
import { TabletNavigator } from './tablet/navigator';
import { MobileNavigator } from './mobile/navigator';

export const HomeNavigator = (): React.ReactElement => Renderer({
  // @ts-ignore
  Mobile: MobileNavigator,
  // @ts-ignore
  Tablet: TabletNavigator,
});
