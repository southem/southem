import React from 'react';
import { ToggleElement, ToggleProps } from '@southem/ui';
import { ToggleShowcase } from './toggle-showcase.component';
import { toggleSettings, toggleShowcase } from './type';
import { ShowcaseContainer } from '../../../components';

// @ts-ignore
export const ToggleScreen = ({ navigation }): React.ReactElement => {

  const renderItem = (props: ToggleProps): ToggleElement => (
    <ToggleShowcase {...props} />
  );

  return (
    <ShowcaseContainer
      showcase={toggleShowcase}
      settings={toggleSettings}
      renderItem={renderItem}
      onBackPress={navigation.goBack}
    />
  );
};
