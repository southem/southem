import React from 'react';
import {
  Text,
  TextProps,
} from '@southem/ui';
import { textStyle } from '../../../../components/common';

type TextElement = React.ReactElement<TextProps>;

export const DangerText = (): TextElement => {
  return (
    <Text
      style={textStyle.paragraph}
      status='danger'>
      Sample Text
    </Text>
  );
};
