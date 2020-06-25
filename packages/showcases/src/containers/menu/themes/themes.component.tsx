import React from 'react';
import { ListRenderItemInfo, StyleSheet } from 'react-native';
import {
  List,
  ListItemProps,
} from '@southem/ui';
import { ThemeProvider } from '@southem/theme';
import { ThemeCard } from './themeCard.component';
import { Theme } from './type';
import { fireAnalyticsEvent } from '../../../utils/analytics';

interface ComponentProps {
  data: Theme[];
  currentTheme: string;
  onToggleTheme: (name: string) => void;
}

type ThemesProps = ComponentProps;

export class Themes extends React.Component<ThemesProps> {

  private onThemeChangeAnalyticsEventError = (error: any): void => {
    console.warn('Analytics error: ', error.message);
  };

  private fireAnalyticsEvent = (theme: string): void => {
    fireAnalyticsEvent({
      category: 'Theming',
      action: 'Theme change',
      label: theme,
    })
      .catch(this.onThemeChangeAnalyticsEventError);
  };

  private onItemPress = (index: number) => {
    const { [index]: theme } = this.props.data;

    this.fireAnalyticsEvent(theme.name);
    this.props.onToggleTheme(theme.name);
  };

  private renderItem = (info: ListRenderItemInfo<Theme>): React.ReactElement<ListItemProps> => {
    const isDisabled: boolean = this.props.currentTheme === info.item.name;

    return (
      <ThemeProvider
        // @ts-ignore
        theme={info.item.theme}>
        <ThemeCard
          style={styles.item}
          title={info.item.name}
          disabled={isDisabled}
          onPress={() => {
            this.onItemPress(info.index);
          }}
        />
      </ThemeProvider>
    );
  };

  public render(): React.ReactNode {
    const { data } = this.props;

    return (
      <List
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        data={data}
        renderItem={this.renderItem}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: 'yellow',
  },
  item: {
    marginVertical: 8,
  },
});
