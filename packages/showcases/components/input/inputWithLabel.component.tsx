import React from 'react';
import { Input } from '@southem/ui';

export const InputWithLabelShowcase = () => {

  const [value, setValue] = React.useState('');

  return (
    <Input
      label='Email'
      placeholder='john.doe@example.com'
      value={value}
      onChangeText={setValue}
    />
  );
};
