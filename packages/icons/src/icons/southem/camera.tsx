import React from 'react';
import {
  G,
  Path,
  Svg,
  SvgProps,
} from 'react-native-svg';

export type IconCameraProps = SvgProps;
export type IconCameraElement = React.ReactElement<IconCameraProps>;

export const IconCamera = ({
                             color = '#000000',
                             height = 24,
                             width = 24,
                           }: IconCameraProps) => (
  <Svg width={width} height={height} viewBox='0 0 24 24'>
    <G data-name='camera'>
      <Path
        fill={color}
        d='M25.9999 9.99999V20.9749L24.5249 22.5249H5.49999L4 21.0499V9.99999L5.49999 8.49999H10.475L12.975 6H17L19.4999 8.49999H24.5249L25.9999 9.99999ZM15 19.75C17.5 19.75 19.5249 17.75 19.5249 15.275C19.5249 12.775 17.5 10.775 15 10.775C12.5 10.775 10.5 12.775 10.5 15.275C10.5 17.75 12.5 19.75 15 19.75Z'
      />
    </G>
  </Svg>
);
