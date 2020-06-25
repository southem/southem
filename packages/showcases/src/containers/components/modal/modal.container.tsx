import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { Showcase } from '../common/showcase.component';
import { ShowcaseSection } from '../common/showcaseSection.component';
import { ShowcaseItem } from '../common/showcaseItem.component';
import {
  DefaultModal,
  StyledModal,
  StyledBackdropModal,
  CustomPositionModal,
  BackdropCloseModal,
} from './showcase';

export class ModalContainer extends React.Component<NavigationStackScreenProps> {

  public render(): React.ReactNode {
    return (
      <Showcase style={styles.container}>
        <ShowcaseSection title='Default'>
          <ShowcaseItem title='Default'>
            <DefaultModal/>
          </ShowcaseItem>
        </ShowcaseSection>
        <ShowcaseSection title='Styled'>
          <ShowcaseItem title='Styled Modal'>
            <StyledModal/>
          </ShowcaseItem>
          <ShowcaseItem title='Styled Backdrop'>
            <StyledBackdropModal/>
          </ShowcaseItem>
          <ShowcaseItem title='Custom Position'>
            <CustomPositionModal/>
          </ShowcaseItem>
        </ShowcaseSection>
        <ShowcaseSection title='Backdrop Press'>
          <ShowcaseItem title='Backdrop: Close'>
            <BackdropCloseModal/>
          </ShowcaseItem>
        </ShowcaseSection>
      </Showcase>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '',
  },
});
