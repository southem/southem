import React from 'react';
import {
  G,
  Path,
  Svg,
  SvgProps,
} from 'react-native-svg';

export type IconArrowLeftStraightProps = SvgProps;
export type IconArrowLeftStraightElement = React.ReactElement<IconArrowLeftStraightProps>;

export const IconArrowLeftStraight = ({
                                        color = '#000000',
                                        height = 24,
                                        width = 24,
                                      }: IconArrowLeftStraightProps) => (
  <Svg width={width} height={height} viewBox='0 0 24 24'>
    <G data-name='arrow-left-straight'>
      <Path
        fill={color}
        d='M6.9 13.95l7.5-8.975L13.425 4 3 14.45v1L13.425 25.9l.975-.975-7.5-8.975h19.125v-2H6.9z'
      />
    </G>
  </Svg>
);
