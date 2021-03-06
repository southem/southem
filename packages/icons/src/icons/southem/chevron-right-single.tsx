import React from 'react';
import {
  G,
  Path,
  Svg,
  SvgProps,
} from 'react-native-svg';

export type IconChevronRightSingleProps = SvgProps;
export type IconChevronRightSingleElement = React.ReactElement<IconChevronRightSingleProps>;

export const IconChevronRightSingle = ({
                                         color = '#000000',
                                         height = 24,
                                         width = 24,
                                       }: IconChevronRightSingleProps) => (
  <Svg width={width} height={height} viewBox='0 0 24 24'>
    <G data-name='chevron-right-single'>
      <Path
        fill={color}
        d='M9.975 4L9 4.95L17.325 14.925L9 24.8999L9.975 25.8499L20.375 15.45V14.4L9.975 4Z'
      />
    </G>
  </Svg>
);
