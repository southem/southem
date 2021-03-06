import React from 'react';
import {
  G,
  Path,
  Svg,
  SvgProps,
} from 'react-native-svg';

export type IconArrowUpStraightProps = SvgProps;
export type IconArrowUpStraightElement = React.ReactElement<IconArrowUpStraightProps>;

export const IconArrowUpStraight = ({
                                      color = '#000000',
                                      height = 24,
                                      width = 24,
                                    }: IconArrowUpStraightProps) => (
  <Svg width={width} height={height} viewBox='0 0 24 24'>
    <G data-name='arrow-up-straight'>
      <Path
        fill={color}
        d='15.95 26.025V6.9l8.975 7.5.975-.975L15.45 3h-1L4 13.425l.975.975 8.975-7.5v19.125h2z'
      />
    </G>
  </Svg>
);
