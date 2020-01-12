/* tslint:disable */
'use strict';
import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
import Theme from './Theme';

interface ThemeProviderProps {
  children: any;
  theme: String;
}

class ThemeProvider extends Component<ThemeProviderProps> {
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

export default ThemeProvider;
