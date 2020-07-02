import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Button,
  Modal,
} from '@southem/ui';
import { ModalContent } from './modalContent.component';
import { profile1 } from '../../../../core/data/profile';

interface ModalShowcaseState {
  visible: boolean;
}

export class ModalShowcase extends React.Component<any, ModalShowcaseState> {

  public state: ModalShowcaseState = {
    visible: false,
  };

  private onToggleModal = (): void => {
    const visible: boolean = !this.state.visible;

    this.setState({ visible });
  };

  private onBackdropPress = (): void => {
    if (this.props.allowBackdrop) {
      this.onToggleModal();
    }
  };

  public render(): React.ReactNode {
    return (
      <React.Fragment>
        <Modal
          {...this.props}
          visible={this.state.visible}
          onBackdropPress={this.onBackdropPress}>
          <ModalContent
            profile={profile1}
            onFollowPress={this.onToggleModal}
          />
        </Modal>
        <Button
          style={styles.button}
          onPress={this.onToggleModal}>
          Show
        </Button>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 106,
  },
});
