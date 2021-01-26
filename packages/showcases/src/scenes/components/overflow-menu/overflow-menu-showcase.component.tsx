import React from 'react';
import {
  Button,
  MenuItem,
  OverflowMenu,
  OverflowMenuElement,
  OverflowMenuProps,
} from '@southem/ui';

export const OverflowMenuShowcase = (props: OverflowMenuProps): OverflowMenuElement => {

  const [visible, setVisible] = React.useState<boolean>(false);
  // @ts-ignore
  const [selectedIndex, setSelectedIndex] = React.useState<number>(null);

  const toggleMenu = (): void => {
    setVisible(!visible);
  };

  const onSelect = (index: number): void => {
    setSelectedIndex(index);
    toggleMenu();
  };

  const renderToggleButton = () => (
    <Button onPress={toggleMenu}>
      TOGGLE MENU
    </Button>
  );

  return (
    // @ts-ignore
    <OverflowMenu
      {...props}
      anchor={renderToggleButton}
      visible={visible}
      selectedIndex={selectedIndex}
      onSelect={onSelect}
      onBackdropPress={toggleMenu}>
      <MenuItem title='Users'/>
      <MenuItem title='Orders'/>
      <MenuItem title='Transactions'/>
    </OverflowMenu>
  );
};
