import React from 'react';
import {
  TopNavigation,
  TopNavigationProps,
  TopNavigationAction,
  TopNavigationActionProps,
} from '@southem/ui';
import {
  StarIconFill,
  ArrowIosBackFill,
  MoreVerticalIconFill,
} from '../../../../assets/icons';

type TopNavigationElement = React.ReactElement<TopNavigationProps>;
type TopNavigationActionElement = React.ReactElement<TopNavigationActionProps>;

export const CenterTopNavigation = (props?: TopNavigationProps): TopNavigationElement => {
  return (
    <TopNavigation
      {...props}
      alignment='center'
      title='Title'
      subtitle='Subtitle'
      leftControl={renderLeftControl()}
      rightControls={renderRightControls()}
    />
  );
};

const renderLeftControl = (): TopNavigationActionElement => {
  return (
    <TopNavigationAction
      // @ts-ignore
      icon={ArrowIosBackFill}
    />
  );
};

const renderRightControls = (): TopNavigationActionElement[] => {
  return ([
    <TopNavigationAction
      // @ts-ignore
      icon={StarIconFill}
    />,
    <TopNavigationAction
      // @ts-ignore
      icon={MoreVerticalIconFill}
    />,
  ]);
};
