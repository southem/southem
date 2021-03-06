import React from 'react';
import {
  G,
  Path,
  Svg,
  SvgProps,
} from 'react-native-svg';

export type IconEnvelopeProps = SvgProps;
export type IconEnvelopeElement = React.ReactElement<IconEnvelopeProps>;

export const IconEnvelope = ({
                               color = '#000000',
                               height = 24,
                               width = 24,
                             }: IconEnvelopeProps) => (
  <Svg width={width} height={height} viewBox='0 0 24 24'>
    <G data-name='envelope'>
      <Path
        fill={color}
        d='M5.57143 7.2L4 8.89853L13.9524 16.825H16.0476L26 8.89853L24.4286 7.2H5.57143Z'/>
      <Path
        fill={color}
        d='M4 20.825V11.325L13.9524 18.325H16.0476L26 11.325V20.825L24.4286 22.325H5.57143L4 20.825Z'/>
    </G>
  </Svg>
);
