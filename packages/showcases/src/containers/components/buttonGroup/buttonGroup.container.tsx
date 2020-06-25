import React from 'react';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { Showcase } from '../common/showcase.component';
import { ShowcaseSection } from '../common/showcaseSection.component';
import {
  FilledButtonGroup,
  GiantButtonGroup,
  LargeButtonGroup,
  MediumButtonGroup,
  OutlineButtonGroup,
  SmallButtonGroup,
  TinyButtonGroup,
} from './showcase';
import { ShowcaseItem } from '../common/showcaseItem.component';

export class ButtonGroupContainer extends React.Component<NavigationStackScreenProps> {

  public render(): React.ReactNode {
    return (
      <Showcase>
        <ShowcaseSection title='Appearance'>
          <ShowcaseItem title='Filled'>
            <FilledButtonGroup/>
          </ShowcaseItem>
          <ShowcaseItem title='Outline'>
            <OutlineButtonGroup/>
          </ShowcaseItem>
        </ShowcaseSection>
        <ShowcaseSection title='Size'>
          <ShowcaseItem title='Giant'>
            <GiantButtonGroup/>
          </ShowcaseItem>
          <ShowcaseItem title='Large'>
            <LargeButtonGroup/>
          </ShowcaseItem>
          <ShowcaseItem title='Medium'>
            <MediumButtonGroup/>
          </ShowcaseItem>
          <ShowcaseItem title='Small'>
            <SmallButtonGroup/>
          </ShowcaseItem>
          <ShowcaseItem title='Tiny'>
            <TinyButtonGroup/>
          </ShowcaseItem>
        </ShowcaseSection>
      </Showcase>
    );
  }
}
