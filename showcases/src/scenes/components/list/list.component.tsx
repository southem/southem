import React from 'react';
import { StyleSheet } from 'react-native';
import { ListElement, ListProps } from '@southem/ui';
import { ListShowcase } from './list-showcase';
import { listSettings, listShowcase } from './type';
import { ShowcaseContainer } from '../../../components';

// @ts-ignore
export const ListScreen = ({ navigation }): React.ReactElement => {

  const renderItem = (props: ListProps): ListElement => (
    <ListShowcase {...props} style={[props.style, styles.component]}/>
  );

  return (
    <ShowcaseContainer
      style={styles.container}
      showcase={listShowcase}
      settings={listSettings}
      renderItem={renderItem}
      onBackPress={navigation.goBack}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
  },
  component: {
    // ignore showcase container padding
    marginHorizontal: -24,
  },
});

