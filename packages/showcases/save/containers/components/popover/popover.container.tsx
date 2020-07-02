import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { Showcase } from '../common/showcase.component';
import { ShowcaseSection } from '../common/showcaseSection.component';
import { ShowcaseItem } from '../common/showcaseItem.component';
import {
  BottomEndPopover,
  BottomPopover,
  BottomStartPopover,
  LeftEndPopover,
  LeftPopover,
  LeftStartPopover,
  RightEndPopover,
  RightPopover,
  RightStartPopover,
  TopEndPopover,
  TopPopover,
  TopStartPopover,
} from './showcase';

type ComponentProps = NavigationStackScreenProps;

export class PopoverContainer extends React.Component<ComponentProps> {

  public render(): React.ReactNode {
    return (
      <Showcase style={styles.container}>
        <ShowcaseSection title='Top'>
          <ShowcaseItem style={styles.topItem} title='Top'>
            <TopPopover/>
          </ShowcaseItem>
          <ShowcaseItem style={styles.topItem} title='Top Start'>
            <TopStartPopover/>
          </ShowcaseItem>
          <ShowcaseItem style={styles.topItem} title='Top End'>
            <TopEndPopover/>
          </ShowcaseItem>
        </ShowcaseSection>
        <ShowcaseSection title='Right'>
          <ShowcaseItem style={styles.rightItem} title='Right'>
            <RightPopover/>
          </ShowcaseItem>
          <ShowcaseItem style={styles.rightItem} title='Right Start'>
            <RightStartPopover/>
          </ShowcaseItem>
          <ShowcaseItem style={styles.rightItem} title='Right End'>
            <RightEndPopover/>
          </ShowcaseItem>
        </ShowcaseSection>
        <ShowcaseSection title='Left'>
          <ShowcaseItem style={styles.leftItem} title='Left'>
            <LeftPopover/>
          </ShowcaseItem>
          <ShowcaseItem style={styles.leftItem} title='Left Start'>
            <LeftStartPopover/>
          </ShowcaseItem>
          <ShowcaseItem style={styles.leftItem} title='Left End'>
            <LeftEndPopover/>
          </ShowcaseItem>
        </ShowcaseSection>
        <ShowcaseSection title='Bottom'>
          <ShowcaseItem style={styles.bottomItem} title='Bottom'>
            <BottomPopover/>
          </ShowcaseItem>
          <ShowcaseItem style={styles.bottomItem} title='Bottom Start'>
            <BottomStartPopover/>
          </ShowcaseItem>
          <ShowcaseItem style={styles.bottomItem} title='Bottom End'>
            <BottomEndPopover/>
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
  bottomItem: {
    justifyContent: 'flex-start',
  },
  rightItem: {
    flexDirection: 'row-reverse',
  },
  leftItem: {},
  topItem: {
    justifyContent: 'flex-start',
  },
});
