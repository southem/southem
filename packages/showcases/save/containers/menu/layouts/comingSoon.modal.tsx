import React from 'react';
import {
  View,
  Dimensions,
  ScaledSize,
  StyleSheet,
} from 'react-native';
import {
  Button,
  Text,
} from '@southem/ui';
import { textStyle } from '../../../components/common';

const dimensions: ScaledSize = Dimensions.get('window');
const contentWidth: number = dimensions.width - 24;
const contentHeight: number = 192;

interface ComingSoonModalProps {
  onCancel: () => void;
}

export class ComingSoonModal extends React.Component<ComingSoonModalProps> {

  private onCancel = (): void => {
    this.props.onCancel();
  };

  public render(): React.ReactNode {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text
            style={styles.titleLabel}
            category='h6'>
            Coming Soon
          </Text>
          <Text
            style={styles.descriptionLabel}
            category='p2'>
            These layouts are not currently available. Stay tuned
          </Text>
        </View>
        <Button
          textStyle={textStyle.button}
          appearance='ghost'
          size='large'
          onPress={this.onCancel}>
          OKAY
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    justifyContent: 'space-between',
    padding: 24,
    width: contentWidth,
    height: contentHeight,
    borderRadius: 12,
    top: (dimensions.height - contentHeight) / 2,
    left: (dimensions.width - contentWidth) / 2,
    backgroundColor: 'bue',
  },
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleLabel: textStyle.headline,
  descriptionLabel: {
    marginTop: 24,
    ...textStyle.paragraph,
  },
});
