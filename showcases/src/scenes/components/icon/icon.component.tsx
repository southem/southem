import React from 'react';
import { IconElement, IconProps } from '@southem/ui';
import { IconShowcase } from './icon-showcase.component';
import { iconSettings, iconShowcase } from './type';
import { ShowcaseContainer } from '../../../components';

// @ts-ignore
export const IconScreen = ({ navigation }): React.ReactElement => {

  const renderItem = (props: IconProps): IconElement => (
    <IconShowcase {...props} />
  );

  return (
    <ShowcaseContainer
      showcase={iconShowcase}
      settings={iconSettings}
      renderItem={renderItem}
      onBackPress={navigation.goBack}
    />
  );
};

