import React from 'react';
import {
  Button,
  ButtonProps,
} from '@southem/ui';

type ButtonElement = React.ReactElement<ButtonProps>;

export const MediumButton = (props?: ButtonProps): ButtonElement => {
  return (
    <Button
      size='medium'
      {...props}>
      BUTTON
    </Button>
  );
};
