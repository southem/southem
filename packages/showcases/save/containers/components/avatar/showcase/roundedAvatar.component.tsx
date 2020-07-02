import React from 'react';
import {
  Avatar,
  AvatarProps,
} from '@southem/ui';
import { imageProfile1 } from '../../../../assets/images';

type AvatarElement = React.ReactElement<AvatarProps>;

export const RoundedAvatar = (): AvatarElement => {
  return (
    <Avatar
      shape='rounded'
      source={imageProfile1.imageSource}
    />
  );
};
