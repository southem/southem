import React from 'react';
import {
  Button,
  ButtonGroup,
  ButtonGroupProps,
} from '@southem/ui';
import { StarIconFill } from '../../../../assets/icons';

type ButtonGroupElement = React.ReactElement<ButtonGroupProps>;

export const TinyButtonGroup = (): ButtonGroupElement => {
  return (
    <ButtonGroup size='tiny'>
      <Button icon={StarIconFill}/>
      <Button icon={StarIconFill}/>
    </ButtonGroup>
  );
};
