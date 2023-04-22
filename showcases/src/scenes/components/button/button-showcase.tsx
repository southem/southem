import React from 'react';
import { Button, ButtonElement, ButtonProps, View } from '@southem/ui';

export const ButtonShowcase = (props?: ButtonProps): ButtonElement => (
  <View style={{ flex: 1 }}>
    <Button
      {...props}>
      BUTTON
    </Button>
  </View>
);
