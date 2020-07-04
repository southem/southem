import React from 'react';
import { ButtonGroupShowcase } from './button-group-showcase.component';
import { buttonGroupSettings, buttonGroupShowcase } from './type';
import { ShowcaseContainer } from '../../../components';

// @ts-ignore
export const ButtonGroupScreen = ({ navigation }): React.ReactElement => (
  <ShowcaseContainer
    showcase={buttonGroupShowcase}
    settings={buttonGroupSettings}
    renderItem={ButtonGroupShowcase}
    onBackPress={navigation.goBack}
  />
);
