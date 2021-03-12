import React from 'react';
import {
  G,
  Path,
  Svg,
  SvgProps,
} from 'react-native-svg';

export type IconChevronUpSingleProps = SvgProps;
export type IconChevronUpSingleElement = React.ReactElement<IconChevronUpSingleProps>;

export const IconChevronUpSingle = ({
                                      color = '#000000',
                                      height = 24,
                                      width = 24,
                                    }: IconChevronUpSingleProps) => (
  <Svg width={width} height={height} viewBox='0 0 24 24'>
    <G data-name='chevron-up-single'>
      <Path
        fill={color}
        d='M25.8999 19.45L15.45 9H14.45L4 19.45L4.975 20.4L14.95 12L24.9249 20.4L25.8999 19.45Z'
      />
    </G>
  </Svg>
);
