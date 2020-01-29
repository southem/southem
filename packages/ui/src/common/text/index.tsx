/* eslint-disable */
import React, { Component } from 'react';
import {
  ImageProps,
  Text as RNText,
  TextProps as RNTextProps,
} from 'react-native';
import PropTypes from 'prop-types';
import { withThemes } from '@southem/theme';
import { connectAnimation } from '@southem/animation';


type ChildElement = string | TextElement;
interface ComponentProps extends RNTextProps {
  category?: string;
  status?: string;
  children?: ChildElement | ChildElement[];
}

export type TextProps = ComponentProps;
export type TextElement = React.ReactElement<TextProps>;

/**
 * Styled Text component.
 *
 * @extends React.Component
 *
 * @property {string} status - Determines the status of the component.
 * Can be `primary`, `success`, `info`, `warning` or `danger`.
 *
 * @property {string} children - Determines text of the component.
 *
 * @property {string} category - Determines the category of the component.
 * Can be `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `s1`, `s2`, `p1`, `p2`, `c1`, `c2`, `label`.
 * Default is `p1`.
 *
 * @property {string} appearance - Determines the appearance of the component.
 * Can be `default`, `alternative`, `hint`.
 * Default is `default`.
 *
 * @property TextComponentProps
 *
 * @example Simple usage example
 *
 * ```
 * import React from 'react';
 * import { Text, TextProps } from '@southem/ui';
 *
 * export const TextShowcase = (props?: TextProps): React.ReactElement<TextProps> => {
 *   return (
 *     <Text>
 *       Sample Text
 *     </Text>
 *   );
 * };
 * ```
 */
export class TextComponent extends React.Component<TextProps> {
  public static displayName = 'Text';

  public static propTypes = {
    // @ts-ignore
    ...RNText.propTypes,
    category: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 's1', 's2', 'p1', 'p2', 'c1', 'c2', 'label']),
    status: PropTypes.oneOf(['primary', 'success', 'warning', 'danger']),
    appearance: PropTypes.oneOf(['default', 'alternative', 'hint']),
  };

  public static defaultProps = {
    // @ts-ignore
    ...RNText.defaultProps,
    category: 'p1',
    appearance: 'default',
  };

  public render(): React.ReactElement<RNTextProps> {
    const excludeProps = [
      'category',
      'status',
      'appearance',
    ];
    const extraProps = Object.keys(this.props).reduce((prop, key) => {
      if (!excludeProps.includes(`${key}`)) {
        prop[key] = this.props[key];
      }
      return prop;
    }, {});

    return (
      <RNText {...extraProps} />
    );
  }
}

const AnimatedText = connectAnimation(TextComponent);
export const Text = withThemes('Text')(AnimatedText);
export const Heading = withThemes('Heading')(AnimatedText);
export const Title = withThemes('Title')(AnimatedText);
export const Subtitle = withThemes('Subtitle')(AnimatedText);
export const Caption = withThemes('Caption')(AnimatedText);
