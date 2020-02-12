import React from 'react';
import {
  StatusBar,
  StyleProp,
  StyleSheet,
  FlatList,
  FlatListProps,
  ListRenderItemInfo,
} from 'react-native';
import {
  throttle,
  isEmpty,
} from 'lodash';
import {
  platform,
  renderNode,
} from '@southem/ui';
import {
  StyleType,
  withThemes,
} from '@southem/theme';
import {
  ListItemProps,
  ListItem,
} from './list-item';

// this is basically needed to avoid generics in required props
type ItemType = any;
type ListItemElement = React.ReactElement;
type RenderItemProp = (info: ListRenderItemInfo<ItemType>, style: StyleType) => ListItemElement;

interface ComponentProps {
  renderItem: RenderItemProp;
  data: Array<ItemType>;
  loading?: boolean;
  hasFeaturedItem?: boolean;
  scrollDriver?: object;
  onLoadMore?: () => void;
  onRefresh?: () => void;
  renderHeader?: () => void;
  renderFooter?: () => void;
  renderSectionHeader?: () => void;
  renderFeaturedItem?: () => void;
  itemProps?: StyleProp<ListItemProps>;
  itemStyle?: StyleProp<StyleType>;
}

export type ListProps = FlatListProps<ItemType> & ComponentProps;
export type ListElement = React.ReactElement<ListProps>;

export interface BaseScrollParams {
  animated?: boolean;
}

export interface ViewScrollParams {
  viewOffset?: number;
  viewPosition?: number;
}

export interface ScrollToIndexParams extends BaseScrollParams, ViewScrollParams {
  index: number;
}

export interface ScrollToOffsetParams extends BaseScrollParams {
  offset: number;
}

interface StateList {
  status: any;
}

const Status = {
  LOADING: 'loading',
  LOADING_NEXT: 'loadingNext',
  REFRESHING: 'refreshing',
  IDLE: 'idle',
};


const renderItem = (component: ListRenderItemInfo<ItemType>, defaultProps, style: StyleType): ListItemElement =>
  renderNode(ListItem, component, {
    ...defaultProps,
    style: StyleSheet.flatten([style, defaultProps && defaultProps.style]),
  });

/**
 * `List` component is a performant interface for rendering simple, flat lists. Extends `FlatList`. Renders list of
 * `ListItem` components or custom content.
 *
 * @extends React.Component
 *
 * @property {(info: ListRenderItemInfo<ItemT>, style: StyleType) => ReactElement} renderItem - Takes an
 * item from data and renders it into the list.
 *
 * @property {FlatListProps} ...FlatListProps - Any props applied to FlatList component.
 *
 * @overview-example ListSimpleUsage
 *
 * @overview-example ListCompositeItem
 *
 * @example ListInlineStyling
 * ```
 */
class ListComponent extends React.Component<ListProps, StateList> {
  // @ts-ignore
  state: StateList;
  static displayName: string = 'List';

  private listRef: React.RefObject<FlatList<ItemType>> = React.createRef();

  public scrollToEnd = (params?: BaseScrollParams): void => {
    this.listRef.current.scrollToEnd(params);
  };

  public scrollToIndex = (params: ScrollToIndexParams): void => {
    this.listRef.current.scrollToIndex(params);
  };

  public scrollToOffset(params: ScrollToOffsetParams): void {
    this.listRef.current.scrollToOffset(params);
  }

  constructor(props) {
    super(props);

    this.state = {
      // @ts-ignore
      status: props.loading ? Status.LOADING : Status.IDLE,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loading !== this.props.loading) {
      this.setLoading(nextProps.loading);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps.data !== this.props.data) ||
      (nextProps.loading !== this.props.loading) ||
      (nextState.status !== this.state.status);
  }

  componentWillUnmount() {
    if (platform('ios') && (this.state.status !== Status.IDLE)) {
      // Reset the global network indicator state
      StatusBar.setNetworkActivityIndicatorVisible(false);
    }
  }

  private onRefresh = () => {
    this.setState({
      status: Status.REFRESHING,
    });

    if (this.props.onRefresh) {
      this.props.onRefresh();
    }
  };

  private setLoading = (loading) => {
    if (loading) {
      if (this.state.status !== Status.IDLE) {
        // We are already in a loading status
        return;
      }

      this.setState({
        status: Status.LOADING,
      });
    } else {
      this.setState({
        status: Status.IDLE,
      });
    }
  };

  // eslint-disable-next-line consistent-return
  private createOnLoadMore = () => {
    const { onLoadMore, data } = this.props;
    const { status } = this.state;
    if (onLoadMore) {
      return throttle(() => {
        if (!isEmpty(data) && status === Status.IDLE) {
          onLoadMore();
        }
      }, 2000, { leading: true });
    }
  };

  private autoHideHeader = ({ nativeEvent: { layout: { height } } }) => {
    // this.scrollListView({ y: height, animated: false });
  };

  private keyExtractor = (item: ItemType, index: number): string => {
    return index.toString();
  };

  private renderItem = (info: ListRenderItemInfo<ItemType>): ListItemElement => {
    const { itemStyle, itemProps } = this.props;
    // @ts-ignore
    const itemElement: React.ReactElement<ListItemProps> = this.props.renderItem(info, itemStyle);

    // @ts-ignore
    return renderItem(itemElement, {...itemProps, index: info.index },
      StyleSheet.flatten([
        itemStyle,
      ]),
    );
  };

  public render(): React.ReactElement<FlatListProps<ItemType>> {
    const { style, ...attributes } = this.props;

    return (
      <FlatList
        keyExtractor={this.keyExtractor}
        {...attributes}
        ref={this.listRef}
        style={style}
        renderItem={this.renderItem}
      />
    );
  }
}

export const List = withThemes('List')(ListComponent);
