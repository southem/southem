import React from 'react';
import { Radio } from '@southem/ui';

export const RadioSimpleUsageShowcase = () => {

  const [checked, setChecked] = React.useState(false);

  const onCheckedChange = (isChecked: boolean) => {
    setChecked(isChecked);
  };

  return (
    <Radio
      title={`Checked: ${checked}`}
      checked={checked}
      onChange={onCheckedChange}
    />
  );
};
