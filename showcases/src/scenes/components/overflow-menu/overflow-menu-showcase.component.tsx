import React from 'react';
import {
  Button,
  ButtonElement,
  // @ts-ignore
  IndexPath,
  MenuItem,
  OverflowMenu,
  OverflowMenuElement,
} from '@southem/ui';
import { OverflowMenuPropsCustom } from './type';

export const OverflowMenuShowcase = (props: OverflowMenuPropsCustom): OverflowMenuElement => {
  const [visible, setVisible] = React.useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = React.useState<IndexPath>(null);

  const toggleMenu = (): void => {
    setVisible(!visible);
  };

  const onSelect = (index: IndexPath): void => {
    setSelectedIndex(index);
    toggleMenu();
  };

  const renderButton = (): ButtonElement => (
    <Button onPress={toggleMenu}>TOGGLE MENU</Button>
  );

  // @ts-ignore
  const renderData = props.data.map((el, index) => (
    <MenuItem key={index} {...el} />
  ));

  return (
    <OverflowMenu
      {...props}
      visible={visible}
      selectedIndex={selectedIndex}
      onSelect={onSelect}
      onBackdropPress={toggleMenu}
      anchor={renderButton}>
      {renderData}
    </OverflowMenu>
  );
};
