import React from 'react';
import {
  Button,
  ButtonProps,
} from '@southem/ui';

type ButtonElement = React.ReactElement<ButtonProps>;

export const FilledButton = (props?: ButtonProps): ButtonElement => {
  return (
    <Button
      appearance='filled'
      {...props}>
      BUTTON
    </Button>
  );
};
