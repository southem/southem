import React from 'react';
import {
  Button,
  ButtonProps,
} from '@southem/ui';

type ButtonElement = React.ReactElement<ButtonProps>;

export const GiantButton = (props?: ButtonProps): ButtonElement => {
  return (
    <Button
      size='giant'
      {...props}>
      BUTTON
    </Button>
  );
};
