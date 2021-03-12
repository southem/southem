import React from 'react';
import {
  G,
  Path,
  Svg,
  SvgProps,
} from 'react-native-svg';

export type IconTickRoundProps = SvgProps;
export type IconTickRoundElement = React.ReactElement<IconTickRoundProps>;

export const IconTickRound = ({
                            color = '#000000',
                            height = 24,
                            width = 24,
                          }: IconTickRoundProps) => (
  <Svg width={width} height={height} viewBox='0 0 24 24'>
    <G data-name='tick-round'>
      <Path
        fill={color}
        fillRule='evenodd'
        clipRule='evenodd'
        d='M15 26C21.0751 26 26 21.0751 26 15C26 8.92487 21.0751 4 15 4C8.92487 4 4 8.92487 4 15C4 21.0751 8.92487 26 15 26ZM13.05 17.3615L10.5523 14.9754L9.67347 15.8541L12.6526 20.025H13.1516L21.3527 11.5371L20.45 10.657L13.05 17.3615Z'
      />
    </G>
  </Svg>
);
