import React from 'react';
import {
  StyleSheet,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import { withThemes } from '@southem/theme';
import {
  ChildrenWithProps,
  SizeType,
  StatusType,
  Overwrite,
  StyledComponentProps,
} from '../../devsupport';
import {
  ButtonElement,
  ButtonProps,
} from '../button';

type ButtonGroupStyledProps = Overwrite<StyledComponentProps, {
  appearance?: 'filled' | 'outline' | string;
}>;

// @ts-ignore
export interface ButtonGroupProps extends ViewProps, ButtonGroupStyledProps {
  children: ChildrenWithProps<ButtonProps>;
  status?: StatusType;
  size?: SizeType;
}

export type ButtonGroupElement = React.ReactElement<ButtonGroupProps>;

/**
 * A group of buttons with additional styles provided by Eva.
 * ButtonGroup should contain Button components to provide a usable component.
 *
 * @extends React.Component
 *
 * @property {ReactElement<ButtonProps> | ReactElement<ButtonProps>[]} children -
 * Buttons to be rendered within the group.
 *
 * @property {string} appearance - Appearance of the component.
 * Can be `filled` or `outline`.
 * Defaults to *filled*.
 *
 * @property {string} status - Status of the component.
 * Can be `basic`, `primary`, `success`, `info`, `warning`, `danger`.
 * Defaults to *primary*.
 * Use *control* status when needed to display within a contrast container.
 *
 * @property {string} size - Size of the component.
 * Can be `mini`, `small`, `medium`, `large`, or `big`.
 * Defaults to *medium*.
 *
 * @property {ViewProps} ...ViewProps - Any props applied to View component.
 *
 * @overview-example ButtonGroupSimpleUsage
 * Button Group accepts buttons as child elements.
 *
 * @overview-example ButtonGroupAppearance
 * Appearance passed to group is also applied for grouped buttons.
 *
 * @overview-example ButtonGroupStatus
 * Same for status.
 *
 * @overview-example ButtonGroupSize
 * And size.
 *
 * @overview-example ButtonGroupOutline
 *
 * @overview-example ButtonGroupWithIcons
 */
// @ts-ignore
@withThemes('ButtonGroup')
export class ButtonGroup extends React.Component<ButtonGroupProps> {

  private isFirstElement = (index: number): boolean => {
    return index === 0;
  };

  private isLastElement = (index: number): boolean => {
    return index === React.Children.count(this.props.children) - 1;
  };

  private renderButtonElement = (element: ButtonElement, index: number): ButtonElement => {
    const { appearance, size, status } = this.props;
    const { borderRadius }: ViewStyle = styles.container;
    const { borderWidth, borderColor }: ViewStyle = styles.button;

    const shapeStyle: ViewStyle = !this.isLastElement(index) && {
      borderEndWidth: borderWidth,
      borderEndColor: borderColor,
    };

    const startShapeStyle: ViewStyle = this.isFirstElement(index) && {
      borderTopStartRadius: borderRadius,
      borderBottomStartRadius: borderRadius,
    };

    const endShapeStyle: ViewStyle = this.isLastElement(index) && {
      borderTopEndRadius: borderRadius,
      borderBottomEndRadius: borderRadius,
    };

    // @ts-ignore
    return React.cloneElement(element, {
      key: index,
      // @ts-ignore
      appearance,
      size,
      status,
      style: [styles.button, element.props.style, shapeStyle, startShapeStyle, endShapeStyle],
    });
  };

  private renderButtonElements = (source: ChildrenWithProps<ButtonProps>): ButtonElement[] => {
    return React.Children.map(source, (element: ButtonElement, index: number): ButtonElement => {
      return this.renderButtonElement(element, index);
    });
  };

  public render(): React.ReactElement<ViewProps> {
    const { style, children, ...viewProps } = this.props;

    return (
      <View
        {...viewProps}
        style={[styles.container, style]}>
        {this.renderButtonElements(children)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    overflow: 'hidden',
  },
  button: {
    borderRadius: 0,
    borderWidth: 0,
  },
});
