import React from 'react';
import {
  BottomNavigation,
  BottomNavigationTab,
} from '@southem/ui';
import { StarIconFill } from '../../../../assets/icons';

interface State {
  selectedIndex: number;
}

export class BottomNavigationIconTitle extends React.Component<{}, State> {

  public state: State = {
    selectedIndex: 0,
  };

  private onTabSelect = (selectedIndex: number): void => {
    this.setState({ selectedIndex });
  };

  public render(): React.ReactNode {
    return (
      <BottomNavigation
        appearance='noIndicator'
        selectedIndex={this.state.selectedIndex}
        onSelect={this.onTabSelect}>
        <BottomNavigationTab
          title='Screen 1'
          // @ts-ignore
          icon={StarIconFill}
        />
        <BottomNavigationTab
          title='Screen 2'
          // @ts-ignore
          icon={StarIconFill}
        />
        <BottomNavigationTab
          title='Screen 3'
          // @ts-ignore
          icon={StarIconFill}
        />
      </BottomNavigation>
    );
  }
}
