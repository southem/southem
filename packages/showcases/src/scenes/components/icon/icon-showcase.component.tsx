import React from 'react';
import { Icon, IconProps } from '@southem/ui';

const DEFAULT_ICON: string = 'star';

export const IconShowcase = (props: IconProps): React.ReactElement => {

  const iconRef = React.useRef();
  // @ts-ignore
  const [currentIcon, setCurrentIcon] = React.useState<string>(DEFAULT_ICON);
  /**
  let inputValue: string = DEFAULT_ICON;

  React.useEffect(() => {
    const animationTimeout = setTimeout(startAnimation, 500);
    return () => clearTimeout(animationTimeout);
  });

  const onInputChangeText = (text: string): void => {
    inputValue = text;
  };

  const onInputBlur = (): void => {
    // @ts-ignore
    // iconRef.current.startAnimation();
    setCurrentIcon(inputValue.length > 0 ? inputValue : DEFAULT_ICON);
  };

  const startAnimation = (): void => {
    // @ts-ignore
    // iconRef.current.startAnimation();
  };
  **/

  return (
    <Icon
      {...props}
      ref={iconRef}
      name={currentIcon}
    />
  );
};
