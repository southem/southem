import React from 'react';
import {
  G,
  Path,
  Svg,
  SvgProps,
} from 'react-native-svg';

export type IconArrowRightStraightProps = SvgProps;
export type IconArrowRightStraightElement = React.ReactElement<IconArrowRightStraightProps>;

export const IconArrowRightStraight = ({
                                         color = '#000000',
                                         height = 24,
                                         width = 24,
                                       }: IconArrowRightStraightProps) => (
  <Svg width={width} height={height} viewBox='0 0 24 24'>
    <G data-name='arrow-right-straight'>
      <Path
        fill={color}
        d='M4 15.95h19.125l-7.5 8.975.975.975 10.425-10.45v-1L16.6 4l-.975.975 7.5 8.975H4v2z'
      />
    </G>
  </Svg>
);
