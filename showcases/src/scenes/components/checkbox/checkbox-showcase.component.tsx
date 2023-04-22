import React from 'react';
import {
  CheckBox,
  CheckBoxElement,
  CheckBoxProps,
} from '@southem/ui';

export const CheckBoxShowcase = (props: CheckBoxProps): CheckBoxElement => {
  // @ts-ignore
  const [checked, setChecked] = React.useState<boolean>(props.checked);
  // @ts-ignore
  const [indeterminate, setIndeterminate] = React.useState<boolean>(props.indeterminate);

  const onChange = (isChecked: boolean, isIndeterminate: boolean) => {
    setChecked(isChecked);
    setIndeterminate(isIndeterminate);
  };

  return (
    <CheckBox
      {...props}
      checked={checked}
      indeterminate={indeterminate}
      onChange={onChange}>
      {props.children}
    </CheckBox>
  );
};
