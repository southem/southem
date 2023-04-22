import React from 'react';
import {
  Button,
  ButtonGroup,
  ButtonGroupElement,
  ButtonGroupProps,
  View,
} from '@southem/ui';

export const ButtonGroupShowcase = (props?: ButtonGroupProps): ButtonGroupElement => (
  <View style={{ flex: 1}}>
    <ButtonGroup {...props}>
      <Button>L</Button>
      <Button>M</Button>
      <Button>R</Button>
    </ButtonGroup>
  </View>
);
