import React from 'react';
import { Radio, RadioElement, RadioProps } from '@southem/ui';

export const RadioShowcase = (props: RadioProps): RadioElement => {

  // @ts-ignore
  const [checked, setChecked] = React.useState<boolean>(props.checked);

  return (
    <Radio
      {...props}
      checked={checked}
      onChange={setChecked}
    />
  );
};
