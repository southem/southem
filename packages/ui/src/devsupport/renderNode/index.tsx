/* eslint-disable */
import React from 'react';
import { StyleSheet } from 'react-native';
import { Icon, IconProps, IconElement } from '@southem/icons';
import { Text, TextProps, TextElement } from '../../common/text';
import {StyleType} from '../typings';

export type RenderNodeType =
  | undefined
  | boolean
  | string
  | number
  | Function
  | React.ReactElement;

export const renderNode = (Component, content: RenderNodeType, defaultProps?): React.ReactElement => {
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

export const renderTextElement = (
  component: RenderNodeType,
  defaultProps?: TextProps,
  style?: StyleType,
): TextElement =>
  renderNode(Text, component, {
    ...defaultProps,
    style: StyleSheet.flatten([style, defaultProps && defaultProps.style]),
  });

export const renderIconElement = (
  component: RenderNodeType,
  defaultProps?: IconProps,
  style?: StyleType,
): IconElement =>
  renderNode(Icon, component, {
    ...defaultProps,
    style: StyleSheet.flatten([style, defaultProps && defaultProps.style]),
  });
