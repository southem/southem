import React from 'react';
import {
  G,
  Path,
  Svg,
  SvgProps,
} from 'react-native-svg';

export type IconChevronLeftSingleProps = SvgProps;
export type IconChevronLeftSingleElement = React.ReactElement<IconChevronLeftSingleProps>;

export const IconChevronLeftSingle = ({
                                        color = '#000000',
                                        height = 24,
                                        width = 24,
                                      }: IconChevronLeftSingleProps) => (
  <Svg width={width} height={height} viewBox='0 0 24 24'>
    <G data-name='chevron-left-single'>
      <Path
        fill={color}
        d='M18.4 4L8 14.4V15.45L18.4 25.8499L19.375 24.8999L11.05 14.925L19.375 4.95L18.4 4Z'
      />
    </G>
  </Svg>
);
