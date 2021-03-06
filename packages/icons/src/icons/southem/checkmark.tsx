import React from 'react';
import {
  G,
  Path,
  Rect,
  Svg,
  SvgProps,
} from 'react-native-svg';

export type IconCheckMarkProps = SvgProps;
export type IconCheckMarkElement = React.ReactElement<IconCheckMarkProps>;

export const IconCheckMark = ({
                                color = '#000000',
                                height = 24,
                                width = 24,
                              }: IconCheckMarkProps) => (
  <Svg width={width} height={height} viewBox='0 0 105.27 89.6'>
    <G data-name='checkmark'>
      <Rect width={width} height={height} opacity='0'/>
      <Path
        fill={color}
        // d="M6 14.775l-1 1 5 7h.475l14.3-14.8-1-.975-13.3 12.05L6 14.775z"
        d='M9.86 18a1 1 0 0 1-.73-.32l-4.86-5.17a1 1 0 1 1 1.46-1.37l4.12 4.39 8.41-9.2a1 1 0 1 1 1.48 1.34l-9.14 10a1 1 0 0 1-.73.33z'/>
    </G>
  </Svg>
);
