import React from 'react';
import {
  G,
  Path,
  Svg,
  SvgProps,
} from 'react-native-svg';

export type IconAlertProps = SvgProps;
export type IconAlertElement = React.ReactElement<IconAlertProps>;

export const IconAlert = ({
                        color = '#000000',
                        height = 24,
                        width = 24,
                      }: IconAlertProps) => (
  <Svg width={width} height={height} viewBox='0 0 105.27 89.6'>
    <G data-name='alert'>
      <Path
        fill={color}
        d='M13.3 7.775L14.025 17.25H16.025L16.775 7.775L16.05 7H14.025L13.3 7.775ZM17 21.25C17 20.15 16.1 19.25 14.975 19.25C13.9 19.25 13 20.15 13 21.25C13 22.3249 13.9 23.2249 14.975 23.2249C16.075 23.2249 17 22.3249 17 21.25Z'
      />
    </G>
  </Svg>
);
