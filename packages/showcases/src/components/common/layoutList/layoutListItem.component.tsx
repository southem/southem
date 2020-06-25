import React from 'react';
import {StyleProp, StyleSheet, ViewStyle} from 'react-native';
import {
  ListItem,
  ListItemProps,
  Text,
} from '@southem/ui';
import { LayoutListItemData } from './type';
import { textStyle } from '../style';

interface ComponentProps {
  data: LayoutListItemData;
  style: StyleProp<ViewStyle>;
}

export type LayoutListItemProps = ComponentProps & ListItemProps;

export class LayoutListItem extends React.Component<LayoutListItemProps> {

  public render(): React.ReactNode {
    const { style, data, ...restProps } = this.props;

    return (
      <ListItem
        {...restProps}
        style={[styles.container, style]}>
        <Text
          style={textStyle.subtitle}
          category='s1'>
          {data.title}
        </Text>
        <Text
          style={textStyle.paragraph}
          appearance='hint'>
          {data.description}
        </Text>
      </ListItem>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 8,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  description: {
    marginTop: 4,
    ...textStyle.subtitle,
  },
});
