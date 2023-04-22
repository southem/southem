import React from 'react';
import { AutocompleteElement } from '@southem/ui';
import { AutocompleteShowcase } from './autocomplete-showcase.component';
import { autocompleteSettings, autocompleteShowcase, AutocompletePropsCustom } from './type';
import { ShowcaseContainer } from '../../../components';

// @ts-ignore
export const AutocompleteScreen = ({ navigation }): React.ReactElement => {

  const renderItem = (props: AutocompletePropsCustom): AutocompleteElement => (
    <AutocompleteShowcase {...props} />
  );

  return (
    <ShowcaseContainer
      showcase={autocompleteShowcase}
      settings={autocompleteSettings}
      renderItem={renderItem}
      onBackPress={navigation.goBack}
    />
  );
};
