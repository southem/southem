// tslint:disable
import React from 'react';
import {
  GestureResponderEvent,
  ImageStyle,
  StyleProp,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import {
  StyleType,
  withThemes,
} from '@southem/theme';
import {
  View,
  ViewElementProps,
} from '../../view';
import {
  Text,
  TextProps,
  TextElement,
} from '../../text';
import {
  Icon,
  IconProps,
  IconElement,
} from '../../icon';

import {
  renderNode,
  isValidString
} from '@southem/ui';

type IconProp = (style: StyleType, index: number) => IconElement;
type AccessoryProp = (style: StyleType, index: number) => React.ReactElement;

interface ListDerivedProps {
  index?: number;
  onPress?(index: number, event: GestureResponderEvent): void;
  onPressIn?(index: number, event: GestureResponderEvent): void;
  onPressOut?(index: number, event: GestureResponderEvent): void;
  onLongPress?(index: number, event: GestureResponderEvent): void;
}

interface TemplateBaseProps extends TouchableOpacityProps {
  icon?: IconProp;
  iconStyle?: StyleProp<ViewStyle>;
}

interface TemplateTitleProps extends TemplateBaseProps {
  title: string;
  description?: string;
  titleStyle?: StyleProp<TextStyle>;
}

interface TemplateDescriptionProps extends TemplateBaseProps {
  title?: string;
  description: string;
  descriptionStyle?: StyleProp<TextStyle>;
}

interface CustomContentProps {
  children?: React.ReactNode;
  accessory?: AccessoryProp;
}

export type ListItemProps = (TemplateTitleProps | TemplateDescriptionProps | CustomContentProps) & ListDerivedProps;
export type ListItemElement = React.ReactElement<ListItemProps>;

class ListItemComponent extends React.Component<ListItemProps> {
  public static displayName: string = 'ListItem';

  private onPress = (event: GestureResponderEvent): void => {
    if (this.props.onPress) {
      this.props.onPress(this.props.index, event);
    }
  };

  private onPressIn = (event: GestureResponderEvent): void => {
    if (this.props.onPressIn) {
      this.props.onPressIn(this.props.index, event);
    }
  };

  private onPressOut = (event: GestureResponderEvent): void => {
    if (this.props.onPressOut) {
      this.props.onPressOut(this.props.index, event);
    }
  };

  private onLongPress = (event: GestureResponderEvent): void => {
    if (this.props.onLongPress) {
      this.props.onLongPress(this.props.index, event);
    }
  };

  private renderIconElement = (style: ImageStyle): IconElement => {
    // @ts-ignore: will be not executed if `icon` prop is provided
    const { index, icon } = this.props;

    const iconElement: IconElement = icon(style, index);

    return renderNode(Icon, iconElement, {
      key: 0,
      style: [style, iconElement.props.style],
    });
  };

  private renderContentElement = (): React.ReactElement<ViewElementProps> => {
    // @ts-ignore
    const { contentContainer } = this.props;
    const [titleElement, descriptionElement] = this.renderContentElementChildren();

    return (
      <View
        key={1}
        style={contentContainer}>
        {titleElement}
        {descriptionElement}
      </View>
    );
  };

  private renderTitleElement = (style: StyleType): TextElement => {
    // @ts-ignore: will be not executed if `title` property is provided
    const { title, titleStyle } = this.props;

    return (
      <Text
        key={2}
        style={[style, titleStyle]}>
        {title}
      </Text>
    );
  };

  private renderDescriptionElement = (style: StyleType): TextElement => {
    // @ts-ignore: will be not executed if `description` property is provided
    const { description, descriptionStyle } = this.props;

    return (
      <Text
        key={3}
        style={[style, descriptionStyle]}>
        {description}
      </Text>
    );
  };

  private renderAccessoryElement = (style: StyleType): React.ReactElement => {
    // @ts-ignore: will be not executed if `accessory` property is provided
    const { index, accessory } = this.props;

    const accessoryElement: React.ReactElement = accessory(style, index);

    return renderNode(Icon, accessoryElement, {
      key: 4,
      style: [style, accessoryElement.props.style],
    });
  };

  private renderContentElementChildren = (): React.ReactNodeArray => {
    // @ts-ignore: will be not executed if any of properties below is provided
    const { title, titleStyle, description, descriptionStyle } = this.props;

    return [
      isValidString(title) && this.renderTitleElement(titleStyle),
      isValidString(description) && this.renderDescriptionElement(descriptionStyle),
    ];
  };

  private renderTemplateChildren = (): React.ReactNodeArray => {
    // @ts-ignore: following props could not be provided
    const { icon, iconStyle, title, description, accessory, accessoryStyle } = this.props;

    return [
      icon && this.renderIconElement(iconStyle),
      (title || description) && this.renderContentElement(),
      accessory && this.renderAccessoryElement(accessoryStyle),
    ];
  };

  private renderComponentChildren = (): React.ReactNode => {
    const { children } = this.props;

    return children ? children : this.renderTemplateChildren();
  };

  public render(): React.ReactElement<TouchableOpacityProps> {
    // @ts-ignore: following props could not be provided
    const { style, ...attributes } = this.props;

    const componentChildren: React.ReactNode = this.renderComponentChildren();

    return (
      <TouchableOpacity
        activeOpacity={1.0}
        {...attributes}
        style={style}
        onPress={this.onPress}
        onPressIn={this.onPressIn}
        onPressOut={this.onPressOut}
        onLongPress={this.onLongPress}>
        {componentChildren}
      </TouchableOpacity>
    );
  }
}

export const ListItem = withThemes('ListItem')(ListItemComponent);
