import React from 'react';
import {
  Text,
  TextProps,
} from '@southem/ui';
import { textStyle } from '../../../../components/common';

type TextElement = React.ReactElement<TextProps>;

export const InfoText = (): TextElement => {
  return (
    <Text
      style={textStyle.paragraph}
      status='info'>
      Sample Text
    </Text>
  );
};
