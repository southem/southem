import React from 'react';
import { TooltipProps } from '@southem/ui';
import { TooltipShowcase } from './tooltipShowcase.component';

type TooltipElement = React.ReactElement<TooltipProps>;

export const LeftStartTooltip = (): TooltipElement => {
  return (
    <TooltipShowcase placement='left start'/>
  );
};
