import React from 'react';
import {
  Menu,
  MenuGroup,
  MenuItem,
  MenuElement,
  // @ts-ignore
  IndexPath,
} from '@southem/ui';
import { MenuShowcaseProps } from './type';

export const MenuShowcase = (props: MenuShowcaseProps): MenuElement => {

  const [selectedIndex, setSelectedIndex] = React.useState(null);

  const onSelect = (index: IndexPath): void => {
    setSelectedIndex(index.row);
  };

  // @ts-ignore
  const renderData: MenuElement[] = props.data.map((el, index) => (
    el.subItems ? (
      <MenuGroup key={index}>
        {el.subItems.map((
          // tslint:disable-next-line:no-shadowed-variable
          el,
          // tslint:disable-next-line:no-shadowed-variable
          index,
        ) => (
          <MenuItem key={index} {...el} />
        ))}
      </MenuGroup>
    ) : <MenuItem key={index} {...el} />
  ));

  return (
    <Menu
      {...props}
      // @ts-ignore
      selectedIndex={selectedIndex}
      onSelect={onSelect}>
      {renderData}
    </Menu>
  );
};
