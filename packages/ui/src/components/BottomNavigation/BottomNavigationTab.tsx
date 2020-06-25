/* eslint-disable */
import React, {Component} from 'react';
import {
  StyleSheet,
  ImageProps,
  TouchableOpacityProps,
  StyleProp,
  TextStyle,
} from 'react-native';
import {isValidString} from '../../tools';
import {
  renderNode,
  Touchable,
  Text,
  Icon,
  TextProps,
} from '../../common';

type TitleElement = React.ReactElement<TextProps>;
type IconElement = React.ReactElement<ImageProps>;
type IconProp = () => IconElement;

interface ComponentProps {
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
  icon?: IconProp;
  selected?: boolean;
  onSelect?: (selected: boolean) => void;
}

export type BottomNavigationTabProps = TouchableOpacityProps & ComponentProps;

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

  private renderIconElement = (style): IconElement => {
    const iconElement: IconElement = this.props.icon();

    return renderNode(Icon, iconElement, {
      key: 1,
      style: [style, iconElement.props.style],
    });
  };

  private renderTitleElement = (style): TitleElement => {
    const {title} = this.props;

    return (<Text key={2} style={style}>{title}</Text>);
  };

  private renderComponentChildren = (): React.ReactNodeArray => {
    const {icon, title} = this.props;

    return [
      icon && this.renderIconElement(styles.icon),
      isValidString(title) && this.renderTitleElement(styles.text),
    ];
  };

  render(): React.ReactNode {
    const {style, ...derivedProps} = this.props;
    const [iconElement, titleElement] = this.renderComponentChildren();

    return (
      <Touchable
        {...derivedProps}
        style={[style, styles.container]}
        activeOpacity={1.0}
        onPress={this.onPress}>
        {iconElement}
        {titleElement}
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
