import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  ViewProps,
  StyleProp,
  InteractionManager,
} from 'react-native';
import {
  get,
  some,
  reduce,
  assign,
  isUndefined,
} from 'lodash';
import {
  withThemes,
} from '@southem/theme';
import {
  View,
  ActivityIndicator,
} from '@southem/ui';
import {
  registerElement,
  getElement,
  getElementDisplay,
  getElementProperty,
  Display,
  parseHtml,
} from './services';

import {
  A,
  Br,
  Img,
  Text,
  Video,
  Block,
  Inline,
  Virtual,
  InlineSettings,
} from './elements';
import { Ul, Ol, Li, Bullet, Number } from './elements/list';

// @ts-ignore
export interface HtmlProps extends ViewProps {
  body: string;
  style?: StyleProp<ViewProps>;
  renderElement?: () => void;
}

export type HtmlElement = React.ReactElement<HtmlProps>;

interface State {
  htmlTree: any;
}

const defaultElementSettings = {
  display: Display.BLOCK,
};

class HtmlComponent extends PureComponent<HtmlProps, State> {
  // @ts-ignore
  state: State;
  public static displayName: string = 'Html';

  /**
   * Create Element class for given element tag and add it to the ElementClassMap.
   * Use the settings to additionally describe a Element class.
   * @param elementTag {string} HTML element tag
   * @param component {Component} React Native Component
   * @param settings {Object} Default settings override
   *   Most times a developer will only want to override one setting,
   *   that's why settings are merged with defaultElementSettings.
   * @param settings.display {Display || Function}
   *   Describe component display.
   *   Can be a function to dynamically resolve display.
   */
  static registerElement(elementTag, component, settings = {}) {
    const elementSettings = assign({}, defaultElementSettings, settings);

    registerElement(elementTag, { ...elementSettings, component });
  }

  static getElement(tag) {
    // TODO - standardize ElementRegistry getElement
    return getElement({ tag });
  }

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      this.refreshData(this.props);
    });
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.refreshData(nextProps, this.props);
  }

  refreshData = (nextProps, props = {}) => {
    const { body: nextBody } = nextProps;
    // @ts-ignore
    const { body } = props;

    if (nextBody && nextBody !== body) {
      const htmlTree = parseHtml(nextBody);
      this.setState({ htmlTree });
    }
  };

  /**
   * Get element style from the Html instance style.
   * @param element {Element}
   * @returns {Object|undefined}
   */
  getElementStyle = ({ tag }) => {
    const { style } = this.props;
    return get(style, tag, {});
  };

  /**
   * Render HTML element as React Native component.
   * This method is passed to both custom renderElement and
   * element corresponding component. It is also used to render children
   * and should be passed down the tree so that children can be rendered.
   * If Html has style named by element tag it will be passed to rendered element.
   * @param element {Element} Parsed HTML element
   * @returns {Component} The element rendered as a React Native component
   */
  renderElement = (element) => {
    const elementStyle = this.getElementStyle(element);
    let renderedElement;

    if (this.props.renderElement) {
      // @ts-ignore
      renderedElement = this.props.renderElement(element, elementStyle, this.renderElement);
    }

    // Custom renderElement for the specific Html implementation
    // has advantage over the "global". If custom renderElement rendered
    // a component that component will be used, otherwise fallback to "global".
    // Render element must be undefined to fallback to default,
    // null is a valid RN type to render.
    if (isUndefined(renderedElement)) {
      const ElementComponent = getElementProperty(element, 'component');

      if (!ElementComponent) {
        // tslint:disable-next-line:no-console
        console.log('Can not find component for element: ', element.tag);
        return null;
      }

      renderedElement = (
        <ElementComponent
          element={element}
          style={elementStyle}
          renderElement={this.renderElement}
        />
      );
    }

    return renderedElement;
  }

  render() {
    const { style, body } = this.props;
    const { htmlTree } = this.state;

    if (!body) {
      return null;
    }

    if (!htmlTree) {
      // Either still processing the Html or
      // waiting for layout animations to complete
      return (
        <View styleName='md-gutter'>
          <ActivityIndicator size='small' />
        </View>
      );
    }

    const htmlRootElement = htmlTree.getRootNode();

    return (
      // @ts-ignore
      <View style={style.container}>
        {this.renderElement(htmlRootElement)}
      </View>
    );
  }
}

// Text elements with primary inline display
HtmlComponent.registerElement('em', Inline, InlineSettings);
HtmlComponent.registerElement('i', Inline, InlineSettings);
HtmlComponent.registerElement('strong', Inline, InlineSettings);
HtmlComponent.registerElement('b', Inline, InlineSettings);
HtmlComponent.registerElement('span', Inline, InlineSettings);
HtmlComponent.registerElement('blockquote', Inline, InlineSettings);

// Functional
HtmlComponent.registerElement('a', A, InlineSettings);
HtmlComponent.registerElement('img', Img);
HtmlComponent.registerElement('br', Br, InlineSettings);
HtmlComponent.registerElement('video', Video);

// Containers
HtmlComponent.registerElement('header', Virtual);
HtmlComponent.registerElement('content', Virtual);
HtmlComponent.registerElement('article', Virtual);
HtmlComponent.registerElement('footer', Virtual);
HtmlComponent.registerElement('section', Virtual);

// List
HtmlComponent.registerElement('ul', Ul);
HtmlComponent.registerElement('ol', Ol);
HtmlComponent.registerElement('li', Li);
HtmlComponent.registerElement('bullet', Bullet, { display: Display.INLINE });
HtmlComponent.registerElement('number', Number, { display: Display.INLINE });

// Text base
HtmlComponent.registerElement('text', Text, { display: Display.INLINE });

// Text elements with block display
HtmlComponent.registerElement('h1', Block);
HtmlComponent.registerElement('h2', Block);
HtmlComponent.registerElement('h3', Block);
HtmlComponent.registerElement('h4', Block);
HtmlComponent.registerElement('h5', Block);
HtmlComponent.registerElement('h6', Block);
HtmlComponent.registerElement('p', Block);
HtmlComponent.registerElement('div', Block);
export const ElementPropTypes = {
  childElements: PropTypes.array,
  renderElement: PropTypes.func,
  inlineStyle: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export const Html =  withThemes('Html')(HtmlComponent);

/* Helpers */

/**
 * @param element {Element}
 * @returns {boolean}
 */
export const isBlockElement = function (element) {
  // @ts-ignore
  return getElementDisplay(element, 'display') === Display.BLOCK;
};

/**
 * @param elements {Array}
 * @returns {boolean}
 */
export const hasBlockElement = function (elements) {
  return some(elements, isBlockElement);
};

/**
 * Use to create an enhanced component that mapS
 * element (description) to the wrapped component props.
 * Element is default property that Html renderElement provides to the components.
 * @param mapFunctions {Array}
 *  List of functions that map element description to the component props.
 * @returns {function({element, renderElement}): Component}
 *  Returns HOC that will map component props with provided map functions.
 */
export const combineMappers = function (...mapFunctions) {
  return WrappedComponent => props => {
    // eslint-disable-next-line prefer-arrow-callback
    const customizedProps = reduce(mapFunctions, function (result, mapFunction) {
      return {
        ...result,
        ...mapFunction(props),
      };
    }, { ...props });

    return <WrappedComponent {...customizedProps} />;
  };
};

/**
 * Destruct an element description to the component props format.
 * @param props {{ element, renderElement }}
 * @returns {Object}
 */
export const mapElementProps = function ({ element, style }) {
  const { childElements, attributes, tag } = element;
  return {
    ...attributes,
    style,
    childElements,
    htmlInlineStyle: attributes.style,
    elementTag: tag,
  };
};

/**
 * @param childElements {Array}
 * @param renderElement {Function}
 * @returns {Children}
 */
export const renderChildElements = function (childElements, renderElement) {
  return React.Children.toArray(childElements.map(renderElement));
};

/**
 * Render and map elements to the children prop.
 * @param element {Element}
 * @param renderElement {Function}
 * @returns {Object} Props with children prop
 */
export const renderChildren = function ({ element, renderElement }) {
  const { childElements } = element;
  return {
    children: renderChildElements(childElements, renderElement),
  };
};

/**
 * Extend the original renderElement with a customizer.
 * If the customizer doesn't render a element, renderElement will be used.
 * It can be used to customize renderElement from certain element node.
 * @param customizer {Function}
 * @param renderElement {Function}
 * @returns {Component}
 */
export const customizeRenderElement = function (customizer, renderElement) {
  return function (element) {
    const renderedElement = customizer(element);
    if (renderedElement) {
      return renderedElement;
    }

    return renderElement(element);
  };
};
