/* eslint-disable */
'use strict';
import React, { Component, forwardRef } from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';
import deepMerge from './tools/deepMerge';
import pickBy from './tools/pickBy';

import {
  Styles,
  ThemeType,
} from './type';

interface PrivateProps<T> {
  forwardedRef?: React.RefObject<T>;
  style?: Object;
}

interface PrivateState<T> {
  style: object;
  childrenStyle: object;
  addedProps: Function;
}

export interface ThemedComponentProps<T extends Styles<T> = any> {
  theme?: ThemeType;
  // themeStyle?: T | undefined;
}

export type ThemedComponentClass<P, S extends Styles<S>> = React.ComponentClass<ThemedComponentProps<S> & P>;

const getDisplayName = WrappedComponent => {
  return (
    WrappedComponent.displayName ||
    WrappedComponent.name ||
    (WrappedComponent.type && WrappedComponent.type.displayName)
  );
};

// @ts-ignore
// tslint:disable-next-line:max-line-length
const withThemes = (componentName: string, mapPropToStyles = []) => (WrappedComponent): ThemedComponentClass<P, S> => {

  // @ts-ignore
  type WrappedProps = ThemedComponentProps<S> & P;
  type WrappingProps = PrivateProps<WrappedElementInstance> & WrappedProps;
  type WrappingState = PrivateState<WrappedElementInstance>;
  type WrappingElement = React.ReactElement<WrappingProps>;
  type WrappedElementInstance = React.ReactInstance;

  class Wrapper extends Component<WrappingProps, WrappingState> {
    static displayName = `@theme(${getDisplayName(WrappedComponent)})`;
    static propTypes = {
      forwardedRef: PropTypes.any,
      ...WrappedComponent.propTypes,
    };

    static defaultProps = {
      ...WrappedComponent.defaultProps,
    };

    static contextTypes = {
      themeName: PropTypes.string,
      themeStyle: PropTypes.oneOfType([PropTypes.object]),
      parentStyle: PropTypes.oneOfType([PropTypes.object]),
    };

    static childContextTypes = {
      parentStyle: PropTypes.oneOfType([PropTypes.object]),
    };

    constructor(props, context) {
      super(props, context);
      const resolvedStyle = this.resolveStyle(props, context);

      this.state = {
        style: resolvedStyle.componentStyle,
        childrenStyle: resolvedStyle.styleSheets,
        addedProps: this.resolveAddedProps(resolvedStyle),
      };
    }

    getChildContext() {
      const { childrenStyle: parentStyle } = this.state;
      return {
        parentStyle,
      };
    }

    UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
      const resolvedStyle = this.resolveStyle(nextProps, nextContext);

      this.setState({
        style: resolvedStyle.componentStyle,
        childrenStyle: resolvedStyle.styleSheets,
        addedProps: this.resolveAddedProps(resolvedStyle),
      });
    }

    private resolveStyle = (props, context) => {
      const { themeStyle, parentStyle } = context;
      const { style } = props;

      // The following are currently supported attribute selector types (other types are ignored by default)
      const styledTypes = [
        'string',
        'number',
        'boolean',
      ];

      // Generate style selector
      const selectors = [
        componentName,
        ...Object
          .keys(props)
          .filter(key => styledTypes.includes(typeof props[key]))
          .map(key => `${componentName}[${key}=${props[key]}]`),
      ];

      const pickedThemeStyle = pickBy(themeStyle, (value, key) => selectors.includes(key));
      const pickedParentStyle = pickBy(parentStyle, (value, key) => selectors.includes(key));

      // Combine styles in order: theme style, parent component style, inline style
      const mergedStyle = deepMerge(
        {},
        ...Object.values(pickedThemeStyle),
        ...Object.values(pickedParentStyle),
      );
      const pickedStyle = pickBy(
        mergedStyle,
        (value, key) => !(typeof value === 'object' || mapPropToStyles.includes(key)),
      );

      const nonNullStyle = Array.isArray(style) ? style.filter(i => i) : style;
      const flattenedStyle = StyleSheet.flatten(nonNullStyle);
      const componentStyle = Object.assign({}, pickedStyle, flattenedStyle);

      return {
        styleSheets: mergedStyle, // Original style sheet
        componentStyle,
      };
    };

    private resolveAddedProps = (resolvedStyle) => {
      const styleSheets = resolvedStyle.styleSheets || {};
      return pickBy(
        styleSheets,
        (value, key) => mapPropToStyles.includes(key) && !this.props[key],
      );
    };

    public render(): React.ReactElement {
      const { addedProps, style } = this.state;
      const { forwardedRef, ...rest } = this.props;

      return (
        <WrappedComponent
          {...rest}
          {...addedProps}
          style={style}
          ref={forwardedRef}
        />
      );
    }
  }

  const WrappingElement = (props: WrappingProps, ref: React.Ref<WrappedElementInstance>): WrappingElement => {
    return (
      // @ts-ignore
      <Wrapper
        {...props}
        forwardedRef={ref}
      />
    );
  };

  const ThemedComponent = forwardRef<WrappedElementInstance, WrappingProps>(WrappingElement);

  // @ts-ignore
  return hoistNonReactStatics(ThemedComponent, Component);
};

export default withThemes;
