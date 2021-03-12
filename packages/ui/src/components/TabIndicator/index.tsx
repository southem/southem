/* eslint-disable */
import React, {Component} from 'react';
import {
  Animated,
  Easing,
  LayoutChangeEvent,
  StyleSheet,
  ViewProps,
} from 'react-native';
import {withThemes} from '@southem/theme';
import { RTLService } from '../../devsupport';

export interface TabIndicatorProps extends ViewProps {
  positions: number;
  selectedPosition?: number;
  animationDuration?: number;
}

export type TabIndicatorElement = React.ReactElement<TabIndicatorProps>;

// @ts-ignore
@withThemes('TabIndicator')
// @ts-ignore
export class TabIndicator extends Component<TabIndicatorProps> {
  public static displayName = 'TabIndicator';
  // @ts-ignore
  public static defaultProps: TabIndicatorProps = {
    selectedPosition: 0,
    animationDuration: 200,
  };

  private contentOffset: Animated.Value = new Animated.Value(0);
  private indicatorWidth: number;

  componentDidMount() {
    this.contentOffset.addListener(this.onContentOffsetAnimationStateChanged);
  }

  shouldComponentUpdate(nextProps: TabIndicatorProps): boolean {
    return this.props.selectedPosition !== nextProps.selectedPosition;
  }

  componentDidUpdate() {
    const {selectedPosition: index} = this.props;

    this.scrollToIndex({
      index,
      animated: true,
    });
  }

  componentWillUnmount() {
    this.contentOffset.removeAllListeners();
  }

  /**
   * scrolls indicator to passed index
   *
   * @param params (object) - {
   *  index: number,
   *  animated: boolean | undefined
   * }
   */
  scrollToIndex(params: { index: number, animated?: boolean }) {
    const {index, ...rest} = params;
    const offset: number = this.indicatorWidth * index;

    this.scrollToOffset({offset, ...rest});
  }

  /**
   * scrolls indicator to passed offset
   *
   * @param params (object) - {
   *  offset: number,
   *  animated: boolean | undefined
   * }
   */
  scrollToOffset(params: { offset: number, animated?: boolean }) {
    this.createOffsetAnimation(params).start(this.onContentOffsetAnimationStateEnd);
  }

  private onContentOffsetAnimationStateChanged = (state: { value: number }) => {
    // no-op
  };

  private onContentOffsetAnimationStateEnd = (result: { finished: boolean }) => {
    // no-op
  };

  private createOffsetAnimation = (params: { offset: number, animated?: boolean }): Animated.CompositeAnimation => {
    const animationDuration: number = params.animated ? this.props.animationDuration : 0;

    // @ts-ignore
    return Animated.timing(this.contentOffset, {
      toValue: RTLService.select(params.offset, -params.offset),
      duration: animationDuration,
      easing: Easing.linear,
      useNativeDriver: true, // Platform.OS !== 'web',
    });
  };

  private onLayout = (event: LayoutChangeEvent) => {
    this.indicatorWidth = event.nativeEvent.layout.width;

    this.scrollToOffset({
      offset: this.indicatorWidth * this.props.selectedPosition,
      animated: false,
    });
  };

  private getComponentStyle = (style) => {
    const {positions} = this.props;

    const widthPercent: number = 100 / positions;

    return {
      ...StyleSheet.flatten(style),
      width: `${widthPercent}%`,
      transform: [{translateX: this.contentOffset}],
    };
  };

  public render(): React.ReactElement<ViewProps> {
    const { style, ...viewProps } = this.props;
    const componentStyle = this.getComponentStyle(style);

    return (
      <Animated.View
        {...viewProps}
        style = {componentStyle}
        onLayout = {this.onLayout}
      />
    );
  }
}
