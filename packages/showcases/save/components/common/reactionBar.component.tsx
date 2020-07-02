import React from 'react';
import {
  View,
  ViewProps,
} from 'react-native';

type ChildElement = React.ReactElement<any>;

interface ComponentProps {
  children: ChildElement | ChildElement[];
}

export type ReactionBarProps = ViewProps & ComponentProps;

export class ReactionBar extends React.Component<ReactionBarProps> {

  public render(): React.ReactNode {
    const { style, ...restProps } = this.props;

    return (
      <View
        {...restProps}
        style={[{flexDirection: 'row'}, style]}
      />
    );
  }
}
