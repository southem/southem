import React from 'react';
import {
  View,
  FlexStyle,
  ViewProps,
  StyleSheet,
} from 'react-native';
import { Text } from '@southem/ui';
import { textStyle } from '../../../components/common';

interface ComponentProps {
  title: string;
  children: ChildrenProp;
}

type ChildrenProp = ShowcaseSectionItem | ShowcaseSectionItem[];
type ShowcaseSectionItem = React.ReactElement<any>;

export type ShowcaseSectionProps = ViewProps & ComponentProps;

export class ShowcaseSection extends React.Component<ShowcaseSectionProps> {

  private renderItem = (item: ShowcaseSectionItem): ShowcaseSectionItem => {
    const additionalStyle: FlexStyle = styles.item;

    return React.cloneElement(item, {
      style: [item.props.style, additionalStyle],
    });
  };

  private renderItems = (source: ChildrenProp): ShowcaseSectionItem[] => {
    return React.Children.map(source, this.renderItem);
  };

  public render(): React.ReactNode {
    const { style, title, children, ...restProps } = this.props;

    return (
      <View
        style={[styles.container, style]}
        {...restProps}>
        <Text
          style={styles.titleLabel}
          category='h6'>
          {title}
        </Text>
        {this.renderItems(children)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  titleLabel: {
    marginVertical: 8,
    ...textStyle.headline,
  },
  item: {
    marginVertical: 8,
  },
});
