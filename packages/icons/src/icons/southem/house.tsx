import React from 'react';
import {
  G,
  Path,
  Svg,
  SvgProps,
} from 'react-native-svg';

export type IconHouseProps = SvgProps;
export type IconHouseElement = React.ReactElement<IconHouseProps>;

export const IconHouse = ({
                            color = '#000000',
                            height = 24,
                            width = 24,
                          }: IconHouseProps) => (
  <Svg width={width} height={height} viewBox='0 0 24 24'>
    <G data-name='house'>
      <Path
        fill={color}
        d='M22 25l1-1V13.375L15.6 6h-1.2L7 13.375V24l1 1h4.5v-6.5h5V25H22z'/>
    </G>
  </Svg>
);
