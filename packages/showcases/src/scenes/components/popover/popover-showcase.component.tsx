import React from 'react';
import {
  Button,
  Popover,
  PopoverElement,
  PopoverProps,
  Text,
  TextElement,
} from '@southem/ui';

export const PopoverShowcase = (props: PopoverProps): PopoverElement => {

  const [visible, setVisible] = React.useState<boolean>(false);

  const togglePopover = (): void => {
    setVisible(!visible);
  };

  const renderPopoverContent = (): TextElement => {
    return (
      <Text>
        Hi! I'm Popover!
      </Text>
    );
  };

  return (
    <Popover
      {...props}
      visible={visible}
      // @ts-ignore
      content={renderPopoverContent()}
      onBackdropPress={togglePopover}>
      <Button onPress={togglePopover}>
        TOGGLE POPOVER
      </Button>
    </Popover>
  );
};
