import React from 'react';
import { MenuElement, MenuProps } from '@southem/ui';
import { MenuShowcase } from './menu-showcase.component';
import { menuSettings, menuShowcase } from './type';
import { ShowcaseContainer } from '../../../components';

// @ts-ignore
export const MenuScreen = ({ navigation }): React.ReactElement => {

  const renderItem = (props: MenuProps): MenuElement => (
    <MenuShowcase {...props} />
  );

  return (
    <ShowcaseContainer
      showcase={menuShowcase}
      settings={menuSettings}
      renderItem={renderItem}
      onBackPress={navigation.goBack}
    />
  );
};
