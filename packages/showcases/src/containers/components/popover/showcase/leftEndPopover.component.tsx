import React from 'react';
import { PopoverProps } from '@southem/ui';
import { PopoverShowcase } from './popoverShowcase.component';

type PopoverElement = React.ReactElement<PopoverProps>;

export const LeftEndPopover = (): PopoverElement => {
  return (
    <PopoverShowcase placement='left end'/>
  );
};
