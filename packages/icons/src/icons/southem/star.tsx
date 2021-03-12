import React from 'react';
import {
  G,
  Path,
  Rect,
  Svg,
  SvgProps,
} from 'react-native-svg';

export type IconStarProps = SvgProps;
export type IconStarElement = React.ReactElement<IconStarProps>;

export const IconStar = ({
                           color = '#000000',
                           height = 24,
                           width = 24,
                         }: IconStarProps) => (
  <Svg width={width} height={height} viewBox='0 0 24 24'>
    <G data-name='star'>
      <Path
        fill={color}
        fillRule='evenodd'
        clipRule='evenodd'
        d='M22.4499 23.5499L20.1249 16.45L26.1499 12.025L25.8499 11.075H18.4L16.1 4H15.05L12.775 11.075H5.3L5 12.025L11.025 16.45L8.74999 23.5499L9.52498 24.1499L15.575 19.7249L21.6249 24.1499L22.4499 23.5499Z'
      />
    </G>
  </Svg>
);
