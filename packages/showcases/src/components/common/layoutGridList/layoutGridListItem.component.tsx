import React from 'react';
import {
  Image,
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {
  ListItem,
  ListItemProps,
  Text,
} from '@southem/ui';
import { LayoutGridListItemData } from './type';
import { textStyle } from '../style';

interface ComponentProps {
  data: LayoutGridListItemData;
  style: StyleProp<ViewStyle>;
}

export type LayoutGridListItemProps = ListItemProps & ComponentProps;

export class LayoutGridListItem extends React.Component<LayoutGridListItemProps> {

  public render(): React.ReactNode {
    const { style, data, ...restProps } = this.props;

    return (
      <ListItem
        style={[styles.container, style]}
        {...restProps}>
        <View style={styles.detailsContainer}>
          <Text
            style={textStyle.subtitle}
            category='s1'>
            {data.title}
          </Text>
          <Text
            appearance='hint'
            style={textStyle.paragraph}
            category='p2'>
            {data.description}
          </Text>
        </View>
        <Image
          style={styles.image}
          source={data.image}
        />
      </ListItem>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    borderRadius: 12,
    paddingHorizontal: 0,
    paddingVertical: 0,
    overflow: 'hidden',
  },
  detailsContainer: {
    alignSelf: 'flex-start',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  image: {
    flex: 1,
    height: 276,
    resizeMode: 'contain',
  },
});
