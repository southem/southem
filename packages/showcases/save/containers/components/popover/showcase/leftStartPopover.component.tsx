import React from 'react';
import { PopoverProps } from '@southem/ui';
import { PopoverShowcase } from './popoverShowcase.component';

type PopoverElement = React.ReactElement<PopoverProps>;

export const LeftStartPopover = (): PopoverElement => {
  return (
    <PopoverShowcase placement='left start'/>
  );
};
