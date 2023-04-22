import React from 'react';
import {
  CheckBox,
  CheckBoxProps,
  ListItem,
  ListItemElement,
  ListItemProps,
} from '@southem/ui';
import { StarIcon } from '../../../components';

const AccessoryElement = (style: any): React.ReactElement<CheckBoxProps> => {
  const [checked, setChecked] = React.useState<boolean>(true);

  const onChange = (nextChecked: boolean): void => {
    setChecked(nextChecked);
  };

  return (
    <CheckBox
      style={style}
      checked={checked}
      onChange={onChange}
    />
  );
};

export const ListItemShowcase = (props?: ListItemProps): ListItemElement => (
  <ListItem {...props} />
);

export const ListItemIconShowcase = (props?: ListItemProps): ListItemElement => (
  <ListItem accessoryLeft={StarIcon} {...props} />
);

export const ListItemAccessoryShowcase = (props?: ListItemProps): ListItemElement => (
  <ListItem {...props} accessoryLeft={AccessoryElement}/>
);

export const ListItemIconAccessoryShowcase = (props?: ListItemProps): ListItemElement => (
  <ListItem {...props} accessoryLeft={StarIcon}
            accessoryRight={(style: Object, index: number) => <AccessoryElement style={style} index={index}/>}/>
);
