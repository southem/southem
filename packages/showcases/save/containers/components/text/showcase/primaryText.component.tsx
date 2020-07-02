import React from 'react';
import {
  Text,
  TextProps,
} from '@southem/ui';
import { textStyle } from '../../../../components/common';

type TextElement = React.ReactElement<TextProps>;

export const PrimaryText = (): TextElement => {
  return (
    <Text
      style={textStyle.paragraph}
      status='primary'>
      Sample Text
    </Text>
  );
};
