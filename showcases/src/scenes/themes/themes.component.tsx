import React from 'react';
import { ListRenderItemInfo, StyleSheet } from 'react-native';
import {
  Divider,
  List,
  Switch,
  TopNavigation,
  TopNavigationAction,
} from '@southem/ui';
import { ThemeCard } from './theme-card.component';
import { SafeAreaLayout } from '../../components';
// import { ThemeContextValue, Theming } from '../../services/theme.service';
import { ThemesService } from './themes.service';
import { ThemeItem } from './type';
import { appThemes } from '../../app/app-theming';
import { MenuIcon } from '../../components';
import { RestartAppModal } from './restart-app-modal.component';

export const ThemesScreen = ({ navigation }): React.ReactElement => {
  // const themeContext: ThemeContextValue = React.useContext(Theming.ThemeContext);
  const [restartModalVisible, setRestartModalVisible] = React.useState<boolean>(false);

  const themes: ThemeItem[] = ThemesService.createThemeListItems(
    appThemes,
  );

  const onItemPress = (info: ListRenderItemInfo<ThemeItem>): void => {
    // themeContext.setCurrentTheme(info.item.name);
  };

  const isActiveTheme = (theme: ThemeItem): boolean => {
    // return themeContext.currentTheme === theme.name;
  };

  const shouldDisableItem = (theme: ThemeItem): boolean => {
    // return themeContext.currentTheme === theme.name;
  };

  const createThemeNameForItem = (theme: ThemeItem): string => {
    return `${theme.mapping} ${theme.name}`.toUpperCase();
  };

  const toggleRestartModal = (): void => {
    setRestartModalVisible(!restartModalVisible);
  };

  const renderDrawerAction = (): React.ReactElement => (
    <TopNavigationAction
      // @ts-ignore
      icon={MenuIcon}
      onPress={navigation.toggleDrawer}
    />
  );

  const renderItem = (info: ListRenderItemInfo<ThemeItem>): React.ReactElement => (
    <ThemeCard
      style={styles.item}
      title={createThemeNameForItem(info.item)}
      isActive={isActiveTheme(info.item)}
      disabled={shouldDisableItem(info.item)}
      onPress={() => onItemPress(info)}
    />
  );

  return (
    <SafeAreaLayout
      style={styles.safeArea}
      insets='top'>
      <TopNavigation
        title='Southem UI'
        accessoryLeft={renderDrawerAction()}
      />
      <Divider/>
      <List
        contentContainerStyle={styles.container}
        data={themes}
        renderItem={renderItem}
      />
      <RestartAppModal
        visible={restartModalVisible}
        onBackdropPress={toggleRestartModal}
        onGotItButtonPress={toggleRestartModal}
      />
    </SafeAreaLayout>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    padding: 8,
  },
  item: {
    margin: 8,
  },
  switch: {
    margin: 8,
    alignSelf: 'flex-end',
    flexDirection: 'row-reverse',
  },
});
