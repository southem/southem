import React, { PureComponent } from 'react';
import {
  StyleSheet,
  View,
  StyleProp,
  TextStyle,
  ViewStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  AccessibilityProps,
} from 'react-native';
import {
  Icon,
  platform,
  renderNode,
} from '@southem/ui';
import {StyleType, withThemes} from '@southem/theme';
import { connectAnimation } from '@southem/animation';
import {
  Divider,
  DividerElement,
} from '../divider';
import {
  CardHeader,
  CardHeaderElement,
} from './cardHeader';
import {
  Body,
  Footer,
} from './render';

interface HeaderProps {
  style: StyleProp<ViewStyle>;
  accent: StyleProp<ViewStyle>;
  title: StyleProp<TextStyle>;
  description: StyleProp<TextStyle>;
}

type HeaderProp = React.ReactElement | CardHeaderElement;
type FooterProp = React.ReactElement;
export type CardFooterElement = FooterProp;

export interface CardProps extends TouchableOpacityProps {
  appearance?: string;
  status?: string;
  rounded?: boolean;
  children: React.ReactNode;
  header?: () => HeaderProp;
  headerStyle?: StyleProp<ViewStyle>;
  headerProps?: StyleProp<HeaderProps>;
  footer?: () => FooterProp;
  footerStyle?: StyleProp<ViewStyle>;
}

export type CardElement = React.ReactElement<CardProps>;

const renderFooter = (component, defaultProps, style: StyleType) =>
  renderNode(Footer, component, {
    ...defaultProps,
    style: StyleSheet.flatten([style, defaultProps && defaultProps.style]),
  });

const renderHeader = (component, defaultProps, style: StyleType) =>
  renderNode(CardHeader, component, {
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
    headerProps: {
      accent: null,
      title: null,
      description: null,
    },
  };

  private renderDivider = (): DividerElement => {
    return (
      <Divider />
    );
  };

  private renderHeader = (headerProps: HeaderProps, style: StyleType): HeaderProp => {
    const Header: HeaderProp = this.props.header();

    return renderHeader(Header, {
      accentStyle: headerProps.accent,
      titleStyle: headerProps.title,
      descriptionStyle: headerProps.description,
    }, [headerProps.style, style, Header.props.style]);
  };

  private renderFooter = (style: StyleType): FooterProp => {
    const footer: FooterProp = this.props.footer();

    return renderFooter(footer, {}, [style, footer.props.style]);
  };

  render() {
    const {
      style,
      header,
      headerStyle,
      headerProps,
      children,
      footer,
      footerStyle,
      ...attributes
    } = this.props;
    return (
      <TouchableOpacity
        activeOpacity={1.0}
        style={style}
        {...attributes}>
        // @ts-ignore
        {header && this.renderHeader(headerProps, headerStyle)}
        {header && this.renderDivider()}
        {children && renderNode(
          Body,
          children,
          StyleSheet.flatten([]),
        )}
        {footer && this.renderDivider()}
        // @ts-ignore
        {footer && this.renderFooter(footerStyle)}
      </TouchableOpacity>
    );
  }
}

const AnimatedCard = connectAnimation(CardComponent);
export const Card = withThemes('Card')(AnimatedCard);
