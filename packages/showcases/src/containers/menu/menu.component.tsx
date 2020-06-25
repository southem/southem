import React from 'react';
import { SafeAreaView } from '../../core/navigation';
import {
  BottomNavigation,
  BottomNavigationTab,
} from '@southem/ui';
import {
  ColorPaletteIconOutline,
  LayoutIconOutline,
  StarIconOutline,
} from '../../assets/icons';

interface ComponentProps {
  selectedIndex: number;
  onTabSelect: (index: number) => void;
}

type Props = ComponentProps;

export class Menu extends React.Component<Props> {

  private onTabSelect = (index: number) => {
    this.props.onTabSelect(index);
  };

  public render(): React.ReactNode {
    const { selectedIndex } = this.props;

    return (
      <SafeAreaView>
        <BottomNavigation
          appearance='noIndicator'
          selectedIndex={selectedIndex}
          onSelect={this.onTabSelect}>
          <BottomNavigationTab
            title='Layouts'
            icon={LayoutIconOutline}
          />
          <BottomNavigationTab
            title='Components'
            icon={StarIconOutline}
          />
          <BottomNavigationTab
            title='Themes'
            icon={ColorPaletteIconOutline}
          />
        </BottomNavigation>
      </SafeAreaView>
    );
  }
}
