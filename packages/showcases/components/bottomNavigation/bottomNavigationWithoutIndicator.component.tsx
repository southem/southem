import React from 'react';
import {
  BottomNavigation,
  BottomNavigationTab,
} from '@southem/ui';

export const BottomNavigationWithoutIndicatorShowcase = () => {

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <BottomNavigation
      appearance='noIndicator'
      selectedIndex={selectedIndex}
      onSelect={setSelectedIndex}>
      <BottomNavigationTab title='USERS'/>
      <BottomNavigationTab title='ORDERS'/>
      <BottomNavigationTab title='TRANSACTIONS'/>
    </BottomNavigation>
  );
};
