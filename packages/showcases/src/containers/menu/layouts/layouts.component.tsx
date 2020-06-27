import React from 'react';
import { LayoutsList } from '../../../components/menu';
import { LayoutsData } from './type';

interface ComponentProps {
  data: LayoutsData[];
  onItemSelect: (index: number) => void;
}

export class Layouts extends React.Component<ComponentProps> {

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
