import React from 'react';
import { StyleType } from '../../../devsupport';
import { Background } from './Background';
import { Knob } from './Knob';

interface ToggleProps {
  style?: StyleType;
  checked: boolean;
  disabled: boolean;
}

export const Toggle = (props: ToggleProps) => {
  return (
    <Background {...props}>
      <Knob {...props}/>
    </Background>
  );
};
