import React from 'react';
import { TooltipProps } from '@southem/ui';
import { TooltipShowcase } from './tooltipShowcase.component';
import { StarIconFill } from '../../../../assets/icons';

type TooltipElement = React.ReactElement<TooltipProps>;

export const IconTooltip = (): TooltipElement => {
  return (
    <TooltipShowcase icon={StarIconFill}/>
  );
};
