import React from 'react';
import {
  View,
  ViewProps,
  StyleSheet,
  StyleProp,
} from 'react-native';
import {
  StyleType,
} from '@southem/theme';
import {
  Text,
  Card,
  CardProps,
} from '@southem/ui';

interface ComponentProps {
  title: string;
  disabled: boolean;
  style: StyleProp<StyleType>;
}

export type ThemeCardComponentProps = CardProps & ComponentProps;

export class ThemeCard extends React.Component<ThemeCardComponentProps> {

  private renderColors = (style: StyleType, index: number): React.ReactElement<ViewProps> => {
    return (
      <View
        key={index}
        style={[styles.colorItem, style]}
      />
    );
  };

  private renderHeader = (): React.ReactElement<ViewProps> => (
    <View style={styles.header}>
      <Text category='h6'>
        {this.props.title}
      </Text>
      <Text
        appearance='hint'
        category='c1'>
        {this.props.disabled && 'ACTIVE'}
      </Text>
    </View>
  );

  public render(): React.ReactNode {
    const { style, title, ...restProps } = this.props;

    const colors: StyleType[] = [
      styles.colorItem1,
      styles.colorItem2,
      styles.colorItem3,
      styles.colorItem4,
      styles.colorItem5,
      styles.colorItem6,
    ];

    return (
      <Card
        {...restProps}
        header={this.renderHeader}>
        <View style={styles.colorContainer}>
          {colors.map(this.renderColors)}
        </View>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  colorContainer: {
    marginTop: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  colorItem: {
    width: 40,
    height: 40,
    borderRadius: 4,
    marginHorizontal: 2,
  },
  colorItem1: {
    backgroundColor: 'blue',
  },
  colorItem2: {
    backgroundColor: 'yellow',
  },
  colorItem3: {
    backgroundColor: 'red',
  },
  colorItem4: {
    backgroundColor: 'white',
  },
  colorItem5: {
    backgroundColor: 'black',
  },
  colorItem6: {
    backgroundColor: 'blue',
  },
});
