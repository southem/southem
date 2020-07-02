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
 * BottomNavigation component is designed to be a Bottom Tab Bar.
 * Can be used for navigation.
 *
 * @extends React.Component
 *
 * @property {number} selectedIndex - Determines index of the selected tab.
 *
 * @property {React.ReactElement<TabProps> | React.ReactElement<TabProps>[]} children -
 * Determines tabs of the Bottom Navigation.
 *
 * @property {StyleProp<ViewStyle>} indicatorStyle - Determines styles of the indicator.
 *
 * @property {(index: number) => void} onSelect - Triggered on select value.
 *
 * @property ViewProps
 *
 * @property StyledComponentProps
 *
 * @example Simple usage example
 *
 * ```
 * import React from 'react';
 * import { BottomNavigation, BottomNavigationTab } from '@ui/common';
 *
 * export class BottomNavigationShowcase extends React.Component {
 *
 *   public state = {
 *     selectedIndex: 0,
 *   };
 *
 *   private onTabSelect = (selectedIndex: number) => {
 *     this.setState({ selectedIndex });
 *   };
 *
 *   public render(): React.ReactNode {
 *     return (
 *       <BottomNavigation
 *          selectedIndex={this.state.selectedIndex}
 *          onSelect={this.onTabSelect}
 *          <BottomNavigationTab title='Tab 1/>
 *          <BottomNavigationTab title='Tab 2/>
 *          <BottomNavigationTab title='Tab 3/>
 *       </BottomNavigation>
 *     );
 *   }
 * }
 * ```
 *
 * @example Inline styling example
 *
 * ```
 * import React, { ReactElement } from 'react';
 * import { BottomNavigation, BottomNavigationProps, BottomNavigationTab } from '@ui/common';
 *
 * export const BottomNavigationShowcase = (props?: BottomNavigationProps): ReactElement<BottomNavigationProps> => {
 *   return (
 *     <BottomNavigation
 *        style={styles.bottomBar}
 *        indicatorStyle={styles.indicator}>
 *        <BottomNavigationTab title='Tab 1/>
 *        <BottomNavigationTab title='Tab 2/>
 *        <BottomNavigationTab title='Tab 3/>
 *     </BottomNavigation>
 *   );
 * };
 * ```
 *
 * @example With React Navigation API and usage example
 *
 * ```
 * import React, { ReactElement } from 'react';
 * import {
 *   BottomNavigation,
 *   BottomNavigationTab,
 *   BottomNavigationProps,
 * } from '@ui/common';
 * import {
 *   createBottomTabNavigator,
 *   NavigationContainer,
 *   NavigationContainerProps,
 *   NavigationRoute,
 * } from 'react-navigation';
 *
 * type CommonNavigationProps = NavigationProps & NavigationContainerProps;
 *
 * export const TabNavigatorScreen: NavigationContainer = createBottomTabNavigator({
 *   ...screens,
 * }, {
 *   initialRouteName: 'Screen1',
 *   tabBarComponent: BottomNavigationShowcase,
 * });
 *
 * export const BottomNavigationShowcase = (props?: BottomNavigationProps): ReactElement<BottomNavigationProps> {
 *
 *  const onTabSelect = (selectedIndex: number) => {
 *    const { [index]: selectedRoute } = props.navigation.state.routes;
 *
 *    navigation.navigate(selectedRoute.routeName);
 *  };
 *
 *  return (
 *    <BottomNavigation
 *      selectedIndex={props.navigation.state.index}
 *      onSelect={onTabSelect}>
 *      <BottomNavigationTab title='Tab 1'/>
 *      <BottomNavigationTab title='Tab 2'/>
 *      <BottomNavigationTab title='Tab 3'/>
 *    </BottomNavigation>
 *   );
 * }
 * ```
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
