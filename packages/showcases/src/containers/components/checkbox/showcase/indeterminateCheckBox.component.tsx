import React from 'react';
import {
  CheckBox,
  CheckBoxProps,
} from '@southem/ui';

interface CheckBoxShowcaseComponentState {
  checked: boolean;
  indeterminate: boolean;
}

class CheckBoxShowcaseComponent extends React.Component<CheckBoxProps, CheckBoxShowcaseComponentState> {

  static defaultProps: CheckBoxProps = {
    checked: true,
    indeterminate: false,
  };

  public state: CheckBoxShowcaseComponentState = {
    // @ts-ignore
    checked: this.props.checked,
    // @ts-ignore
    indeterminate: this.props.indeterminate,
  };

  private onChange = (checked: boolean, indeterminate: boolean) => {
    this.setState({ checked, indeterminate });
  };

  public render(): React.ReactElement<CheckBoxProps> {
    return (
      <CheckBox
        {...this.props}
        checked={this.state.checked}
        indeterminate={this.state.indeterminate}
        onChange={this.onChange}
      />
    );
  }
}

export const IndeterminateCheckBox = (props?: CheckBoxProps): React.ReactElement<CheckBoxProps> => {
  return (
    <CheckBoxShowcaseComponent
      indeterminate={true}
      {...props}
    />
  );
};
