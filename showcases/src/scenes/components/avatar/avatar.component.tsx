import React from 'react';
import { AvatarShowcase } from './avatar-showcase.component';
import { avatarShowcase } from './type';
import { ShowcaseContainer } from '../../../components';

// @ts-ignore
export const AvatarScreen = ({ navigation }): React.ReactElement => (
  <ShowcaseContainer
    showcase={avatarShowcase}
    renderItem={AvatarShowcase}
    onBackPress={navigation.goBack}
  />
);
