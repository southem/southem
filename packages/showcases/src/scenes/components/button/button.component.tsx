import React from 'react';
import { ButtonShowcase } from './button-showcase';
import { buttonSettings, buttonShowcase } from './type';
import { ShowcaseContainer } from '../../../components';

// @ts-ignore
export const ButtonScreen = ({ navigation }): React.ReactElement => (
  <ShowcaseContainer
    showcase={buttonShowcase}
    settings={buttonSettings}
    renderItem={ButtonShowcase}
    onBackPress={navigation.goBack}>
  </ShowcaseContainer>
);
