import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  ComponentsList,
  ComponentsListItemData,
} from '../../../components/menu';

interface ComponentProps {
  data: ComponentsListItemData[];
  onItemSelect: (index: number) => void;
}

type Props = ComponentProps;

export class Components extends React.Component<Props> {

  private onItemPress = (index: number) => {
    this.props.onItemSelect(index);
  };

  public render(): React.ReactNode {
    const { data } = this.props;

    return (
      <View style={styles.container}>
        <ComponentsList
          contentContainerStyle={styles.contentContainer}
          data={data}
          onItemPress={this.onItemPress}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
});
