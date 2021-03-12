import React from 'react';
import {
  G,
  Path,
  Svg,
  SvgProps,
} from 'react-native-svg';

export type IconChevronDownSingleProps = SvgProps;
export type IconChevronDownSingleElement = React.ReactElement<IconChevronDownSingleProps>;

export const IconChevronDownSingle = ({
                                        color = '#000000',
                                        height = 24,
                                        width = 24,
                                      }: IconChevronDownSingleProps) => (
  <Svg width={width} height={height} viewBox='0 0 24 24'>
    <G data-name='chevron-down-single'>
      <Path
        fill={color}
        d='M4 9.95L14.45 20.4H15.45L25.8999 9.95L24.9249 9L14.95 17.4L4.975 9L4 9.95Z'
      />
    </G>
  </Svg>
);

