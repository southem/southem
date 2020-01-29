import React from 'react';
import {
  View as RNView,
  ViewProps,
  ViewStyle,
} from 'react-native';
import { withThemes } from '@southem/theme';
import {connectAnimation} from '@southem/animation';

type ChildElement = React.ReactElement;
type ChildrenProp = ChildElement | ChildElement[];

export interface ViewElementProps extends ViewProps {
  children: ChildrenProp;
}

export type ViewElement = React.ReactElement<ViewElementProps>;

export const View = withThemes('View')(RNView);
