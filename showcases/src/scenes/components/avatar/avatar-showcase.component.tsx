import React from 'react';
import { Avatar, AvatarElement, AvatarProps } from '@southem/ui';

export const AvatarShowcase = (props?: AvatarProps): AvatarElement => (
  <Avatar
    {...props}
    source={require('../../../assets/images/icon-app.png')}
  />
);
