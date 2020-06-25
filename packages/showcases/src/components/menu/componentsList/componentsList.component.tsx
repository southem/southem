import React from 'react';
import {
  ListRenderItemInfo,
  Dimensions,
} from 'react-native';
import {
  List,
  ListProps,
} from '@southem/ui';
import {
  ComponentsListItem,
  ComponentsListItemProps,
} from './componentsListItem.component';
import { ComponentsListItemData } from './type';

const { width } = Dimensions.get('window');
const itemWidth: number = width / 2 - 32;

// @ts-ignore (override `renderItem` prop)
interface ComponentProps extends ListProps {
  data: ComponentsListItemData[];
  onItemPress: (index: number) => void;
  renderItem?: (info: ListRenderItemInfo<ComponentsListItemData>) => React.ReactElement<any>;
}

export type ComponentsListProps = ComponentProps;

type ListItemElement = React.ReactElement<ComponentsListItemProps>;
type ListItemElementInfo = ListRenderItemInfo<ComponentsListItemData>;

export class ComponentsList extends React.Component<ComponentsListProps> {

  private onItemPress = (index: number) => {
    this.props.onItemPress(index);
  };

  private renderItem = (info: ListItemElementInfo): ListItemElement => {
    return (
      <ComponentsListItem
        style={styles.item}
        activeOpacity={0.75}
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
        columnWrapperStyle={styles.columnWrapperStyle}
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
  columnWrapperStyle: {
    justifyContent: 'space-between',
  },
};
