import React from 'react';
import {
  Button,
  ButtonGroup,
  ButtonGroupProps,
} from '@southem/ui';
import { StarIconFill } from '../../../../assets/icons';
type ButtonGroupElement = React.ReactElement<ButtonGroupProps>;

export const SmallButtonGroup = (): ButtonGroupElement => {
  return (
    <ButtonGroup size='small'>
      <Button icon={StarIconFill}/>
      <Button icon={StarIconFill}/>
    </ButtonGroup>
  );
};
