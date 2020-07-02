import React from 'react';
import {
  Text,
  TextProps,
} from '@southem/ui';
import { textStyle } from '../../../../components/common';

type TextElement = React.ReactElement<TextProps>;

export const H3Text = (): TextElement => {
  return (
    <Text
      style={textStyle.headline}
      category='h3'>
      Sample Text
    </Text>
  );
};
