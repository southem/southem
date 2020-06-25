import React from 'react';
import {
  Button,
  ButtonProps,
} from '@southem/ui';

type ButtonElement = React.ReactElement<ButtonProps>;

export const SmallButton = (props?: ButtonProps): ButtonElement => {
  return (
    <Button
      size='small'
      {...props}>
      BUTTON
    </Button>
  );
};
