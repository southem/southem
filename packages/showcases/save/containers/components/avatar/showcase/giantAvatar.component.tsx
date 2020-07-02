import React from 'react';
import {
  Avatar,
  AvatarProps,
} from '@southem/ui';
import { imageProfile1 } from '../../../../assets/images';

type AvatarElement = React.ReactElement<AvatarProps>;


export const GiantAvatar = (): AvatarElement => {

  return (
    <Avatar
      size='giant'
      source={imageProfile1.imageSource}
    />
  );
};
