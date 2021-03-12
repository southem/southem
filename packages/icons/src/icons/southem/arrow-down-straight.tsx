import React from 'react';
import {
  G,
  Path,
  Svg,
  SvgProps,
} from 'react-native-svg';

export type IconArrowDownStraightProps = SvgProps;
export type IconArrowDownStraightElement = React.ReactElement<IconArrowDownStraightProps>;

export const IconArrowDownStraight = ({
                                        color = '#000000',
                                        height = 24,
                                        width = 24,
                                      }: IconArrowDownStraightProps) => (
  <Svg width={width} height={height} viewBox='0 0 24 24'>
    <G data-name='arrow-down-straight'>
      <Path
        fill={color}
        d='M13.95 4v19.125l-8.975-7.5L4 16.6l10.45 10.425h1L25.9 16.6l-.975-.975-8.975 7.5V4h-2z'
      />
    </G>
  </Svg>
);
