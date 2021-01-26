import React from 'react';
import { Radio, RadioGroup, RadioGroupElement, RadioGroupProps } from '@southem/ui';

export const RadioGroupShowcase = (props: RadioGroupProps): RadioGroupElement => {

  const [selectedIndex, setSelectedIndex] = React.useState(props.selectedIndex);

  return (
    <RadioGroup
      selectedIndex={selectedIndex}
      onChange={setSelectedIndex}>
      <Radio title='Option 1'/>
      <Radio title='Option 2'/>
      <Radio title='Option 3'/>
    </RadioGroup>
  );
};
