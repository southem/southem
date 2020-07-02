import React from 'react';
import {
  Button,
  ButtonProps,
} from '@southem/ui';

type ButtonElement = React.ReactElement<ButtonProps>;

export const DisabledButton = (props?: ButtonProps): ButtonElement => {
  return (
    <Button
      disabled={true}
      {...props}>
      BUTTON
    </Button>
  );
};
