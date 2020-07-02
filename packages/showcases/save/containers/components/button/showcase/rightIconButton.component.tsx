import React from 'react';
import {
  Button,
  ButtonProps,
} from '@southem/ui';
import { StarIconFill } from '../../../../assets/icons';

type ButtonElement = React.ReactElement<ButtonProps>;

export const RightIconButton = (props?: ButtonProps): ButtonElement => {

  return (
    <Button
      icon={StarIconFill}
      {...props}
      // @ts-ignore
      style={[props.style, { flexDirection: 'row-reverse' }]}>
      BUTTON
    </Button>
  );
};
