import React from 'react';
import { SpinnerShowcase } from './spinner-showcase.component';
import { spinnerSettings, spinnerShowcase } from './type';
import { ShowcaseContainer } from '../../../components';

// @ts-ignore
export const SpinnerScreen = ({ navigation }): React.ReactElement => (
  <ShowcaseContainer
    showcase={spinnerShowcase}
    settings={spinnerSettings}
    renderItem={SpinnerShowcase}
    onBackPress={navigation.goBack}
  />
);
