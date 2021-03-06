import React from 'react';
import {
  Animated,
  ImageProps,
  StyleSheet,
  ViewProps,
  ViewStyle,
} from 'react-native';
import { Icon } from '@southem/icons';
import { ChildrenWithProps } from '../../devsupport';
import {
  Frame,
  MeasureElement,
  MeasuringElement,
  Point,
} from '../Measure';
import {
  MenuItem,
  MenuItemElement,
  MenuItemProps,
} from './menu-item';

export interface MenuGroupProps extends MenuItemProps {
  children?: ChildrenWithProps<MenuItemProps>;
}

export type MenuGroupElement = React.ReactElement<MenuGroupProps>;

interface State {
  submenuHeight: number;
}

const CHEVRON_DEG_COLLAPSED: number = -180;
const CHEVRON_DEG_EXPANDED: number = 0;
const CHEVRON_ANIM_DURATION: number = 200;
const POSITION_OUTSCREEN: Point = Point.outscreen();

/**
 * A group of items displayed in Menu.
 * Groups should be rendered within Menu and contain MenuItem components to provide a useful navigation component.
 *
 * @extends React.Component
 *
 * @property {ReactElement<MenuItemProps> | ReactElement<MenuItemProps>[]} children -
 * Items to be rendered within group.
 *
 * @property {ReactText | (TextProps) => ReactElement} title - String, number or a function component
 * to render within the group.
 * If it is a function, expected to return a Text.
 *
 * @property {(ImageProps) => ReactElement} accessoryLeft - Function component
 * to render to start of the *title*.
 * Expected to return an Image.
 *
 * @property {(ImageProps) => ReactElement} accessoryRight - Function component
 * to render to end of the *title*.
 * Expected to return an Image.
 *
 * @property {TouchableOpacityProps} ...TouchableOpacityProps - Any props applied to TouchableOpacity component.
 *
 * @overview-example MenuGroups
 */
export class MenuGroup extends React.Component<MenuGroupProps, State> {

  public state: State = {
    submenuHeight: 1,
  };
  private expandAnimation: Animated.Value = new Animated.Value(0);

  private get hasSubmenu(): boolean {
    return React.Children.count(this.props.children) > 0;
  }

  private get shouldMeasureSubmenu(): boolean {
    return this.state.submenuHeight === 1;
  }

  private get expandAnimationValue(): number {
    // @ts-ignore - private api, but let's us avoid creating animation listeners.
    // `this.expandAnimation.addListener`
    return this.expandAnimation._value;
  }

  private get expandToRotateInterpolation(): Animated.AnimatedInterpolation {
    return this.expandAnimation.interpolate({
      inputRange: [-this.state.submenuHeight, CHEVRON_DEG_EXPANDED],
      outputRange: [`${CHEVRON_DEG_COLLAPSED}deg`, `${CHEVRON_DEG_EXPANDED}deg`],
    });
  }

  private get submenuStyle(): ViewStyle {
    // @ts-ignore - issue of `@types/react-native` package
    return this.shouldMeasureSubmenu ? styles.outscreen : { height: this.expandAnimation };
  }

  private get defaultItemProps(): MenuItemProps {
    return { appearance: 'grouped' };
  }

  private onPress = (): void => {
    if (this.hasSubmenu) {
      const expandValue: number = this.expandAnimationValue > 0 ? 0 : this.state.submenuHeight;
      this.createExpandAnimation(expandValue).start();
    }
  };

  private onSubmenuMeasure = (frame: Frame): void => {
    this.setState({ submenuHeight: frame.size.height });
  };

  private createExpandAnimation = (toValue: number): Animated.CompositeAnimation => {
    return Animated.timing(this.expandAnimation, {
      toValue: toValue,
      duration: CHEVRON_ANIM_DURATION,
      useNativeDriver: false,
    });
  };

  private renderAccessoryIfNeeded = (styleProps: Partial<ImageProps>): React.ReactElement => {
    if (!this.hasSubmenu) {
      return null;
    }

    const style = StyleSheet.flatten(styleProps.style);

    return (
      <Animated.View style={{ transform: [{ rotate: this.expandToRotateInterpolation }] }}>
        <Icon type={'southem'} name={'chevron-down-single'} {...styleProps} color={style.tintColor}/>
      </Animated.View>
    );
  };

  private renderItemsWithDefaultProps = (): React.ReactNode => {
    return React.Children.map(this.props.children, (item: MenuItemElement): MenuItemElement => {
      return React.cloneElement(item, this.defaultItemProps, null);
    });
  };

  private renderGroupedItems = (style): React.ReactElement<ViewProps> => {
    return (
      <Animated.View style={[styles.submenu, this.submenuStyle, style]}>
        {this.renderItemsWithDefaultProps()}
      </Animated.View>
    );
  };

  private renderMeasuringGroupedItems = (style): MeasuringElement => {
    return (
      <MeasureElement onMeasure={this.onSubmenuMeasure}>
        {this.renderGroupedItems(style)}
      </MeasureElement>
    );
  };

  private renderGroupedItemsIfNeeded = (style): React.ReactNode => {
    if (!this.hasSubmenu) {
      return null;
    }

    if (this.shouldMeasureSubmenu) {
      return this.renderMeasuringGroupedItems(style);
    }

    return this.renderGroupedItems(style);
  };

  public render(): React.ReactNode {
    const { children, ...itemProps } = this.props;

    return (
      <React.Fragment>
        <MenuItem
          accessoryRight={this.renderAccessoryIfNeeded}
          {...itemProps}
          onPress={this.onPress}
        />
        {this.renderGroupedItemsIfNeeded({})}
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  outscreen: {
    position: 'absolute',
    left: POSITION_OUTSCREEN.x,
    top: POSITION_OUTSCREEN.y,
  },
  submenu: {
    overflow: 'hidden',
  },
});
