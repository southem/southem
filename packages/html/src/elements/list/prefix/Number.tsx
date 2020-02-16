import React from 'react';
import { Text } from '@southem/ui';

export default function ({ element, style }) {
  const { index } = element.attributes;

  return <Text style={style}>{index}. </Text>;
}
