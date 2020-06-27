/* eslint */
import React, {Component} from 'react';
import {
  StyleSheet,
  ImageProps,
  TouchableOpacityProps,
  StyleProp,
  TextStyle,
} from 'react-native';
import {
  Touchable,
  TextProps,
} from '../../common';
import {
  renderNode,
  renderIconElement,
  renderTextElement, RenderProp,
} from '../../devsupport';

type IconElement = React.ReactElement<ImageProps>;
type IconProp = () => IconElement;

interface ComponentProps {
  title?: RenderProp<TextProps> | React.ReactText;
  titleStyle?: StyleProp<TextStyle>;
  icon?: IconProp | IconElement ;
  selected?: boolean;
  onSelect?: (selected: boolean) => void;
  appearance?: 'default' | string;
}

export type BottomNavigationTabProps = TouchableOpacityProps & ComponentProps;
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
export class BottomNavigationTab extends Component<BottomNavigationTabProps> {
  static displayName = 'BottomNavigationTab';

  private onPress = () => {
    if (this.props.onSelect) {
      this.props.onSelect(!this.props.selected);
    }
  };

  render(): React.ReactNode {
    const {style, icon, title, titleStyle, ...derivedProps} = this.props;

    return (
      <Touchable
        {...derivedProps}
        style={[style, styles.container]}
        activeOpacity={1.0}
        onPress={this.onPress}>
        {
          // @ts-ignore
          renderIconElement(icon, { key: 1 })
        }
        {
          // @ts-ignore
          renderTextElement(title, {
            key: 2,
            style: titleStyle,
          })}
      </Touchable>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {},
  text: {},
});
