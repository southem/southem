/* eslint */
import React, {Component} from 'react';
import {
  StyleSheet,
  ImageProps,
  TouchableOpacityProps,
  StyleProp,
  TextStyle,
} from 'react-native';
import {withThemes} from '@southem/theme';
import {
  Touchable,
  TextProps,
} from '../../common';
import {
  renderIconElement,
  renderTextElement,
  RenderProp,
  Overwrite,
  StyledComponentProps,
} from '../../devsupport';

type BottomNavigationTabStyledProps = Overwrite<StyledComponentProps, {
  appearance?: 'default' | string;
}>;

// @ts-ignore
export interface BottomNavigationTabProps extends TouchableOpacityProps, BottomNavigationTabStyledProps {
  title?: RenderProp<TextProps> | React.ReactText;
  titleStyle?: StyleProp<TextStyle>;
  icon?: RenderProp<Partial<ImageProps>>;
  selected?: boolean;
  onSelect?: (selected: boolean) => void;
}

export type BottomNavigationTabElement = React.ReactElement<BottomNavigationTabProps>;

/**
 * BottomNavigationTab component is a part of the BottomNavigation component.
 * BottomNavigation tabs should be wrapped in BottomNavigation to provide usable component.
 * See usage examples at BottomNavigation component documentation.
 *
 * @extends React.Component
 *
 * @property {boolean} selected - Determines whether component is selected.
 *
 * @property {string} title - Determines the title of the tab.
 *
 * @property {StyleProp<TextStyle>} titleStyle - Customizes title style.
 *
 * @property {() => React.ReactElement<ImageProps>} icon - Determines the icon of the tab.
 *
 * @property {(selected: boolean) => void} onSelect - Triggered on select value.
 *
 * @property TouchableOpacityProps
 *
 * @property StyledComponentProps
 *
 */
// @ts-ignore
@withThemes('BottomNavigationTab')
export class BottomNavigationTab extends Component<BottomNavigationTabProps> {
  static displayName = 'BottomNavigationTab';

  static defaultProps: Partial<BottomNavigationTabProps> = {
    appearance: 'default',
  };

  private onPress = () => {
    if (this.props.onSelect) {
      this.props.onSelect(!this.props.selected);
    }
  };

  render(): React.ReactNode {
    const {style, icon, title, titleStyle, ...derivedProps} = this.props;

    return (
      // @ts-ignore
      <Touchable
        {...derivedProps}
        style={[style, styles.container]}
        activeOpacity={1.0}
        onPress={this.onPress}>
        {renderIconElement(icon, { key: 1 })}
        {renderTextElement(title, { key: 2, style: titleStyle })}
      </Touchable>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
