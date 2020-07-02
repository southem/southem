import React from 'react';
import { ListRenderItemInfo, StyleSheet } from 'react-native';
import {
  List,
  ListProps,
} from '@southem/ui';
import {
  LayoutListItem,
  LayoutListItemProps,
} from './layoutListItem.component';
import { LayoutListItemData } from './type';

// @ts-ignore (override `renderItem` prop)
interface ComponentProps extends ListProps {
  data: LayoutListItemData[];
  renderItem?: (info: ListItemElementInfo) => void;
  onItemPress: (index: number) => void;
}

export type LayoutListProps = ComponentProps;

type ListItemElement = React.ReactElement<LayoutListItemProps>;
type ListItemElementInfo = ListRenderItemInfo<LayoutListItemData>;

export class LayoutList extends React.Component<LayoutListProps> {

  private onItemPress = (index: number) => {
    this.props.onItemPress(index);
  };

  private renderItem = (info: ListItemElementInfo): ListItemElement => {
    return (
      <LayoutListItem
        style={styles.item}
        data={info.item}
        onPress={this.onItemPress}
      />
    );
  };

  public render(): React.ReactNode {
    const { style, ...restProps } = this.props;

    return (
      <List
        style={[{}, style]}
        {...restProps}
        renderItem={this.renderItem}
      />
    );
  }
}

const styles = StyleSheet.create({
  item: {
    marginVertical: 8,
    marginHorizontal: 8,
  },
});
