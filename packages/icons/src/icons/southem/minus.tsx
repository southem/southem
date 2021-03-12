import React from 'react';
import {
  G,
  Path,
  Rect,
  Svg,
  SvgProps,
} from 'react-native-svg';

export type IconMinusProps = SvgProps;
export type IconMinusElement = React.ReactElement<IconMinusProps>;

export const IconMinus = ({
                            color = '#000000',
                            height = 24,
                            width = 24,
                          }: IconMinusProps) => (
  <Svg width={width} height={height} viewBox='0 0 105.27 89.6'>
    <G data-name='minus'>
      <Rect
        width={width}
        height={height}
        transform='rotate(180 12 12)'
        opacity='0'
      />
      <Path
        fill={color}
        // d="M4 14v2.5h22V14H4z"
        d='M19 13H5a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2z'/>
    </G>
  </Svg>
);
