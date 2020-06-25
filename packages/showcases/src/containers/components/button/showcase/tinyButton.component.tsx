import React from 'react';
import {
  Button,
  ButtonProps,
} from '@southem/ui';

type ButtonElement = React.ReactElement<ButtonProps>;

export const TinyButton = (props?: ButtonProps): ButtonElement => {
  return (
    <Button
      size='tiny'
      {...props}>
      BUTTON
    </Button>
  );
};
