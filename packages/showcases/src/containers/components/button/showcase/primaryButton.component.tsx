import React from 'react';
import {
  Button,
  ButtonProps,
} from '@southem/ui';

type ButtonElement = React.ReactElement<ButtonProps>;

export const PrimaryButton = (props?: ButtonProps): ButtonElement => {
  return (
    <Button
      status='primary'
      {...props}>
      BUTTON
    </Button>
  );
};
