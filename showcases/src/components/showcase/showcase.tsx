import React from 'react';
import { ViewStyle, StyleSheet } from 'react-native';
import {
  KeyboardAwareScrollView,
  KeyboardAwareScrollViewProps,
} from 'react-native-keyboard-aware-scroll-view';
import { ShowcaseSection } from './showcase-section';
import { ComponentShowcase, ComponentShowcaseSection } from '../../model/showcase.model';

export interface ShowcaseProps extends KeyboardAwareScrollViewProps {
  showcase: ComponentShowcase;
  settings?: { [prop: string]: any };
  renderItem: (props: any) => React.ReactElement;
}

export const Showcase = (props: ShowcaseProps): React.ReactElement => {
  const { showcase, settings, renderItem, ...containerProps } = props;

  const renderShowcaseElement = (showcaseProps: any): React.ReactElement => {
    return renderItem({ ...showcaseProps, ...settings });
  };

  const renderSectionElement = (item: ComponentShowcaseSection): React.ReactElement => (
    <ShowcaseSection
      section={item}
      renderItem={renderShowcaseElement}
    />
  );

  const renderSectionItem = (item: ComponentShowcaseSection, index: number): React.ReactElement => {
    const listItemElement: React.ReactElement = renderSectionElement(item);

    const borderStyle: ViewStyle | null = index === showcase.sections.length - 1 ? null : styles.itemBorder;

    return React.cloneElement(listItemElement, {
      key: index,
      style: [styles.item, borderStyle, listItemElement.props.style],
    });
  };

  return (
    <KeyboardAwareScrollView
      {...containerProps}
      style={[styles.container, props.style]}
      enableOnAndroid={true}
      bounces={false}>
      {showcase.sections.map(renderSectionItem)}
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  item: {
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  itemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(201,201,201,0.74)',
  },
});

