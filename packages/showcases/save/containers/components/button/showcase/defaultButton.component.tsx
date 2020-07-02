import React from 'react';
import {
  Button,
  ButtonProps,
} from '@southem/ui';

type ButtonElement = React.ReactElement<ButtonProps>;

export const DefaultButton = (props?: ButtonProps): ButtonElement => {
  return (
    <Button {...props}>
      BUTTON
    </Button>
  );
};
