import React from 'react';
import { Input } from '@southem/ui';

export const InputSimpleUsageShowcase = () => {

  const [value, setValue] = React.useState('');

  return (
    <Input
      placeholder='Place your Text'
      value={value}
      onChangeText={setValue}
    />
  );
};
