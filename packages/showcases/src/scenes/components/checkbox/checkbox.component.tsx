import React from 'react';
import { CheckBoxElement, CheckBoxProps } from '@southem/ui';
import { CheckBoxShowcase } from './checkbox-showcase.component';
import { checkboxSettings, checkboxShowcase } from './type';
import { ShowcaseContainer } from '../../../components';

// @ts-ignore
export const CheckBoxScreen = ({ navigation }): React.ReactElement => {

  const renderItem = (props: CheckBoxProps): CheckBoxElement => (
    <CheckBoxShowcase {...props} />
  );

  return (
    <ShowcaseContainer
      showcase={checkboxShowcase}
      settings={checkboxSettings}
      renderItem={renderItem}
      onBackPress={navigation.goBack}
    />
  );
};
