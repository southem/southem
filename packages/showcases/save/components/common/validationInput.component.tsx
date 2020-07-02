import React from 'react';
import {
  Input,
  InputProps,
} from '@southem/ui';

interface ComponentProps extends InputProps {
  validator: (value: string) => boolean;
  formatter?: (value: string, stateValue: string) => string;
  /**
   * Will emit changes depending on validation:
   * Will be called with input value if it is valid, otherwise will be called with undefined
   */
  onChangeText?: (value: string | undefined) => void;
}

interface State {
  value: string;
}

export type ValidationInputProps = ComponentProps;

/**
 * You probably don't need to pass `value` prop into this component
 */
export class ValidationInput extends React.Component<ValidationInputProps, State> {

  public state: State = {
    // @ts-ignore
    value: this.props.value,
  };

  // @ts-ignore
  public componentDidUpdate(prevProps: ValidationInputProps, prevState: State) {
    const { value: oldValue } = prevState;
    const { value: newValue } = this.state;

    const becomeValid: boolean = !this.isValid(oldValue) && this.isValid(newValue);
    const becomeInvalid: boolean = !this.isValid(newValue) && this.isValid(oldValue);

    if (becomeValid && this.props.onChangeText) {
      this.props.onChangeText(newValue);
    } else if (becomeInvalid && this.props.onChangeText) {
      this.props.onChangeText(undefined);
    }
  }

  private onChangeText = (text: string) => {
    const { formatter } = this.props;

    const value: string = formatter ? formatter(text, this.state.value) : text;

    this.setState({ value }, this.onValueChange);
  };

  private onValueChange = () => {
    const { value } = this.state;

    if (this.isValid(value) && this.props.onChangeText) {
      this.props.onChangeText(value);
    }
  };

  private isValid = (value: string): boolean => {
    const { validator } = this.props;

    return validator(value);
  };

  private getStatus = (): string | undefined => {
    const { value } = this.state;

    if (value && value.length) {
      return this.isValid(value) ? 'success' : 'danger';
    }

    return undefined;
  };

  public render(): React.ReactNode {
    // @ts-ignore
    const { style, ...restProps } = this.props;

    return (
      <Input
        autoCapitalize='none'
        status={this.getStatus()}
        {...restProps}
        value={this.state.value}
        style={[{}, style]}
        onChangeText={this.onChangeText}
      />
    );
  }
}
