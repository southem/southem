import React from 'react';
import { platform } from '../../tools';
import createIcon from './createIcon';

type WrappedElementProps = any;
export type IconProps<T = WrappedElementProps> = T & {
  name: string;
  type?: string;
  color?: string;
  size?: string;
};
export type IconElement<T = WrappedElementProps> = React.ReactElement<IconProps<T>>;

function Icon(props): React.ReactElement<IconProps> {
  let {
    name,
    // tslint:disable-next-line:prefer-const
    type,
    // tslint:disable-next-line:prefer-const
    ...attributes
  } = props;

  if (type === 'ionicon') {
    name = platform('android') ? `md-${name}` : `ios-${name}`;
  }

  // @ts-ignore
  const DefaultIcon = createIcon(type | 'material');
  return (<DefaultIcon {...{
    name,
    ...attributes,
  }} />);
}

Icon.displayName = 'Icon';
Icon.defaultProps = {
  type: 'material',
  size: 24,
  color: 'black',
};

export {
  Icon,
  createIcon,
};
