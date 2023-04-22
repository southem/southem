import React from 'react';
import { Button, ButtonElement, ButtonProps } from '@southem/ui';

export const DrawerShowcase = (props?: ButtonProps): ButtonElement => {
  return (
    <Button
      {...props}>
      TOGGLE DRAWER
    </Button>
  );
};
