import React from 'react';
import {
  ImageSourcePropType,
  View,
  ViewProps,
  StyleSheet,
} from 'react-native';
import { Text, Avatar } from '@southem/ui';
import { textStyle } from './style';

interface ComponentProps {
  photo: ImageSourcePropType;
  name: string;
  date: string;
}

export type ActivitiAuthoringProps = ViewProps & ComponentProps;

export class ActivityAuthoring extends React.Component<ActivitiAuthoringProps> {

  public render(): React.ReactNode {
    const { style, photo, name, date, ...restProps } = this.props;

    return (
      <View
        {...restProps}
        style={[styles.container, style]}>
        <Avatar
          style={styles.authorPhoto}
          source={photo}
        />
        <View style={styles.authorInfoContainer}>
          <Text style={styles.authorNameLabel}>{name}</Text>
          <Text
            style={styles.dateLabel}
            appearance='hint'
            category='p2'>
            {date}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  authorInfoContainer: {
    marginLeft: 16,
  },
  authorPhoto: {
    margin: 0,
  },
  authorNameLabel: textStyle.subtitle,
  dateLabel: textStyle.paragraph,
});
