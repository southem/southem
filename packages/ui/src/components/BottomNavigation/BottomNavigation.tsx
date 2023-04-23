/* eslint-disable */
import React, {Component, cloneElement} from 'react';
import {
  StyleProp,
  StyleSheet,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import {withThemes} from '@southem/theme';
import {
  Overwrite,
  ChildrenWithProps,
  StyledComponentProps,
} from '../../devsupport';
import {
  TabIndicator,
  TabIndicatorElement,
} from '../TabIndicator';
import {
  BottomNavigationTabProps,
  BottomNavigationTabElement,
} from './BottomNavigationTab';

type BottomNavigationStyledProps = Overwrite<StyledComponentProps, {
  appearance?: 'default' | 'noIndicator' | string;
}>;

// @ts-ignore
export interface BottomNavigationProps extends ViewProps, BottomNavigationStyledProps {
  children: ChildrenWithProps<BottomNavigationTabProps>;
  selectedIndex?: number;
  onSelect?: (index: number) => void;
  indicatorStyle?: StyleProp<ViewStyle>;
}

export type BottomNavigationElement = React.ReactElement<BottomNavigationProps>;

/**
 * A bar with tabs styled by Southem.
 * BottomNavigation should contain BottomNavigationTab components to provide a usable navigation component.
 *
 * @extends React.Component
 *
 * @property {ReactElement<TabProps> | ReactElement<TabProps>[]} children - Tabs to be rendered within the bar.
 *
 * @property {number} selectedIndex - Index of currently selected tab.
 *
 * @property {(number) => void} onSelect - Called when tab is pressed.
 *
 * @property {string} appearance - Appearance of the component.
 * Can be `default` or `noIndicator`.
 *
 * @property {StyleProp<ViewStyle>} indicatorStyle - Styles of the indicator.
 *
 * @property {ViewProps} ...ViewProps - Any props applied to View component.
 *
 * @overview-example BottomNavigationSimpleUsage
 * In basic examples, tabs are wrapped within `BottomNavigation`.
 *
 * @overview-example Using with React Navigation
 * BottomNavigation can also be [configured with React Navigation](guides/configure-navigation)
 * to provide a navigational component.
 *
 * ```
 * import React from 'react';
 * import { NavigationContainer } from '@react-navigation/native';
 * import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 * import { BottomNavigation, BottomNavigationTab, Layout, Text } from '@southem/ui';
 *
 * const { Navigator, Screen } = createBottomTabNavigator();
 *
 * const UsersScreen = () => (
 *   <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
 *     <Text category='h1'>USERS</Text>
 *   </Layout>
 * );
 *
 * const OrdersScreen = () => (
 *   <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
 *     <Text category='h1'>ORDERS</Text>
 *   </Layout>
 * );
 *
 * const BottomTabBar = ({ navigation, state }) => (
 *   <BottomNavigation
 *     selectedIndex={state.index}
 *     onSelect={index => navigation.navigate(state.routeNames[index])}>
 *     <BottomNavigationTab title='USERS'/>
 *     <BottomNavigationTab title='ORDERS'/>
 *   </BottomNavigation>
 * );
 *
 * const TabNavigator = () => (
 *   <Navigator tabBar={props => <BottomTabBar {...props} />}>
 *     <Screen name='Users' component={UsersScreen}/>
 *     <Screen name='Orders' component={OrdersScreen}/>
 *   </Navigator>
 * );
 *
 * export const AppNavigator = () => (
 *   <NavigationContainer>
 *     <TabNavigator/>
 *   </NavigationContainer>
 * );
 * ```
 *
 * @overview-example BottomNavigationAccessories
 * Tabs also may contain [icons](guides/icon-packages) to provide a better user interfaces.
 *
 * @overview-example BottomNavigationTabStyling
 * Tabs and it's inner views can be styled by passing them as function components.
 * ```
 * import { BottomNavigationTab, Text } from '@southem/ui';
 *
 * <BottomNavigationTab
 *   title={restProps => <Text {...restProps}>USERS</Text>}
 * />
 * ```
 * @overview-example BottomNavigationTabTheming
 * In most cases this is redundant, if [custom theme is configured](guides/branding).
 *
 * @example BottomNavigationWithoutIndicator
 * To remove indicator, `appearance` property may be used.
 */
// @ts-ignore
@withThemes('BottomNavigation')
export class BottomNavigation extends Component<BottomNavigationProps> {
  public static displayName = 'BottomNavigation';
  static defaultProps: Partial<BottomNavigationProps> = {
    selectedIndex: 0,
    appearance: 'default',
  };

  private onTabSelect = (index: number): void => {
    this.props.onSelect && this.props.onSelect(index);
  };

  private renderIndicatorElement = (positions: number): TabIndicatorElement => {
    const { indicatorStyle, selectedIndex } = this.props;

    return (
      <TabIndicator
        key={0}
        style={[styles.indicator, indicatorStyle]}
        selectedPosition={selectedIndex}
        positions={positions}
      />
    );
  };

  private renderTabElement = (element: BottomNavigationTabElement, index: number): BottomNavigationTabElement => {
    return React.cloneElement(element, {
      key: index,
      style: [styles.item, element.props.style],
      selected: index === this.props.selectedIndex,
      onSelect: () => this.onTabSelect(index),
    });
  };

  private renderTabElements = (source: ChildrenWithProps<BottomNavigationTabProps>): BottomNavigationTabElement[] => {
    return React.Children.map(source, this.renderTabElement);
  };

  private renderComponentChildren = (): React.ReactNodeArray => {
    const tabElements: BottomNavigationTabElement[] = this.renderTabElements(this.props.children);

    return [
      this.renderIndicatorElement(tabElements.length),
      ...tabElements,
    ];
  };

  public render(): React.ReactElement<ViewProps> {
    const { style, ...viewProps } = this.props;
    const [indicatorElement, ...tabElements] = this.renderComponentChildren();

    return (
      <View
        {...viewProps}
        style={style}>
        {indicatorElement}
        {tabElements}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  item: {
    flex: 1,
  },
  indicator: {
    position: 'absolute',
  },
});
