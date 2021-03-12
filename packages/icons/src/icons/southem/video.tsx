import React from 'react';
import {
  G,
  Path,
  Svg,
  SvgProps,
} from 'react-native-svg';

export type IconVideoProps = SvgProps;
export type IconVideoElement = React.ReactElement<IconVideoProps>;

export const IconVideo = ({
                              color = '#000000',
                              height = 24,
                              width = 24,
                            }: IconVideoProps) => (
  <Svg width={width} height={height} viewBox='0 0 24 24'>
    <G data-name='twitter'>
      <Path
        fill={color}
        fillRule='evenodd'
        clipRule='evenodd'
        d='M5.99999 8L4 9.99999V20L5.99999 22H17.5V8H5.99999ZM24.4999 8.5L19.4999 13.5V16.5L24.4999 21.5H25.9999V8.5H24.4999Z'
      />
    </G>
  </Svg>
);
