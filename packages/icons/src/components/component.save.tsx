import React, { Component } from 'react';
import { withThemes } from '@southem/theme';
import { platform } from '@southem/tools';
import createIcon from './createIcon';
import {
  IconProps,
  WrappedElementProps,
} from '../type';

export type IconElement<T = WrappedElementProps> = React.ReactElement<IconProps<T>>;

const mapPropToStyles = [
  'name',
  'type',
  'color',
  'size',
];

// @ts-ignore
@withThemes('Icon', mapPropToStyles)
export class Icon extends Component<IconProps> {
  public static displayName = 'Icon';
  public static defaultProps: Partial<IconProps> = {
    // type: 'material',
    size: 24,
  };

  public render() {
    // tslint:disable-next-line:prefer-const
    let {name, type, ...iconProps} = this.props;

    if (type === 'ionicon') {
      name = platform('android') ? `md-${name}` : `ios-${name}`;
    }

    // @ts-ignore
    const DefaultIcon = createIcon(type | 'material');
    return (<DefaultIcon {...{
      name,
      ...iconProps,
    }} />);
  }
}
