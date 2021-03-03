import React from 'react';

export type IconType =
  | 'antdesign'
  | 'entypo'
  | 'evilicon'
  | 'feather'
  | 'font-awesome'
  | 'font-awesome-5'
  | 'fontisto'
  | 'foundation'
  | 'ionicon'
  | 'material'
  | 'material-community'
  | 'octicon'
  | 'simple-line-icon'
  | 'zocial'
  | 'moon'
  | 'fontello'
  | string;

export type WrappedElementProps = any;
export type IconProps<T = WrappedElementProps> = T & {
  name: string;
  type?: IconType;
  color?: string;
  size?: string;
};

export type IconElement<T = WrappedElementProps> = React.ReactElement<IconProps<T>>;
export type IconComponent = React.ComponentType<IconProps>;
