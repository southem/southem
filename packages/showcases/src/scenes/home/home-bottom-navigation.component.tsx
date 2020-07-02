import React from 'react';
import { BottomNavigationTab, Divider } from '@southem/ui';
import {
  BrandBottomNavigation,
  ColorPaletteIcon,
  LayoutIcon,
  SafeAreaLayout,
  StarOutlineIcon,
} from '../../components';

// @ts-ignore
export const HomeBottomNavigation = (props): React.ReactElement => {

  const onSelect = (index: number): void => {
    props.navigation.navigate(props.state.routeNames[index]);
  };

  return (
    <SafeAreaLayout insets='bottom'>
      <Divider/>
      <BrandBottomNavigation
        appearance='noIndicator'
        selectedIndex={props.state.index}
        onSelect={onSelect}>
        <BottomNavigationTab
          title='Layouts'
          // @ts-ignore
          icon={LayoutIcon}
        />
        <BottomNavigationTab
          title='Components'
          // @ts-ignore
          icon={StarOutlineIcon}
        />
        <BottomNavigationTab
          title='Themes'
          // @ts-ignore
          icon={ColorPaletteIcon}
        />
      </BrandBottomNavigation>
    </SafeAreaLayout>
  );
};
