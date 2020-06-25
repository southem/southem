import React from 'react';
import {
  Avatar,
  AvatarProps,
} from '@southem/ui';
import { imageProfile1 } from '../../../../assets/images';

type AvatarElement = React.ReactElement<AvatarProps>;

export const MediumAvatar = (): AvatarElement => {
  return (
    <Avatar
      size='medium'
      source={imageProfile1.imageSource}
    />
  );
};
