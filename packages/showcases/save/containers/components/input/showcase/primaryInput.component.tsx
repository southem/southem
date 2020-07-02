import React from 'react';
import {
  Input,
  InputProps,
} from '@southem/ui';

type InputElement = React.ReactElement<InputProps>;

export const PrimaryInput = (props?: InputProps): InputElement => {
  return (
    <Input
      placeholder='Place your text'
      status='primary'
      {...props}
    />
  );
};
