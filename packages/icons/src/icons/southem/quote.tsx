import React from 'react';
import {
  G,
  Path,
  Svg,
  SvgProps,
} from 'react-native-svg';

export type IconQuoteProps = SvgProps;
export type IconQuoteElement = React.ReactElement<IconQuoteProps>;

export const IconQuote = ({
                           color = '#000000',
                           height = 24,
                           width = 24,
                         }: IconQuoteProps) => (
  <Svg width={width} height={height} viewBox='0 0 24 24'>
    <G data-name='quote'>
      <Path
        fill={color}
        d='M9.2776 8H14.0473C13.4732 12.5489 12.9653 17.0095 12.7445 22H4C4.79495 17.142 6.4511 12.5489 9.2776 8ZM20.3852 8H25.0887C24.5808 12.5489 24.0067 17.0095 23.7859 22H15.0635C15.9688 17.142 17.5587 12.5489 20.3852 8Z'
      />
    </G>
  </Svg>
);
