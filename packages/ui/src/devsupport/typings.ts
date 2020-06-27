import { ReactElement } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

export type StyleType = StyleProp<ViewStyle>;
export type ChildrenProp<Element extends ReactElement = ReactElement> = Element | Element[];
export type ChildrenWithProps<Props = {}> = ChildrenProp<ReactElement<Props>>;
export type RenderProp<Props = {}> = (props?: Props) => ReactElement;

/*
 * @see https://github.com/piotrwitek/utility-types#overwritet-u
 */
export type Overwrite<T extends object, U extends object, I = Diff<T, U> & Intersection<U, T>> = Pick<I, keyof I>;

/*
 * @see https://github.com/piotrwitek/utility-types#intersectiont-u
 */
export type Intersection<T extends object, U extends object> =
  Pick<T, Extract<keyof T, keyof U> & Extract<keyof U, keyof T>>;

/*
 * @see https://github.com/piotrwitek/utility-types#setdifferencea-b-same-as-exclude
 */
export type SetDifference<A, B> = A extends B ? never : A;

/*
 * @see https://github.com/piotrwitek/utility-types#difft-u
 */
export type Diff<T extends object, U extends object> = Pick<T, SetDifference<keyof T, keyof U>>;

export type StatusType =
  | 'basic'
  | 'primary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | string;

export type SizeType =
  | 'mini'
  | 'small'
  | 'medium'
  | 'large'
  | 'big'
  | string;

export type ButtonType =
  | 'filled'
  | 'outline'
  | 'ghost';

export type ShapeType =
  | 'round'
  | 'rounded'
  | 'square'
  | string;

export type InputSizeType =
  |'small'
  | 'medium'
  | 'large'
  | string;

export type TextCategoryType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 's1'
  | 's2'
  | 'p1'
  | 'p2'
  | 'c1'
  | 'c2'
  | 'label'
  | string;

export interface StyledComponentProps {
  style: StyleType;
  appearance?: string;
}
