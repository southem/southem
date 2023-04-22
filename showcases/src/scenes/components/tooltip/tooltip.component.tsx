import React from 'react';
import { TooltipElement, TooltipProps } from '@southem/ui';
import { TooltipShowcase } from './tooltip-showcase.component';
import { tooltipSettings, tooltipShowcase } from './type';
import { ShowcaseContainer } from '../../../components';

// @ts-ignore
export const TooltipScreen = ({ navigation }): React.ReactElement => {

  const renderItem = (props: TooltipProps): TooltipElement => (
    <TooltipShowcase {...props} />
  );

  return (
    <ShowcaseContainer
      showcase={tooltipShowcase}
      settings={tooltipSettings}
      renderItem={renderItem}
      onBackPress={() => navigation.goBack()}
    />
  );
};

