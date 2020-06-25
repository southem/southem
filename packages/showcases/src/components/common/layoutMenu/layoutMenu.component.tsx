import React from 'react';
import {StyleSheet} from 'react-native';
import {
  Tab,
  TabProps,
  TabView,
  TabViewProps,
} from '@southem/ui';
import {
  GridIconOutline,
  ListIconFill,
} from '../../../assets/icons';
import { LayoutGridList } from '../layoutGridList';
import { LayoutList } from '../layoutList';
import { LayoutMenuItemData } from './type';

// @ts-ignore (override `children` prop)
interface ComponentProps extends TabViewProps {
  data: LayoutMenuItemData[];
  onItemPress: (index: number) => void;
  children?: ChildrenProp;
}

export type LayoutMenuProps = ComponentProps;

type ChildElement = React.ReactElement<TabProps>;
type ChildrenProp = ChildElement | ChildElement[];

interface TabLoadingMap {
  [key: string]: boolean;
}

export class LayoutMenu extends React.Component<LayoutMenuProps> {

  private tabLoadingMap: TabLoadingMap;

  constructor(props: LayoutMenuProps) {
    super(props);
    this.tabLoadingMap = this.createTabLoadingMap(props.selectedIndex);
  }

  public componentWillUpdate(nextProps: LayoutMenuProps) {
    const nextLoadingMap: TabLoadingMap = this.createTabLoadingMap(nextProps.selectedIndex);
    this.tabLoadingMap = { ...this.tabLoadingMap, ...nextLoadingMap };
  }

  private shouldLoadTabContentElement = (index: number): boolean => {
    return this.tabLoadingMap[`${index}`];
  };

  private createTabLoadingMap = (selectedIndex: number): TabLoadingMap => {
    return { [`${selectedIndex}`]: true };
  };

  private onItemPress = (index: number) => {
    this.props.onItemPress(index);
  };

  public render(): React.ReactNode {
    const { data, ...restProps } = this.props;

    return (
      <TabView
        shouldLoadComponent={this.shouldLoadTabContentElement}
        {...restProps}>
        <Tab icon={GridIconOutline}>
          <LayoutGridList
            contentContainerStyle={styles.listContentContainer}
            data={data}
            onItemPress={this.onItemPress}
          />
        </Tab>
        <Tab icon={ListIconFill}>
          <LayoutList
            contentContainerStyle={styles.listContentContainer}
            data={data}
            onItemPress={this.onItemPress}
          />
        </Tab>
      </TabView>
    );
  }
}

const styles = StyleSheet.create({
  listContentContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
});
