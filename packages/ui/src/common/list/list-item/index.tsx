// tslint:disable
import React from 'react';
import {
  GestureResponderEvent,
  ImageProps,
  StyleProp,
  StyleSheet,
  TextStyle,
  TextProps,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewProps,
} from 'react-native';
import { withThemes } from '@southem/theme';
import { View } from '../../view';
import {
  Overwrite,
  renderTextElement,
  renderIconElement,
  RenderProp,
  StyledComponentProps,
} from '../../../devsupport';

type ListItemStyledProps = Overwrite<StyledComponentProps, {
  appearance?: 'default' | string;
}>;

// @ts-ignore
export interface ListItemProps extends TouchableOpacityProps, ListItemStyledProps {
  title?: RenderProp<TextProps> | React.ReactText;
  titleStyle?: StyleProp<TextStyle>;
  description?: RenderProp<TextProps> | React.ReactText;
  descriptionStyle?: StyleProp<TextStyle>;
  accessoryLeft?: RenderProp<Partial<ImageProps>>;
  accessoryRight?: RenderProp<ViewProps>;
  children?: React.ReactNode;
}

export type ListItemElement = React.ReactElement<ListItemProps>;

/**
 * A single item rendered in List.
 * Items should be rendered within List by providing them through `renderItem` property to provide a usable component.
 *
 * @extends React.Component
 *
 * @property {ReactText | (TextProps) => ReactElement} title - String, number or a function component
 * to render within the item.
 * If it is a function, expected to return a Text.
 *
 * @property {ReactText | (TextProps) => ReactElement} description - String, number or a function component
 * to render within the item.
 * If it is a function, expected to return a Text.
 *
 * @property {(ImageProps) => ReactElement} accessoryLeft - Function component
 * to render to start of the text.
 * Expected to return an Image.
 *
 * @property {(ViewProps) => ReactElement} accessoryRight - Function component
 * to render to end of the text.
 *
 * @property {ReactNode} children - Component to render within the item.
 * Useful when needed to render a custom item and get a feedback when it is pressed.
 * If provided, *title* and other properties will be ignored.
 *
 * @property {TouchableOpacityProps} ...TouchableOpacityProps - Any props applied to TouchableOpacity component.
 *
 * @overview-example ListItemSimpleUsage
 *
 * @overview-example ListItemStyling
 * List Item and it's inner views can be styled by passing them as function components.
 *
 * In most cases this is redundant, if [custom theme is configured](guides/branding).
 * ```
 * import { ListItem, Text } from '@southem/ui';
 *
 * <ListItem
 *   title={props => <Text {...props}>TITLE</Text>}
 *   description={props => <Text {...props}>DESCRIPTION</Text>}
 * />
 * ```
 */
class ListItemComponent extends React.Component<ListItemProps> {
  public static displayName: string = 'ListItem';

  private onPress = (event: GestureResponderEvent): void => {
    if (this.props.onPress) {
      this.props.onPress(event);
    }
  };

  private onPressIn = (event: GestureResponderEvent): void => {
    if (this.props.onPressIn) {
      this.props.onPressIn(event);
    }
  };

  private onPressOut = (event: GestureResponderEvent): void => {
    if (this.props.onPressOut) {
      this.props.onPressOut(event);
    }
  };

  private onLongPress = (event: GestureResponderEvent): void => {
    if (this.props.onLongPress) {
      this.props.onLongPress(event);
    }
  };

  private renderTemplateChildren = (props: ListItemProps): React.ReactNodeArray => {
    // @ts-ignore: following props could not be provided
    const {
      description,
      descriptionStyle,
      title,
      titleStyle,
      accessoryLeft,
      accessoryRight,
    } = props;

    // @ts-ignore
    return (
      <React.Fragment>
        {renderIconElement(accessoryLeft)}
        <View style={styles.contentContainer}>
          {renderTextElement(title, { style: [styles.title, titleStyle]})}
          {renderTextElement(description, { style: [styles.description, descriptionStyle]})}
        </View>
        {renderIconElement(accessoryRight)}
      </React.Fragment>
    );
  };

  public render(): React.ReactElement<TouchableOpacityProps> {
    // @ts-ignore: following props could not be provided
    const {
      style,
      children,
      title,
      description,
      accessoryLeft,
      accessoryRight,
      ...attributes
    } = this.props;

    return (
      <TouchableOpacity
        {...attributes}
        activeOpacity={1.0}
        style={style}
        onPress={this.onPress}
        onPressIn={this.onPressIn}
        onPressOut={this.onPressOut}
        onLongPress={this.onLongPress}>
        {children || this.renderTemplateChildren(this.props)}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  title: {
    textAlign: 'left',
  },
  description: {
    textAlign: 'left',
  },
});

const mapPropToStyles = [
  'titleStyle',
  'descriptionStyle',
];
export const ListItem = withThemes('ListItem', mapPropToStyles)(ListItemComponent);
