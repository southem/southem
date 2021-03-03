/* eslint-disable */
import React from 'react';
import { StyleSheet, ViewProps } from 'react-native';
import { withThemes } from '@southem/theme';
import { blacklist } from '@southem/tools';
import { Icon } from '@southem/icons';

interface ComponentProps {
  checked?: boolean;
  status?: string;
  name?: string;
  indeterminate?: boolean;
  style?: {
    color?: string;
    backgroundColor?: string;
  };
}

export type CheckMarkElement = React.ReactElement<ComponentProps>;
export type CheckMarkProps = ViewProps & ComponentProps;

class CheckMarkComponent extends React.Component<CheckMarkProps> {
  static displayName = 'CheckMark';

  static defaultProps = {
    checked: false,
  };

  styleSheet = () => {
    const {style} = this.props;
    const color = style.color || style.backgroundColor;
    return [color, StyleSheet.flatten(blacklist(style, 'color', 'backgroundColor'))];
  };

  render(): React.ReactNode {
    const {name} = this.props;
    const [color, style] = this.styleSheet();

    return (
      <Icon {...{ style, color, name }}  />
    );
  }
}

const mapPropToStyles = [
  'name',
];

export const CheckMark = withThemes('CheckMark', mapPropToStyles)(CheckMarkComponent);
