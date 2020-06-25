import React from 'react';
import {
  FlexStyle,
  Platform,
  StyleSheet,
} from 'react-native';
import { ShowcaseSectionProps } from './showcaseSection.component';
import {
  ScrollableAvoidKeyboard,
  ScrollableAvoidKeyboardProps,
} from '../../../components/common';

interface ComponentProps {
  children?: ChildrenProp;
}

type ChildrenProp = ShowcaseSectionElement | ShowcaseSectionElement[];

export type ShowcaseProps = ComponentProps & ScrollableAvoidKeyboardProps;

type ShowcaseSectionElement = React.ReactElement<ShowcaseSectionProps>;

export class Showcase extends React.Component<ShowcaseProps> {

  private keyboardOffset: number | undefined = Platform.select({
    ios: 0,
    android: 228,
  });

  private isLastItem = (index: number): boolean => {
    const { children } = this.props;

    return React.Children.count(children) - 1 === index;
  };

  private renderSection = (section: ShowcaseSectionElement, index: number): ShowcaseSectionElement => {
    // @ts-ignore
    const additionalStyle: FlexStyle = this.isLastItem(index) ? null : styles.itemBorder;

    return React.cloneElement(section, {
      style: [styles.item, section.props.style, additionalStyle],
    });
  };

  private renderSections = (source: ChildrenProp): ShowcaseSectionElement[] => {
    return React.Children.map(source, this.renderSection);
  };

  public render(): React.ReactNode {
    const { style, children, ...restProps } = this.props;

    return (
      <ScrollableAvoidKeyboard
        style={[styles.container, style]}
        extraScrollHeight={this.keyboardOffset}
        {...restProps}>
        {
          // @ts-ignore
          this.renderSections(children)
        }
      </ScrollableAvoidKeyboard>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '',
  },
  item: {
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  itemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '',
  },
});
