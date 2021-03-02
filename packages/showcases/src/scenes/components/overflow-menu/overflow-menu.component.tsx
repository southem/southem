import React from 'react';
import { OverflowMenuElement } from '@southem/ui';
import { OverflowMenuShowcase } from './overflow-menu-showcase.component';
import { ShowcaseContainer } from '../../../components';
import {
  overflowMenuSettings,
  overflowMenuShowcase,
  OverflowMenuPropsCustom,
} from './type';

// @ts-ignore
export const OverflowMenuScreen = ({ navigation }): React.ReactElement => {

  const renderItem = (props: OverflowMenuPropsCustom): OverflowMenuElement => (
    <OverflowMenuShowcase {...props} />
  );

  return (
    <ShowcaseContainer
      showcase={overflowMenuShowcase}
      settings={overflowMenuSettings}
      renderItem={renderItem}
      onBackPress={navigation.goBack}
    />
  );
};
