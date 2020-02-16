import React from 'react';
import { get } from 'lodash';

import { ElementPropTypes } from '../Html';
import Image from '../components/Image';
import { combineMappers, mapElementProps } from '../Html';

export function isImg(element) {
  return get(element, 'tag') === 'img';
}

function ImgElement({ src, style, lightbox }) {
  const source = { uri: src };
  const imgStyle = {
    ...style,
    resizeMode: 'contain',
  };

  return (
    <Image
      source={source}
      style={imgStyle}
      lightbox={lightbox}
    />
  );
}

ImgElement.propTypes = {
  ...Image.propTypes,
  ...ElementPropTypes,
};

export const Img = combineMappers(mapElementProps)(ImgElement);
