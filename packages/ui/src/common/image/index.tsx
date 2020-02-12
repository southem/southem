// tslint:disable
import React, { PureComponent } from 'react';
import {
  Animated,
  ImageBackground,
  ImageBackgroundProps,
  ImageLoadEventData,
} from 'react-native';
import {
  isObject,
  isNumber,
} from 'lodash';
import { isAndroid} from '@southem/ui';
import { withThemes } from '@southem/theme';
import { connectAnimation } from '@southem/animation';

// A valid source is either an object with an uri key or a number (from a `require` call)
const isValidSource = (source: ImageLoadEventData) => isNumber(source) || (isObject(source) && source.uri);

interface StateImage {
  opacity: any;
  transformedProps: any;
}

export interface ImageProps extends ImageBackgroundProps {
  defaultSource?: any;
}
export type ImageElement = React.ReactElement<ImageProps>;

/**
 * A function to transform props that will be used by
 * all instances of the Image component.
 */
let externalPropsTransformer = null;

class ImageComponent extends PureComponent<ImageProps, StateImage> {
  state: StateImage;
  nativeComponent: any;
  static displayName = 'Image';

  /**
   * Set a shared props transformer. The transformer will
   * be called on each props change, and it should return
   * the transformed props.
   *
   * @param {function(props)} transformer The props transformer.
   */
  static setPropsTransformer(transformer) {
    externalPropsTransformer = transformer;
  }

  /**
   * Gets the shared props transformer. This can be useful in
   * cases when you wish to register a new transformer and
   * preserve the existing one.
   * @returns {*} The currently registered props transformer.
   */
  static getPropsTransformer() {
    return externalPropsTransformer;
  }

  constructor(props) {
    super(props);
    this.state = {
      // @ts-ignore
      opacity: new Animated.Value(0),
      transformedProps: this.createTransformedProps(props),
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState({
        transformedProps: this.createTransformedProps(nextProps),
      });
    }
  }

  setNativeProps(nativeProps) {
    this.nativeComponent.setNativeProps(nativeProps);
  }

  onLoad = () => {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 250,
    }).start();

    if (this.props.onLoad) {
      // @ts-ignore
      this.props.onLoad();
    }
  };

  onError = () => {
    const { defaultSource } = this.props;

    if (this.props.onError) {
      // @ts-ignore
      this.props.onError();
    }
    if (defaultSource) {
      // @ts-ignore
      this.setState({ source: defaultSource });
    }
  };

  createTransformedProps = (props) => {
    let transformedProps = { ...props };
    const { source, defaultSource } = props;

    // defaultSource is not supported on Android, so we manually
    // reassign the defaultSource prop to source if source is not defined
    if ( isAndroid() && !isValidSource(source)) {
      // Image views are not rendered on Android if there is no image to display,
      // so we fallback to a transparent image to be compatible with iOS
      transformedProps.source = defaultSource || require('@southem/ui/assets/images/transparent.png');
      // Fixes a bug with local image resizing on Android:
      // https://github.com/facebook/react-native/issues/4598#issuecomment-162328501
      transformedProps.style = [{ width: null, height: null, ...props.style }, { opacity: this.state.opacity }];
    } else {
      transformedProps.style = [props.style, { opacity: this.state.opacity }];
    }

    transformedProps.ref = this.captureNativeComponentRef;
    transformedProps.onLoad = this.onLoad;
    transformedProps.onError = this.onError;
    if (externalPropsTransformer) {
      transformedProps = externalPropsTransformer(transformedProps);
    }

    return transformedProps;
  };

  captureNativeComponentRef = (component) => {
    this.nativeComponent = component;
  };

  render() {
    const AnimatedImage = Animated.createAnimatedComponent(ImageBackground);
    const { transformedProps } = this.state;

    return (
      <AnimatedImage {...transformedProps} />
    );
  }
}

const AnimatedImage = connectAnimation(ImageComponent);
export const Image = withThemes('Image')(AnimatedImage);
