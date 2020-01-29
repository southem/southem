import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Animated,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import {
  platform,
} from '@southem/ui/tools';
import createIconFromName from './createIconFromName';

type WrappedElementProps = any;
export type IconProps<T = WrappedElementProps> = T & {
  name: string;
  type?: string;
  color?: string;
  size?: string;
};
export type IconElement<T = WrappedElementProps> = React.ReactElement<IconProps<T>>;

const mapPropToStyles = [
  'type',
  'name',
  'color',
  'size',
];

export class Icon<T> extends React.Component<IconProps<T>> {
  public static displayName = 'Icon';

  public static propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    size: PropTypes.number,
    color: PropTypes.string,
    component: PropTypes.func,
    underlayColor: PropTypes.string,
    reverse: PropTypes.bool,
    raised: PropTypes.bool,
    onPress: PropTypes.func,
    reverseColor: PropTypes.string,
  };

  public static defaultProps = {
    underlayColor: 'white',
    reverse: false,
    raised: false,
    size: 24,
    color: 'black',
    reverseColor: 'white',
  };

  public render(): React.ReactElement<IconProps> {
    return (<View/>);
  }
}
