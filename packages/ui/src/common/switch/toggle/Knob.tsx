/* eslint-disable */
import React, {PureComponent} from 'react';
import { View, ViewProps } from 'react-native';
import { withThemes } from '@southem/theme';
import { StyleType } from '../../../devsupport';
import { Icon } from '../../icon';

interface KnobProps {
  // size: ControlSize | number;
  style?: StyleType;
  disabled: boolean;
  checked: boolean;
}

// @ts-ignore
@withThemes('Knob')
export class Knob extends PureComponent<KnobProps> {
  public render() {
    const { style, checked, ...viewProps } = this.props;

    return (
      <View
        style={style}
        {...viewProps}>
        {checked ? (
          <Icon name='check' size='small' />
        ) : (
          <Icon name='x' size='small' />
        )}
      </View>
    );
  }
}


