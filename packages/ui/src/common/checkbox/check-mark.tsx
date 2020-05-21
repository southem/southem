/* eslint-disable */
import React from 'react';
import { StyleSheet, ViewProps } from 'react-native';
import { withThemes } from '@southem/theme';
import { blacklist } from '../../tools';
import { Icon } from '../icon';

interface ComponentProps {
    checked?: boolean;
    status?: string;
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
        const { style } = this.props;
        const color = style.color || style.backgroundColor;
        return [color, StyleSheet.flatten(blacklist(style, 'color', 'backgroundColor'))];
    };

    render(): React.ReactNode {
        const { checked } = this.props;
        const [color, style] = this.styleSheet();

        return (
            <Icon {...{
                containerStyle: style,
                color,
                type: 'material-community',
                name: checked ? 'checkbox-intermediate' : 'checkbox-blank-outline',
            }}  />
        );
    }
}

export const CheckMark = withThemes('CheckMark')(CheckMarkComponent);
