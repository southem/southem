import React, { PureComponent } from 'react';
import {
  Image as RNImage,
} from 'react-native';
import { withThemes } from '@southem/theme';
import {
  min,
  isEmpty,
} from 'lodash';
import {
  Image,
  ImageProps,
  // @ts-ignore
  Lightbox,
} from '@southem/ui';

interface SourceImage {
  uri: string;
}

export interface HtmlImageProps extends ImageProps {
  source: SourceImage;
  lightbox?: boolean;
  allowUpscale?: boolean;
}

export type HtmlImageElement = React.ReactElement<HtmlImageProps>;

/**
 * Remote images must have width and height to display correctly.
 * To get the best layout, correct image dimensions are needed.
 * Image is not going to be shown before dimensions are determined,
 * this component will determine the Image dimensions before rendering an image.
 */
class HtmlImage extends PureComponent<HtmlImageProps> {
  static defaultProps = {
    lightbox: true,
    allowUpscale: false,
  };

  constructor(props) {
    super(props);

    this.state = {
      width: null,
      height: null,
    };

    this.imageSizeLoaded = this.imageSizeLoaded.bind(this);
    RNImage.getSize(props.source.uri, this.imageSizeLoaded, this.imageSizeLoadFailed);
  }

  imageSizeLoaded(width, height) {
    this.setState({ width, height });
  }

  imageSizeLoadFailed() {
    // TODO - handle properly
    // tslint:disable-next-line:no-console
    console.log('Could not load image size for image: ', this.props.source.uri);
  }

  render() {
    const { children, style, allowUpscale } = this.props;
    // @ts-ignore
    const { width, height } = this.state;

    if (!style) {
      console.warn('Invalid Html image style. Html image requires style.width.');
      return null;
    }

    // Image can not be rendered without width and height.
    if (!height || !width) {
      return null;
    }

    // Do not enlarge image.
    // If image is smaller then image style width,
    // width that fits the screen best, use actual image width.
    // @ts-ignore
    const imageWidth = allowUpscale && style.width ? style.width : min([width, style.width]);

    if ('height' in style) {
      const imageHeight = style.height || (imageWidth / width) * height;
    }
    const { source, lightbox } = this.props;

    if (isEmpty(children) && lightbox) {
      // Showing image as part of the content, can be opened (zoomed).
      // Not background image (if it has any children)
      return (
        <Lightbox
          activeProps={{ styleName: 'preview wrapper' }}
          styleName='wrapper'>
          <Image
            {...this.props}
            // @ts-ignore
            source={{ width: imageWidth, height: imageHeight, ...source }}
          />
        </Lightbox>
      );
    }

    // Showing image as background, can't be opened (zoomed).
    return (
      <Image
        {...this.props}
        // @ts-ignore
        source={{ width: imageWidth, height: imageHeight, ...source }}>
        {children}
      </Image>
    );
  }
}

export default withThemes('HtmlImage')(HtmlImage);
