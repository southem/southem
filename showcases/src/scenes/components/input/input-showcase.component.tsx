import React from 'react';
import { Input, InputElement, InputProps } from '@southem/ui';

export const InputShowcase = (props?: InputProps): InputElement => {

  const [value, setValue] = React.useState<string>('');

  return (
    <Input
      {...props}
      value={value}
      onChangeText={setValue}
      placeholder='Place your Text'
    />
  );
};
