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
  ListItem,
  ListItemProps,
  Text,
} from '@southem/ui';

interface ComponentProps {
  title: string;
  disabled: boolean;
  style: StyleProp<StyleType>;
}

export type ThemeCardComponentProps = ListItemProps & ComponentProps;

export class ThemeCard extends React.Component<ThemeCardComponentProps> {

  private getCardStatus = (): string => {
    return this.props.disabled ? 'ACTIVE' : '';
  };

  private renderColors = (style: StyleType, index: number): React.ReactElement<ViewProps> => {
    return (
      <View
        key={index}
        style={[styles.colorItem, style]}
      />
    );
  };

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

    const cardStatus: string = this.getCardStatus();

    return (
      <ListItem
        {...restProps}
        style={[styles.container, style]}>
        <View style={styles.headerContainer}>
          <Text
            style={styles.titleLabel}
            category='h6'>
            {title}
          </Text>
          <Text category='label'>
            {cardStatus}
          </Text>
        </View>
        <View style={styles.colorContainer}>
          {colors.map(this.renderColors)}
        </View>
      </ListItem>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    borderRadius: 8,
    overflow: 'hidden',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  colorContainer: {
    marginTop: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleLabel: {
    flex: 1,
  },
  colorItem: {
    width: 40,
    height: 40,
    borderRadius: 6,
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
