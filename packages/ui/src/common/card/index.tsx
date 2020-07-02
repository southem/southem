import React, { PureComponent } from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  StyleProp,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
  ViewProps,
} from 'react-native';
import {
  StyleType,
  withThemes,
} from '@southem/theme';
import { connectAnimation } from '@southem/animation';
import {
  Overwrite,
  renderNode,
  RenderProp,
  StatusType,
  StyledComponentProps,
} from '../../devsupport';
import { Divider } from '../divider';
import {
  Body,
  Footer,
  Header,
} from './render';

type FooterProp = React.ReactElement;
export type CardFooterElement = FooterProp;

type CardStyledProps = Overwrite<StyledComponentProps, {
  appearance?: 'filled' | 'outline' | string;
}>;

export interface CardProps extends TouchableOpacityProps {
  status?: StatusType;
  rounded?: boolean;
  children: React.ReactNode;
  accent?: RenderProp<ViewProps>;
  header?: RenderProp<ViewProps>;
  headerStyle?: StyleProp<ViewStyle>;
  footer?: RenderProp<FooterProp>;
  footerStyle?: StyleProp<ViewStyle>;
}

export type CardElement = React.ReactElement<CardProps>;

const renderFooter = (component, defaultProps, style: StyleType): React.ReactElement =>
  renderNode(Footer, component, {
    ...defaultProps,
    style: StyleSheet.flatten([style, defaultProps && defaultProps.style]),
  });

const renderHeader = (component, defaultProps, style: StyleType): React.ReactElement =>
  renderNode(Header, component, {
    ...defaultProps,
    style: StyleSheet.flatten([style, defaultProps && defaultProps.style]),
  });

const renderStatusAccent = (component, defaultProps, style?: StyleType): React.ReactElement =>
  renderNode(View, component, {
    ...defaultProps,
    style: StyleSheet.flatten([style, defaultProps && defaultProps.style]),
  });


/**
 * Styled `Card` component is a basic content container component.
 *
 * @extends React.Component
 *
 * @property {string} appearance - Determines the appearance of the component.
 * Can be `filled` or `outline`.
 * Default is `outline`.
 *
 * @property {string} status - Determines the status of the component.
 * Can be `basic`, `primary`, `success`, `info`, `warning`, `danger` or `control`.
 * Default is `basic`.
 *
 * @property {ReactNode} children - Determines text of the component.
 *
 * @property {() => ReactElement | ReactElement<CardHeaderProps>} header - Determines header of the component.
 *
 * @property {() => ReactElement} footer - Determines footer of the component.
 *
 * @property {TouchableOpacityProps} ...TouchableOpacityProps - Any props applied to TouchableOpacity component.
 *
 * @overview-example CardSimpleUsage
 *
 * @overview-example CardWithHeaderAndFooter
 *
 * @overview-example CardCustomHeader
 *
 * @overview-example CardStatuses
 */
class CardComponent extends PureComponent<CardProps> {
  static displayName = 'Card';
  static defaultProps = {
    rounded: true,
  };

  render() {
    const {
      style,
      header,
      accent,
      headerStyle,
      children,
      footer,
      footerStyle,
      ...attributes
    } = this.props;
    return (
      <TouchableOpacity
        activeOpacity={1.0}
        style={[styles.container, style]}
        {...attributes}>
        {accent && renderStatusAccent(accent, {})}
        {header && renderHeader(header, {}, StyleSheet.flatten([styles.transparent, headerStyle]))}
        {header && <Divider/>}
        {children && renderNode(Body, children, StyleSheet.flatten([]))}
        {footer && <Divider/>}
        {footer && renderFooter(footer, {}, StyleSheet.flatten([footerStyle]))}
      </TouchableOpacity>
    );
  }
}

const AnimatedCard = connectAnimation(CardComponent);
export const Card = withThemes('Card')(AnimatedCard);

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  transparent: {
    backgroundColor: 'transparent',
  },
});
