import React from 'react';
import { Text as RNText } from 'react-native';
import {
  get,
  map,
  size,
  isString,
} from 'lodash';
import { AllHtmlEntities as Entities } from 'html-entities';

import {
  combineMappers,
  mapElementProps,
  ElementPropTypes,
} from '../Html';

const html = new Entities();

function isWhiteSpaceWrappedWithText(element) {
  return size(element.childElements) === 1 && isWhiteSpaceString(element.childElements[0]);
}

function isWhiteSpaceString(element) {
  return isString(element) && element.trim().length === 0;
}

function isWhiteSpace(element) {
  return isWhiteSpaceString(element) || isWhiteSpaceWrappedWithText(element);
}

export function isText(element) {
  const elementTag = get(element, 'tag');
  return isString(element) || elementTag === 'text';
}

export function removeWhiteSpace(childElements) {
  return childElements.filter(child => !isWhiteSpace(child));
}

export function decodeHtmlEntities(childElements) {
  return map(childElements, (element) => isString(element) ? html.decode(element) : element);
}

function TextElement(props) {
  // Remove empty white space lines used just to move element in new line.
  // Use "p" or "br" to add new line.
  const textualChildElements = decodeHtmlEntities(removeWhiteSpace(props.childElements));

  if (textualChildElements.length === 0) {
    // Even if there is no children to render, the Text must be rendered
    // because otherwise RN may render a View to wrap a "null" which may lead to
    // a case where a View is in the Text.
    return <RNText style={{ height: 0 }} />;
  }

  // Must be the RN Text so that style inheritance chain
  // doesn't break with additional layer.
  return <RNText {...props}>{textualChildElements}</RNText>;
}

TextElement.propTypes = {
  ...ElementPropTypes,
};

export const Text = combineMappers(mapElementProps)(TextElement);
