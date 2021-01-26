import React from 'react';
import {
  TopNavigationAction,
  TopNavigationActionElement,
  TopNavigationActionProps,
} from '@southem/ui';
import { ArrowIosBackIcon, MoreVerticalIcon, StarIcon } from '../../../components';

type TopNavigationActionShowcaseProps = Omit<TopNavigationActionProps, 'icon'>;

export const BackAction = (props: TopNavigationActionShowcaseProps): TopNavigationActionElement => (
  <TopNavigationAction
    {...props}
    // @ts-ignore
    icon={ArrowIosBackIcon}
  />
);

export const MenuAction = (props: TopNavigationActionShowcaseProps): TopNavigationActionElement => (
  <TopNavigationAction
    {...props}
    // @ts-ignore
    icon={MoreVerticalIcon}
  />
);

export const StarAction = (props: TopNavigationActionShowcaseProps): TopNavigationActionElement => (
  <TopNavigationAction
    {...props}
    // @ts-ignore
    icon={StarIcon}
  />
);
