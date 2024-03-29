import React from 'react';
import { TextShowcase } from './text-showcase.component';
import { textSettings, textShowcase } from './type';
import { ShowcaseContainer } from '../../../components';

// @ts-ignore
export const TextScreen = ({ navigation }): React.ReactElement => (
  <ShowcaseContainer
    showcase={textShowcase}
    settings={textSettings}
    renderItem={TextShowcase}
    onBackPress={navigation.goBack}
  />
);
