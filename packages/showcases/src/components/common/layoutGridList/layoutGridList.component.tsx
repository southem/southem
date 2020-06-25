import React from 'react';
import {
  Dimensions,
  ListRenderItemInfo,
  StyleSheet,
} from 'react-native';
import {
  List,
  ListProps,
} from '@southem/ui';
import {
  LayoutGridListItem,
  LayoutGridListItemProps,
} from './layoutGridListItem.component';
import { LayoutGridListItemData } from './type';

const { width } = Dimensions.get('window');
const itemWidth: number = width / 2 - 32;

// @ts-ignore (override `renderItem` prop)
interface ComponentProps extends ListProps {
  data: LayoutGridListItemData[];
  onItemPress: (index: number) => void;
  renderItem?: (info: ListItemElementInfo) => ListItemElement;
}

export type LayoutGridListProps = ComponentProps;

type ListItemElement = React.ReactElement<LayoutGridListItemProps>;
type ListItemElementInfo = ListRenderItemInfo<LayoutGridListItemData>;

export class LayoutGridList extends React.Component<LayoutGridListProps> {

  private onItemPress = (index: number) => {
    this.props.onItemPress(index);
  };

  private renderItem = (info: ListItemElementInfo): ListItemElement => {
    return (
      <LayoutGridListItem
        style={styles.item}
        data={info.item}
        onPress={this.onItemPress}
      />
    );
  };

  public render(): React.ReactNode {
    return (
      <List
        numColumns={2}
        renderItem={this.renderItem}
        {...this.props}
      />
    );
  }
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    maxWidth: itemWidth,
    marginVertical: 8,
    marginHorizontal: 8,
  },
});
