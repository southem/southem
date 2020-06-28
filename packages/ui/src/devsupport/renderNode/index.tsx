/* eslint-disable */
import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Text,
  Icon,
} from '../../common';

export const renderNode = (Component, content, defaultProps): React.ReactElement => {
  if (content == null || content === false) {
    return null;
  }
  if (React.isValidElement(content)) {
    return content;
  }
  if (typeof content === 'function') {
    return content(defaultProps);
  }
  // Just in case
  if (content === true) {
    return <Component {...defaultProps} />;
  }
  if (typeof content === 'string' || typeof content === 'number') {
    return <Component {...defaultProps}>{content}</Component>;
  }

  return <Component {...defaultProps} {...content} />;
};

export const renderTextElement = (component, defaultProps, style): React.ReactElement =>
  renderNode(Text, component, {
    ...defaultProps,
    style: StyleSheet.flatten([style, defaultProps && defaultProps.style]),
  });

export const renderIconElement = (component, defaultProps, style): React.ReactElement =>
  renderNode(Icon, component, {
    ...defaultProps,
    style: StyleSheet.flatten([style, defaultProps && defaultProps.style]),
  });
