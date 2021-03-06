import React from 'react';
import {
  G,
  Path,
  Svg,
  SvgProps,
} from 'react-native-svg';

export type IconFacebookProps = SvgProps;
export type IconFacebookElement = React.ReactElement<IconFacebookProps>;

export const IconFacebook = ({
                               color = '#000000',
                               height = 24,
                               width = 24,
                             }: IconFacebookProps) => (
  <Svg width={width} height={height} viewBox='0 0 24 24'>
    <G data-name='facebook'>
      <Path
        fill={color}
        d='M11.425 9.12498V12.25H8V15.7H11.425V25.9999H15.55V15.7H18.925L19.675 12.25H15.55V9.49998C15.55 7.97499 16.45 7.44999 17.625 7.44999H19.675L19.55 4.175C18.525 4.075 17.725 4 16.55 4C13.625 4 11.425 5.82499 11.425 9.12498Z'/>
    </G>
  </Svg>
);
