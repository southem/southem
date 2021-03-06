import React from 'react';
import { TabView, TabViewElement, TabViewProps } from '@southem/ui';

export const TabViewShowcase = (props: TabViewProps): TabViewElement => {

  const [selectedIndex, setSelectedIndex] = React.useState(props.selectedIndex);

  return (
    <TabView
      {...props}
      selectedIndex={selectedIndex}
      onSelect={setSelectedIndex}
    />
  );
};
