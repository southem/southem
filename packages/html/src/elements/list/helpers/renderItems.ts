import React from 'react';
import { reduce } from 'lodash';

export default function renderItems(childElements, renderElement, createPrefixElement) {
  const renderedComponents = reduce(childElements, (items, element, index) => {
    const { childElements: itemChildElements } = element;

    const prefix = createPrefixElement ? createPrefixElement(element, index) : null;
    // tslint:disable-next-line:no-shadowed-variable
    const childElements = prefix ? [prefix, ...itemChildElements] : itemChildElements;

    const elem = {
      ...element,
      childElements,
    };

    items.push(renderElement(elem));
    return items;
  }, []);

  return React.Children.toArray(renderedComponents);
}
