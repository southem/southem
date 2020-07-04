import React, { PureComponent } from 'react';
import { withThemes } from '@southem/theme';
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

const mapPropToStyles = [
  'name',
  'type',
  'color',
  'size',
];

// @ts-ignore
@withThemes('Icon', mapPropToStyles)
class Icon extends PureComponent<IconProps> {
  public static displayName = 'Icon';
  public static defaultProps = {
    type: 'material',
    size: 24,
  };

  public render() {
    // tslint:disable-next-line:prefer-const
    let {name, type, ...attributes} = this.props;

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
}

export {
  Icon,
  createIcon,
};
