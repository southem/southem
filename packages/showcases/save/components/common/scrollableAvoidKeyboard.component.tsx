import React from 'react';
import {
  KeyboardAwareScrollView,
  KeyboardAwareScrollViewProps,
} from 'react-native-keyboard-aware-scroll-view';

export type ScrollableAvoidKeyboardProps = KeyboardAwareScrollViewProps;

export class ScrollableAvoidKeyboard extends React.Component<ScrollableAvoidKeyboardProps> {

  public render(): React.ReactNode {
    const { style, contentContainerStyle, themedStyle, ...restProps } = this.props;

    return (
      <KeyboardAwareScrollView
        bounces={false}
        bouncesZoom={false}
        alwaysBounceVertical={false}
        alwaysBounceHorizontal={false}
        style={[{flex: 1}, style]}
        contentContainerStyle={[{flexGrow: 1}, contentContainerStyle]}
        enableOnAndroid={true}
        {...restProps}
      />
    );
  }
}
