/* eslint-disable */
import React, { Component, ReactElement } from 'react';
import {
  Image,
  ImageProps,
  ImageStyle,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import { withThemes } from '@southem/theme';

interface ComponentProps {
  shape?: string;
  size?: string;
}

export type AvatarProps = ImageProps & ComponentProps;
export type AvatarElement = React.ReactElement<AvatarProps>;
/**
 * Styled Image component.
 *
 * @extends React.Component
 *
 * @property {string} shape - Determines the shape of the component.
 * Can be `round`, `rounded` or `square`.
 * Default is `round`.
 *
 * @property {string} size - Determines the size of the component.
 * Can be `big`, `large`, `medium`, `small`, or `mini`.
 * Default is `medium`.
 *
 * @property ImageProps
 *
 * @property StyledComponentProps
 *
 * @example Simple usage example
 *
 * ```
 * import React from 'react';
 * import { Avatar, AvatarProps } from '@southem/ui';
 *
 * export const AvatarShowcase = (props?: AvatarProps): React.ReactElement<AvatarProps> => {
 *   return (
 *     <Avatar source={{uri: 'https://path-to/awesome-image.png'}} />
 *   );
 * };
 * ```
 */
export class AvatarComponent extends React.Component<AvatarProps> {
  public static displayName = 'Avatar';
  public static propTypes = {
    shape: PropTypes.oneOf(['round', 'rounded', 'square']),
    size: PropTypes.oneOf(['mini', 'small', 'medium', 'large', 'big']),
  };
  public static defaultProps = {
    shape: 'round',
    size: 'medium',
  };

  public render(): React.ReactElement<ImageProps> {
    return (
      <Image
        {...this.props}
      />
    );
  }
}

export const Avatar = withThemes('Avatar')(AvatarComponent);
