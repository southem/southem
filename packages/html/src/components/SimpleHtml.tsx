import React, { PureComponent } from 'react';
import {
  Dimensions,
  Linking,
  StyleProp,
  ViewProps,
} from 'react-native';
import {
  get,
  omit,
} from 'lodash';
import HTML from 'react-native-render-html';
import {
  cssStringToObject,
  cssObjectToString,
} from 'react-native-render-html/src/HTMLStyles';
import {
  withThemes,
} from '@southem/theme';
import {
  View,
  Text,
  ViewElementProps,
} from '@southem/ui';

import {
  getEmptyObjectKeys,
} from '../services';

export interface SimpleHtmlProps extends ViewElementProps {
  body?: string;
  style?: StyleProp<ViewProps>;
  customTagStyles?: StyleProp<ViewProps>;
  customHandleLinkPress?: (href: string) => void;
}

export type SimpleHtmlElement = React.ReactElement<SimpleHtmlProps>;

class SimpleHtml extends PureComponent<SimpleHtmlProps> {

  onLinkPress = (evt, href) => {
    const { customHandleLinkPress } = this.props;

    return customHandleLinkPress ? customHandleLinkPress(href) : Linking.openURL(href);
  };

  /**
   * Removes empty (therefore invalid) style attribute properties
   * Scales down objects with specified width and height if too large
   */
  alterNode = (node) => {
    const { style } = this.props;

    const styleAttrib = get(node, 'attribs.style', '').trim();
    const nodeWidth = get(node, 'attribs.width', false);

    if (!styleAttrib && !nodeWidth) {
      return false;
    }

    // @ts-ignore
    const paddingValue = style.container.paddingLeft * 2;
    const maxWidth = Dimensions.get('window').width - paddingValue;
    const nodeHeight = get(node, 'attribus.height');
    const nodeRatio = nodeWidth / nodeHeight;
    const resolvedWidth = (nodeWidth > maxWidth) ? maxWidth : nodeWidth;
    const resolvedHeight =  Math.round(resolvedWidth * nodeRatio);

    const nodeStyle = cssStringToObject(styleAttrib);
    const invalidKeys = getEmptyObjectKeys(nodeStyle);

    if (invalidKeys.length || nodeWidth) {
      // @ts-ignore
      const styleFiltered = omit(style, invalidKeys);
      node.attribs.style = cssObjectToString(styleFiltered);
      node.attribs.width = resolvedWidth;
      node.attribs.height = resolvedHeight;

      return node;
    }

    return false;
  };

  renderUnorderedListPrefix = (htmlAttribs, children, convertedCSSStyles, passProps) => {
    const { style } = this.props;

    return (
      // @ts-ignore
      <Text style={style.prefix}>•  </Text>
    );
  };

  renderOrderedListPrefix = (htmlAttribs, children, convertedCSSStyles, passProps) => {
    const { style } = this.props;

    return (
      // @ts-ignore
      <Text style={style.prefix}>{passProps.index + 1}. </Text>
    );
  };

  render() {
    const { style, body, customTagStyles } = this.props;
    // @ts-ignore
    const paddingValue = style.container.paddingLeft * 2;
    const maxWidth = Dimensions.get('window').width - paddingValue;

    const tagStyles = {
      // @ts-ignore
      ...style.tags,
      // @ts-ignore
      ...customTagStyles,
    };

    const listPrefixRenderers = {
      ul: this.renderUnorderedListPrefix,
      ol: this.renderOrderedListPrefix,
    };

    const htmlProps = {
      html: body,
      imagesMaxWidth: maxWidth,
      staticContentMaxWidth: maxWidth,
      tagsStyles: tagStyles,
      ignoredStyles: ['font-family', 'letter-spacing', 'transform'],
      onLinkPress: this.onLinkPress,
      alterNode: this.alterNode,
      listsPrefixesRenderers: listPrefixRenderers,
    };

    return (
      // @ts-ignore
      <View style={style.container}>
        <HTML {...htmlProps} />
      </View>
    );
  }
}

export default withThemes('SimpleHtml')(SimpleHtml);
