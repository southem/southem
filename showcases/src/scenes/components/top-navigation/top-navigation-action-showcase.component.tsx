import React from 'react';
import {
  TopNavigationAction,
  TopNavigationActionElement,
  TopNavigationActionProps,
} from '@southem/ui';
import {
  ArrowIosBackIcon,
  MenuIcon,
  StarIcon,
} from '../../../components';

type TopNavigationActionShowcaseProps = Omit<TopNavigationActionProps, 'icon'>;

export const BackAction = (props: TopNavigationActionShowcaseProps): TopNavigationActionElement => (
  <TopNavigationAction
    {...props}
    // @ts-ignore
    icon={ArrowIosBackIcon}
  />
);

export const RightAction = (props: TopNavigationActionShowcaseProps): TopNavigationActionElement => (
  <>
    <TopNavigationAction
      {...props}
      // @ts-ignore
      icon={StarIcon}
    />
    <TopNavigationAction
      {...props}
      // @ts-ignore
      icon={MenuIcon}
    />
  </>
);
