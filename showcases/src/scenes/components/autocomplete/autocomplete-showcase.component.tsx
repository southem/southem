import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Autocomplete,
  AutocompleteElement,
  AutocompleteItem,
} from '@southem/ui';
import { AutocompletePropsCustom } from './type';


export const AutocompleteShowcase = (props: AutocompletePropsCustom): AutocompleteElement => {

  const [value, setValue] = React.useState(props.value);
  const [data, setData] = React.useState(props.data);

  const onSelect = (index: number): void => {
    setValue(props.data[index].title);
  };

  const RenderComponent = props.renderItem;

  const onChangeText = (query: string): void => {
    const visibleData = props.data.filter((item) => {
      return item.title.toLowerCase().includes(query.toLowerCase());
    });

    setValue(query);
    setData(visibleData);
  };

  const renderOption = (item, index): React.ReactElement => (
    <AutocompleteItem key={index} title={item.title} />
  );

  return (
    <Autocomplete
      {...props}
      style={styles.autocomplete}
      value={value}
      onChangeText={onChangeText}
      onSelect={onSelect}>
      {data.map(RenderComponent || renderOption)}
    </Autocomplete>
  );
};

const styles = StyleSheet.create({
  autocomplete: {
    minWidth: 192,
  },
});
