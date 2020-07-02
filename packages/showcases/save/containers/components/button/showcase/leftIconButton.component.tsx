import React from 'react';
import {
  Button,
  ButtonProps,
} from '@southem/ui';
import { StarIconFill } from '../../../../assets/icons';

type ButtonElement = React.ReactElement<ButtonProps>;

export const LeftIconButton = (props?: ButtonProps): ButtonElement => {
  return (
    <Button
      icon={StarIconFill}
      {...props}>
      BUTTON
    </Button>
  );
};
