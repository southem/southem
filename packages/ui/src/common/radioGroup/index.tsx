import React from 'react';
import {
  View,
  ViewProps,
} from 'react-native';
import { withThemes } from '@southem/theme';
import {
  ChildrenWithProps,
  Overwrite,
  StyleType,
  StyledComponentProps,
} from '../../devsupport';
import {
  RadioElement,
  RadioProps,
} from '../radio';

type RadioGroupStyledProps = Overwrite<StyledComponentProps, {
  appearance?: 'default' | string;
}>;

// @ts-ignore
export interface RadioGroupProps extends ViewProps, RadioGroupStyledProps {
  children?: ChildrenWithProps<RadioProps>;
  selectedIndex?: number;
  onChange?: (index: number) => void;
}

export type RadioGroupElement = React.ReactElement<RadioGroupProps>;

/**
 * Provides to select a single state from multiple options.
 * RadioGroup should contain Radio components to provide a useful component.
 *
 * @extends React.Component
 *
 * @property {number} selectedIndex - Index of currently checked radio.
 *
 * @property {(number) => void} onChange - Called when one of the radios is pressed.
 *
 * @property {ViewProps} ...ViewProps - Any props applied to View component.
 *
 * @overview-example RadioGroupSimpleUsage
 */
// @ts-ignore
@withThemes('RadioGroup')
export class RadioGroup extends React.Component<RadioGroupProps> {

  static defaultProps: Partial<RadioGroupProps> = {
    selectedIndex: -1,
  };

  private onRadioChange = (index: number): void => {
    this.props.onChange && this.props.onChange(index);
  };

  private renderRadioElements = (source: ChildrenWithProps<RadioProps>): RadioElement[] => {
    return React.Children.map(source, (element: RadioElement, index: number): RadioElement => {
      return React.cloneElement(element, {
        key: index,
        style: [element.props.style],
        checked: this.props.selectedIndex === index,
        onChange: () => this.onRadioChange(index),
      });
    });
  };

  public render(): React.ReactElement<ViewProps> {
    const { style, children, ...viewProps } = this.props;

    const radioElements: RadioElement[] = this.renderRadioElements(children);

    return (
      <View
        {...viewProps}
        style={style}>
        {radioElements}
      </View>
    );
  }
}
