import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { Showcase } from '../common/showcase.component';
import { ShowcaseSection } from '../common/showcaseSection.component';
import { ShowcaseItem } from '../common/showcaseItem.component';
import {
  BottomEndTooltip,
  BottomStartTooltip,
  BottomTooltip,
  IconTooltip,
  LeftEndTooltip,
  LeftStartTooltip,
  LeftTooltip,
  RightEndTooltip,
  RightStartTooltip,
  RightTooltip,
  TopEndTooltip,
  TopStartTooltip,
  TopTooltip,
} from './showcase';

type ComponentProps = NavigationStackScreenProps;

export class TooltipContainer extends React.Component<ComponentProps> {

  public render(): React.ReactNode {
    return (
      <Showcase style={styles.container}>
        <ShowcaseSection title='Accessories'>
          <ShowcaseItem title='Icon'>
            <IconTooltip/>
          </ShowcaseItem>
        </ShowcaseSection>
        <ShowcaseSection title='Placement'>
          <ShowcaseItem style={styles.bottomItem} title='Bottom'>
            <BottomTooltip/>
          </ShowcaseItem>
          <ShowcaseItem style={styles.bottomItem} title='Bottom Start'>
            <BottomStartTooltip/>
          </ShowcaseItem>
          <ShowcaseItem style={styles.bottomItem} title='Bottom End'>
            <BottomEndTooltip/>
          </ShowcaseItem>
          <ShowcaseItem style={styles.rightItem} title='Right'>
            <RightTooltip/>
          </ShowcaseItem>
          <ShowcaseItem style={styles.rightItem} title='Right Start'>
            <RightStartTooltip/>
          </ShowcaseItem>
          <ShowcaseItem style={styles.rightItem} title='Right End'>
            <RightEndTooltip/>
          </ShowcaseItem>
          <ShowcaseItem style={styles.leftItem} title='Left'>
            <LeftTooltip/>
          </ShowcaseItem>
          <ShowcaseItem style={styles.leftItem} title='Left Start'>
            <LeftStartTooltip/>
          </ShowcaseItem>
          <ShowcaseItem style={styles.leftItem} title='Left End'>
            <LeftEndTooltip/>
          </ShowcaseItem>
          <ShowcaseItem style={styles.topItem} title='Top'>
            <TopTooltip/>
          </ShowcaseItem>
          <ShowcaseItem style={styles.topItem} title='Top Start'>
            <TopStartTooltip/>
          </ShowcaseItem>
          <ShowcaseItem style={styles.topItem} title='Top End'>
            <TopEndTooltip/>
          </ShowcaseItem>
        </ShowcaseSection>
      </Showcase>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
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
