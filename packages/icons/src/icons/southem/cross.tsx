import React from 'react';
import {
  G,
  Path,
  Svg,
  SvgProps,
} from 'react-native-svg';

export type IconCrossProps = SvgProps;
export type IconCrossElement = React.ReactElement<IconCrossProps>;

export const IconCross = ({
                            color = '#000000',
                            height = 24,
                            width = 24,
                          }: IconCrossProps) => (
  <Svg width={width} height={height} viewBox='0 0 24 24'>
    <G data-name='cross'>
      <Path
        fill={color}
        d='M15.325 17.025l7.225 6.625 1.075-1.075-6.6-7.25 6.6-7.25L22.55 7l-7.225 6.625-7.25-6.6L7 8.1l6.625 7.225L7 22.55l1.075 1.075 7.25-6.6z'
      />
    </G>
  </Svg>
);
