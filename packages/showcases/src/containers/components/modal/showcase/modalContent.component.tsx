import React from 'react';
import {
  View,
  ViewProps,
  StyleSheet,
} from 'react-native';
import {
  Button,
  Text,
  Avatar,
} from '@southem/ui';
import { textStyle } from '../../../../components/common';
import { Profile } from '../../../../core/model';

interface ComponentProps {
  profile: Profile;
  onFollowPress: () => void;
}

export type ModalContentProps = ViewProps & ComponentProps;

export class ModalContent extends React.Component<ModalContentProps> {

  private onFollowPress = () => {
    this.props.onFollowPress();
  };

  public render(): React.ReactNode {
    const {
      style,
      profile,
      ...restProps
    } = this.props;
    const name: string = `${profile.firstName} ${profile.lastName}`;

    return (
      <View
        style={[styles.container, style]}
        {...restProps}>
        <View style={styles.topContainer}>
          <Avatar
            style={styles.avatar}
            source={profile.photo.imageSource}
          />
          <View>
            <Text
              category='s2'
              style={styles.nameLabel}>
              {name}
            </Text>
            <Text
              appearance='hint'
              category='c1'>
              {profile.location}
            </Text>
          </View>
        </View>
        <Button
          style={styles.button}
          appearance='outline'
          size='tiny'
          onPress={this.onFollowPress}>
          FOLLOW
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  nameLabel: {
    ...textStyle.subtitle,
  },
  button: {
    alignSelf: 'center',
  },
  avatar: {
    marginRight: 12,
  },
});
