import React from 'react';
import { StyleSheet } from 'react-native';
import { Radio } from '@southem/ui';

export const RadioInlineStylingShowcase = () => {

  const [checked, setChecked] = React.useState(false);

  const onCheckedChange = (isChecked: boolean) => {
    setChecked(isChecked);
  };

  return (
    <Radio
      style={styles.radio}
      title='Place your text'
      titleStyle={styles.radioText}
      checked={checked}
      onChange={onCheckedChange}
    />
  );
};

const styles = StyleSheet.create({
  radio: {
    width: 32,
    height: 32,
  },
  radioText: { color: '#3366FF' },
});
