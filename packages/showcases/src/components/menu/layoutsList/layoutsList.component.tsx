import React from 'react';
import {
  Dimensions,
  ListRenderItemInfo,
} from 'react-native';
import {
  withThemes,
} from '@southem/theme';
import {
  List,
  ListProps,
} from '@southem/ui';
import {
  LayoutsListItem,
  LayoutsListItemProps,
} from './layoutsListItem.component';
import { LayoutsListItemData } from './type';

const { width } = Dimensions.get('window');
const itemWidth: number = width / 2 - 32;

// @ts-ignore (override `renderItem` prop)
interface ComponentProps extends ListProps {
  data: LayoutsListItemData[];
  onItemPress: (index: number) => void;
  renderItem?: (info: ListItemElementInfo) => ListItemElement;
}

export type LayoutsListProps = ComponentProps;

type ListItemElement = React.ReactElement<LayoutsListItemProps>;
type ListItemElementInfo = ListRenderItemInfo<LayoutsListItemData>;

class LayoutsListComponent extends React.Component<LayoutsListProps> {

  private onItemPress = (index: number) => {
    this.props.onItemPress(index);
  };

  private renderItem = (info: ListItemElementInfo): ListItemElement => {
    return (
      <LayoutsListItem
        style={styles.item}
        data={info.item}
        onPress={this.onItemPress}
      />
    );
  };

  public render(): React.ReactNode {
    const { ...restProps } = this.props;

    return (
      <List
        numColumns={2}
        renderItem={this.renderItem}
        {...restProps}
      />
    );
  }
}

const styles = {
  item: {
    flex: 1,
    height: 160,
    maxWidth: itemWidth,
    marginHorizontal: 8,
    marginVertical: 8,
  },
};

export const LayoutsList = withThemes('LayoutsList')(LayoutsListComponent);
