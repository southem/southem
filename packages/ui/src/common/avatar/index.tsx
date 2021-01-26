// tslint:disable
import React, { Component } from 'react';
import {
  Image,
  ImageProps,
} from 'react-native';
import { withThemes } from '@southem/theme';
import { SizeType, ShapeType, Overwrite, StyledComponentProps } from '../../devsupport';

type AvatarStyledProps = Overwrite<StyledComponentProps, {
  appearance?: 'default' | string;
}>;

export type AvatarProps<P = ImageProps> = AvatarStyledProps & P & {
  shape?: ShapeType;
  size?: SizeType;
  /**
   * We use `any` here to prevent ts complains for most of the libraries that use
   * React.ComponentType & SomeType to describe static / instance methods for the components.
   */
  ImageComponent?: React.ComponentType<P> & any;
};

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
  public static defaultProps: Partial<AvatarProps> = {
    ImageComponent: Image,
    shape: 'round',
    size: 'medium',
  };

  public render(): React.ReactElement<ImageProps> {
    const { ImageComponent, ...imageProps } = this.props;
    return (
      <ImageComponent
        {...imageProps}
      />
    );
  }
}

// @ts-ignore
// tslint:disable-next-line:max-line-length
export const Avatar = withThemes<AvatarProps>('Avatar')(AvatarComponent);
