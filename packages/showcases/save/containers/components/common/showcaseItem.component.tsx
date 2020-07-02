import React from 'react';
import {
  View,
  ViewProps,
  StyleSheet,
} from 'react-native';
import { Text } from '@southem/ui';
import { textStyle } from '../../../components/common';

interface ComponentProps {
  title: string;
  children: ChildrenProp;
}

type ChildrenProp = React.ReactElement<any>;

export type ShowcaseItemProps = ViewProps & ComponentProps;

export class ShowcaseItem extends React.Component<ShowcaseItemProps> {

  public render(): React.ReactNode {
    const { style, title, children, ...restProps } = this.props;

    return (
      <View
        style={[styles.container, style]}
        {...restProps}>
        <Text
          style={styles.titleLabel}
          appearance='hint'
          category='s2'>
          {title}
        </Text>
        {children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleLabel: {
    minWidth: 128,
    ...textStyle.subtitle,
  },
});
