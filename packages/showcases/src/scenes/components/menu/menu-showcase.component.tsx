import React from 'react';
import { Menu, MenuGroup, MenuItem, MenuItemProps, MenuElement, MenuProps } from '@southem/ui';

export const MenuShowcase = (props: MenuProps): MenuElement => {

  const [selectedIndex, setSelectedIndex] = React.useState(null);
  // @ts-ignore
  const {data, ...restProps} = props;

  const onSelect = (index: number): void => {
    // @ts-ignore
    setSelectedIndex(index);
  };

  const renderContent = (): React.ReactElement[] => {
    return data && data.map((menu: MenuItemProps, index: number) => {
      // @ts-ignore
      const { subItems } = menu;
      if (subItems !== undefined) {
        return (
          <MenuGroup key={`g-menu-${index}`} {...menu}>
            {
              subItems.map((submenu: MenuItemProps, subIndex: number) => (<MenuItem
                key={`sub-menu-${subIndex}`} {...submenu} />))
            }
          </MenuGroup>
        );
      }
      return (<MenuItem key={`menu-${index}`} {...menu} />);
    });
  };

  return (
    // @ts-ignore
    <Menu
      {...restProps}
      selectedIndex={selectedIndex}
      onSelect={onSelect}>
      {renderContent()}
    </Menu>
  );
};
