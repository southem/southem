import React from 'react';
import { ImageProps, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { StyleType } from '@southem/theme';
import {
  ListItem,
  ListItemProps,
  Text,
} from '@southem/ui';
import { textStyle } from '../../common';
import {
  ThemeContext,
  ThemeKey,
} from '../../../services/theme.service';
import { ComponentsListItemData } from './type';

interface ComponentProps {
  data: ComponentsListItemData;
  style: StyleProp<ViewStyle>;
}

export type ComponentsListItemProps = ListItemProps & ComponentProps;

export class ComponentsListItem extends React.Component<ComponentsListItemProps> {

  private renderShowcaseElement = (style: StyleType, theme: ThemeKey): React.ReactElement<ImageProps> => {
    const showcaseElement: React.ReactElement<ImageProps> = this.props.data.icon(style, theme);

    return React.cloneElement(showcaseElement, {
      style: [style, showcaseElement.props.style],
    });
  };

  public render(): React.ReactNode {
    const { style, data, ...restProps } = this.props;

    return (
      // @ts-ignore
      <ThemeContext.Consumer>{({ currentTheme }) => (
        <ListItem
          {...restProps}
          style={[styles.container, style]}>
          {this.renderShowcaseElement(styles.icon, currentTheme)}
          <Text
            style={textStyle.subtitle}
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
    paddingHorizontal: 16,
    paddingVertical: 0,
  },
  icon: {
    width: 80,
    height: 80,
  },
});
