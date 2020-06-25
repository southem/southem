import React from 'react';
import {
  ImageBackground,
  ImageBackgroundProps,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';

interface OverlayImageStyle extends ViewStyle {
  overlayColor: string;
}

interface ComponentProps {
  style?: StyleProp<OverlayImageStyle>;
  children?: React.ReactNode;
}

export type ImageOverlayProps = ImageBackgroundProps & ComponentProps;

export class ImageOverlay extends React.Component<ImageOverlayProps> {

  private getOverlayColor = (source: string): string => {
    return source || styles.overlay.backgroundColor;
  };

  public render(): React.ReactNode {
    const { style, children, ...restProps } = this.props;
    // @ts-ignore: overlayColor (additional style property)
    const { overlayColor: derivedOverlayColor, ...containerStyle } = StyleSheet.flatten(style);

    const overlayColor: string = this.getOverlayColor(derivedOverlayColor);

    return (
      <ImageBackground
        style={containerStyle}
        {...restProps}>
        <View style={[styles.overlay, { backgroundColor: overlayColor }]}/>
        {children}
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
    ...StyleSheet.absoluteFillObject,
  },
});
