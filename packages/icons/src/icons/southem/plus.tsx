import React from 'react';
import {
  G,
  Path,
  Svg,
  SvgProps,
} from 'react-native-svg';

export type IconPlusProps = SvgProps;
export type IconPlusElement = React.ReactElement<IconPlusProps>;

export const IconPlus = ({
                           color = '#000000',
                           height = 24,
                           width = 24,
                         }: IconPlusProps) => (
  <Svg width={width} height={height} viewBox='0 0 24 24'>
    <G data-name='plus'>
      <Path
        fill={color}
        d='M13.8 16.2l.425 9.8h1.525l.45-9.8 9.8-.45v-1.525l-9.8-.425-.45-9.8h-1.525l-.425 9.8-9.8.425v1.525l9.8.45z'
      />
    </G>
  </Svg>
);
