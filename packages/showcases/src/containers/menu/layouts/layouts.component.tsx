import React from 'react';
import { withThemes } from '@southem/theme';
import { LayoutsList } from '../../../components/menu';
import { LayoutsData } from './type';

interface ComponentProps {
  data: LayoutsData[];
  onItemSelect: (index: number) => void;
}

class LayoutsComponent extends React.Component<ComponentProps> {

  private onItemPress = (index: number) => {
    this.props.onItemSelect(index);
  };

  public render(): React.ReactNode {
    const { data } = this.props;

    return (
      <LayoutsList
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingVertical: 16,
        }}
        data={data}
        onItemPress={this.onItemPress}
      />
    );
  }
}

export const Layouts = withThemes('Layouts')(LayoutsComponent);
