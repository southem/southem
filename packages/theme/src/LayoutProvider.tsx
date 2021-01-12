/* tslint:disable */
'use strict';
import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
import Theme from './Theme';

interface ComponentProps {
  children: React.ReactNode;
  theme: String;
}

export type LayoutProviderProps = ComponentProps;
export type LayoutProviderElement = React.ReactElement<LayoutProviderProps>;

export class LayoutProvider extends Component<LayoutProviderProps> {
  static propTypes = {
    children: PropTypes.element.isRequired,
    theme: PropTypes.string,
  };

  static defaultProps = {
    theme: 'default',
  };

  static childContextTypes = {
    themeName: PropTypes.string,
    themeStyle: PropTypes.object,
  };

  getChildContext() {
    const themeName = this.props.theme;
    const themeStyle = Theme.getTheme(themeName);
    return { themeName, themeStyle };
  }

  render() {
    return Children.toArray(this.props.children);
  }
}
