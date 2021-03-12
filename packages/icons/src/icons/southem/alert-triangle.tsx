import React from 'react';
import {
  G,
  Path,
  Svg,
  SvgProps,
} from 'react-native-svg';

export type IconAlertTriangleProps = SvgProps;
export type IconAlertTriangleElement = React.ReactElement<IconAlertTriangleProps>;

export const IconAlertTriangle = ({
                                    color = '#000000',
                                    height = 24,
                                    width = 24,
                                  }: IconAlertTriangleProps) => (
  <Svg width={width} height={height} viewBox='0 0 105.27 89.6'>
    <G data-name='alert-triangle'>
      <Path
        fill={color}
        d='M14.41 5L4 22.057l.668.943h20.664l.668-.943L15.59 5h-1.18zm-.063 12.178h1.306l.621-6.917-.856-.728h-.835l-.857.728.62 6.917zM15 18.452c.7 0 1.274.573 1.274 1.274 0 .7-.573 1.274-1.274 1.274-.7 0-1.274-.573-1.274-1.274 0-.7.573-1.274 1.274-1.274z'
      />
    </G>
  </Svg>
);
