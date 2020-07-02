import React from 'react';
import {
  ListRenderItemInfo,
  ViewStyle,
} from 'react-native';
import {
  List,
  ListProps,
} from '@southem/ui';
import { Comment } from '../../../core/model';
import {
  CommentList1Item,
  CommentList1ItemProps,
} from './commentList1Item.component';

// @ts-ignore (override `renderItem` prop)
interface ComponentProps extends ListProps {
  data: Comment[];
  onLikePress: (index: number) => void;
  onMorePress: (index: number) => void;
  onReplyMorePress: (index: number) => void;
  renderItem?: (info: ListItemElementInfo) => ListItemElement;
}

export type CommentsList1Props = ComponentProps;

type ListItemElement = React.ReactElement<CommentList1ItemProps>;
type ListItemElementInfo = ListRenderItemInfo<Comment>;

export class CommentsList1 extends React.Component<CommentsList1Props> {

  private onItemMorePress = (index: number) => {
    this.props.onMorePress(index);
  };

  private onItemLikePress = (index: number) => {
    this.props.onLikePress(index);
  };

  private onItemReplyMorePress = (index: number) => {
    this.props.onReplyMorePress(index);
  };

  private isLastItem = (index: number): boolean => {
    const { data } = this.props;

    return data.length - 1 === index;
  };

  private renderListItemElement = (comment: Comment): ListItemElement => {

    return (
      <CommentList1Item
        style={styles.item}
        comment={comment}
        onLikePress={this.onItemLikePress}
        onMorePress={this.onItemMorePress}
        onReplyMorePress={this.onItemReplyMorePress}
      />
    );
  };

  private renderItem = (info: ListItemElementInfo): ListItemElement => {
    const { item, index } = info;

    const listItemElement: ListItemElement = this.renderListItemElement(item);

    const additionalStyle: ViewStyle | null = this.isLastItem(index) ? null : styles.itemBorder;

    return React.cloneElement(listItemElement, {
      style: [listItemElement.props.style, additionalStyle],
    });
  };

  public render(): React.ReactNode {
    const { contentContainerStyle, ...restProps } = this.props;

    return (
      <List
        {...restProps}
        renderItem={this.renderItem}
      />
    );
  }
}

const styles = {
  item: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    // backgroundColor: '',
  },
  itemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '',
  },
};

