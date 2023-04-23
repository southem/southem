import React from 'react';
import { View, ViewProps } from 'react-native';
import {withThemes, useTheme} from '@southem/theme';
import {
  Overwrite,
  RenderProp,
  renderNode,
  StyleType,
  StyledComponentProps,
} from '../../devsupport';
import {
  Menu,
  MenuProps,
} from '../Menu';

type DrawerStyledProps = Overwrite<StyledComponentProps, {
  appearance?: 'default' | 'noDivider' | string;
}>;

// @ts-ignore
export interface DrawerProps extends MenuProps, DrawerStyledProps {
  header?: RenderProp<ViewProps>;
  footer?: RenderProp<ViewProps>;
  headerStyle?: RenderProp<StyleType>;
  footerStyle?: RenderProp<StyleType>;
}

export type DrawerElement = React.ReactElement<DrawerProps>;

const mapPropToStyles = [
  'headerStyle',
  'footerStyle',
];

/**
 * Navigation panel which slides from the side of the screen.
 * Drawer should contain DrawerItem or DrawerGroup components to provide a useful component.
 *
 * @extends React.Component
 *
 * @property {ReactElement<DrawerItemProps> | ReactElement<DrawerItemProps>[]} children -
 * items to be rendered within drawer.
 *
 * @property {IndexPath} selectedIndex - Index of selected item.
 * IndexPath `row: number, section?: number` - position of element in sectioned list.
 * Drawer becomes sectioned when DrawerGroup is rendered within children.
 * Updating this property is not required if marking items selected is not needed.
 *
 * @property {(IndexPath | IndexPath[]) => void} onSelect - Called when item is pressed.
 * Called with `row: number` for non-grouped items.
 * Called with `row: number, section: number` for items rendered within group,
 * where row - index of item in group, section - index of group in list.
 *
 * @property {string} appearance - Appearance of the component.
 * Can be `default` or `noDivider`.
 *
 * @property {ListProps} ...ListProps - Any props applied to List component,
 * excluding `renderItem` and `data`.
 *
 * @overview-example DrawerSimpleUsage
 *
 * @overview-example DrawerIndexType
 * Drawer works with special index object - IndexPath.
 * For non-grouped items in drawer, there is only a `row` property.
 * Otherwise, `row` is an index of option within the group, section - index of group in drawer.
 * ```
 * interface IndexPath {
 *   row: number;
 *   section?: number;
 * }
 * ```
 *
 * @overview-example Using with React Navigation
 * Drawer can also be [configured with React Navigation](guides/configure-navigation)
 * to provide a navigational component.
 *
 * ```
 * import React from 'react';
 * import { NavigationContainer } from '@react-navigation/native';
 * import { createDrawerNavigator } from '@react-navigation/drawer';
 * import { Drawer, DrawerItem, Layout, Text, IndexPath } from '@southem/ui';
 *
 * const { Navigator, Screen } = createDrawerNavigator();
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
 * const DrawerContent = ({ navigation, state }) => (
 *   <Drawer
 *     selectedIndex={new IndexPath(state.index)}
 *     onSelect={index => navigation.navigate(state.routeNames[index.row])}>
 *     <DrawerItem title='Users' />
 *     <DrawerItem title='Orders' />
 *   </Drawer>
 * );
 *
 * export const DrawerNavigator = () => (
 *   <Navigator drawerContent={props => <DrawerContent {...props}/>}>
 *     <Screen name='Users' component={UsersScreen}/>
 *     <Screen name='Orders' component={OrdersScreen}/>
 *   </Navigator>
 * );
 *
 * export const AppNavigator = () => (
 *   <NavigationContainer>
 *     <DrawerNavigator/>
 *   </NavigationContainer>
 * );
 * ```
 *
 * @overview-example DrawerNoMarkers
 * Pressing of drawer items can be handled without marking items.
 *
 * @overview-example DrawerAccessories
 * Drawer may be configured with header and footer,
 * and items may contain inner views configured with `accessoryLeft` and `accessoryRight` properties.
 * Within Southem, item accessories are expected to be images or [svg icons](guides/icon-packages).
 *
 * @overview-example DrawerGroups
 * And be grouped within `DrawerGroup` component.
 *
 * @overview-example DrawerStyling
 * Drawer and it's inner views can be styled by passing them as function components.
 * ```
 * import { DrawerItem, Text } from '@southem/ui';
 *
 * <DrawerItem
 *   title={props => <Text {...props}>USERS</Text>}>
 * </DrawerItem>
 * ```
 *
 * @overview-example DrawerTheming
 * In most cases this is redundant, if [custom theme is configured](guides/branding).
 */
// @ts-ignore
@withThemes('Drawer', mapPropToStyles)
export class Drawer extends React.Component<DrawerProps> {
  public render(): React.ReactFragment {
    const { style, header, footer, headerStyle, footerStyle, ...menuProps } = this.props;

    // @ts-ignore
    return (
      <React.Fragment>
        {renderNode(View, header, { style: headerStyle })}
        <Menu
          style={[style]}
          showsVerticalScrollIndicator={false}
          bounces={false}
          {...menuProps}
        />
        {renderNode(View, footer, { style: footerStyle })}
      </React.Fragment>
    );
  }
}

