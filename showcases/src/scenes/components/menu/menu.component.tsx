import React from 'react';
import { MenuElement } from '@southem/ui';
import { MenuShowcase } from './menu-showcase.component';
import { ShowcaseContainer } from '../../../components';
import { menuSettings, menuShowcase, MenuShowcaseProps } from './type';

// @ts-ignore
export const MenuScreen = ({ navigation }): React.ReactElement => {

  const renderItem = (props: MenuShowcaseProps): MenuElement => (
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
