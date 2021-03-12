import React from 'react';
import {
  G,
  Path,
  Svg,
  SvgProps,
} from 'react-native-svg';

export type IconExternalProps = SvgProps;
export type IconExternalElement = React.ReactElement<IconExternalProps>;

export const IconExternal = ({
                               color = '#000000',
                               height = 24,
                               width = 24,
                             }: IconExternalProps) => (
  <Svg width={width} height={height} viewBox='0 0 24 24'>
    <G data-name='external'>
      <Path
        fill={color}
        d='M25.9999 13.75H24.7499L24.1499 9.22499L18.4 15L17 13.575L22.7249 7.82499L18.25 7.25V6H25.5249L25.9999 6.475V13.75ZM14 11L12.975 12H5.99999V21.9999H21.9999V17L22.9749 16H23.9999V22.9749L22.9749 23.9999H4.975L4 22.9749V11L4.975 9.99999H14V11Z'/>
    </G>
  </Svg>
);
