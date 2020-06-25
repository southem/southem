import React from 'react';
import {
  Button,
  ButtonGroup,
  ButtonGroupProps,
} from '@southem/ui';
import { StarIconFill } from '../../../../assets/icons';

type ButtonGroupElement = React.ReactElement<ButtonGroupProps>;

export const LargeButtonGroup = (): ButtonGroupElement => {
  return (
    <ButtonGroup size='large'>
      <Button icon={StarIconFill}/>
      <Button icon={StarIconFill}/>
    </ButtonGroup>
  );
};
