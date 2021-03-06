import React from 'react';
import {
  G,
  Path,
  Svg,
  SvgProps,
} from 'react-native-svg';

export type IconIndentProps = SvgProps;
export type IconIndentElement = React.ReactElement<IconIndentProps>;

export const IconIndent = ({
                            color = '#000000',
                            height = 24,
                            width = 24,
                          }: IconIndentProps) => (
  <Svg width={width} height={height} viewBox='0 0 24 24'>
    <G data-name='house'>
      <Path
        fill={color}
        d='M8.02499 14.5V10H6V15.45L7.025 16.475H20.7499L18 20.05L18.85 20.95L23.9999 15.825V15.15L18.9 10.025L18 10.9L20.7499 14.5H8.02499Z'/>
    </G>
  </Svg>
);
