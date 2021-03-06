import React from 'react';
import {
  G,
  Path,
  Svg,
  SvgProps,
} from 'react-native-svg';

export type IconPlayProps = SvgProps;
export type IconPlayElement = React.ReactElement<IconPlayProps>;

export const IconPlay = ({
                             color = '#000000',
                             height = 24,
                             width = 24,
                           }: IconPlayProps) => (
  <Svg width={width} height={height} viewBox='0 0 24 24'>
    <G data-name='play'>
      <Path
        fill={color}
        d='M24.1749 15.15V14.45L8.575 8L8 8.45V21.15L8.575 21.55L24.1749 15.15Z'
      />
    </G>
  </Svg>
);
