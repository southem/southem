// tslint:disable
import React, { Component } from 'react';
import {
  Image,
  ImageProps,
} from 'react-native';
import { withThemes } from '@southem/theme';
import { SizeType, ShapeType } from '../../devsupport';

export interface AvatarProps extends ImageProps {
  shape?: ShapeType;
  size?: SizeType;
}

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

// @ts-ignore
// tslint:disable-next-line:max-line-length
export const Avatar = withThemes<AvatarProps>('Avatar')(AvatarComponent);
