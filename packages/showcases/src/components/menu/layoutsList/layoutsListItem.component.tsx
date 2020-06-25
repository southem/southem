import React from 'react';
import {ImageProps, StyleProp, StyleSheet, ViewStyle} from 'react-native';
import { StyleType } from '@southem/theme';
import {
  ListItem,
  ListItemProps,
  Text,
} from '@southem/ui';
import { textStyle } from '../../common';
import { LayoutsListItemData } from './type';
import {
  ThemeContext,
  ThemeKey,
} from '../../../services/theme.service';

interface ComponentProps {
  data: LayoutsListItemData;
  style: StyleProp<ViewStyle>;
}

export type LayoutsListItemProps = ListItemProps & ComponentProps;

export class LayoutsListItem extends React.Component<LayoutsListItemProps> {

  private renderIconElement = (style: StyleType, theme: ThemeKey): React.ReactElement<ImageProps> => {
    const iconElement: React.ReactElement<ImageProps> = this.props.data.icon(style, theme);

    return React.cloneElement(iconElement, { style });
  };

  public render(): React.ReactNode {
    const { style, data, ...restProps } = this.props;

    return (
      // @ts-ignore
      <ThemeContext.Consumer>{({ currentTheme }) => (
        <ListItem
          {...restProps}
          style={[styles.container, style]}>
          {this.renderIconElement(styles.icon, currentTheme)}
          <Text
            style={styles.title}
            category='s2'>
            {data.title}
          </Text>
        </ListItem>
      )}</ThemeContext.Consumer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: 8,
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  icon: {
    width: 64,
    height: 64,
  },
  title: {
    marginTop: 8,
    ...textStyle.subtitle,
  },
});
