import React from 'react';
import {
  Button,
  ButtonProps,
} from '@southem/ui';

type ButtonElement = React.ReactElement<ButtonProps>;

export const InfoButton = (props?: ButtonProps): ButtonElement => {
  return (
    <Button
      status='info'
      {...props}>
      BUTTON
    </Button>
  );
};
