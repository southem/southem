import React from 'react';
import {
  G,
  Path,
  Rect,
  Svg,
  SvgProps,
} from 'react-native-svg';

export type IconSpeechBubbleProps = SvgProps;
export type IconSpeechBubbleElement = React.ReactElement<IconSpeechBubbleProps>;

export const IconSpeechBubble = ({
                               color = '#000000',
                               height = 24,
                               width = 24,
                             }: IconSpeechBubbleProps) => (
  <Svg width={width} height={height} viewBox='0 0 24 24'>
    <G data-name='speech-bubble'>
      <Rect
        width='24'
        height='24'
        opacity='0'
      />
      <Path
        fill={color}
        fillRule='evenodd'
        clipRule='evenodd'
        d='M23.9999 10.5L22.4999 9H7.49999L6 10.5V19.5L7.475 21H9.99999V25.9999H10.975L14 21H22.4999L23.9999 19.5V10.5Z'
      />
    </G>
  </Svg>
);
