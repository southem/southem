import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { Linking } from 'react-native';
import { withThemes } from '@southem/theme';
import { merge } from 'lodash';

import {
  combineMappers,
  mapElementProps,
  ElementPropTypes,
} from '../Html';
import { isImg } from '../elements';
import { Inline } from './Inline';

class A extends PureComponent {
  static propTypes = {
    ...ElementPropTypes,
    handleLinkPress: PropTypes.func,
    href: PropTypes.string,
  };

  constructor(props, context) {
    super(props, context);
  }

  onPress = () => {
    // @ts-ignore
    const { href, handleLinkPress } = this.props;

    if (!handleLinkPress) {
      // tslint:disable-next-line:no-console
      console.log('No "handleLinkPress" handle defined on the anchor element.');
      return;
    }

    handleLinkPress(href);
  };

  renderElement = (element, style) => {
    // @ts-ignore
    const { renderElement } = this.props;

    if (isImg(element)) {
      // In the A element image can not be previewed because it opens a link.
      const inlineImage = merge({}, element, { attributes: { lightbox: false } });
      return renderElement(inlineImage, style, renderElement);
    }

    return renderElement(element, style, renderElement);
  };

  render() {
    // Because the anchor has dynamic display nature
    // it can not use the TouchableOpacity component to wrap the children.
    // The TouchableOpacity component can not be nested within the "Text" component.
    return <Inline {...this.props} onPress={this.onPress} renderElement={this.renderElement} />;
  }
}

function openLinkPress(Component) {
  return function (props) {
    function handleLinkPress(href) {
      Linking.openURL(href)
        // tslint:disable-next-line:no-console
        .catch(err => console.log('An error occurred', err));
    }

    return <Component {...props} handleLinkPress={handleLinkPress} />;
  };
}

// Named export to customize Anchor
export const Anchor = combineMappers(mapElementProps)(A);
// Default export with added link press handle
const EnhancedA = openLinkPress(A);
export default withThemes('Html.A')(combineMappers(mapElementProps)(EnhancedA));
