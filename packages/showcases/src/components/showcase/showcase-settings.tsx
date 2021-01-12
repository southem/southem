import React from 'react';
import { I18nManager, StyleSheet, ViewProps } from 'react-native';
import {
  Button,
  CheckBox,
  Layout,
  OverflowMenu,
  MenuItemProps,
} from '@southem/ui';
import { TypeTheme } from '@southem/theme';
import { ColorPaletteIcon, SettingsIcon, TrashIcon } from '../icons';
import { ComponentShowcaseSetting } from '../../model/showcase.model';
import { AppReloadService } from '../../services/app-reload.service';

export interface ShowcaseSettingsProps extends ViewProps {
  themes?: TypeTheme[];
  settings?: ComponentShowcaseSetting[];
  onThemeSelect?: (theme: TypeTheme) => void;
  onSettingSelect?: (setting: { [prop: string]: any }) => void;
  onReset: () => void;
}

export const ShowcaseSettings = (props: ShowcaseSettingsProps): React.ReactElement => {

  const [themesMenuVisible, setThemesMenuVisible] = React.useState<boolean>(false);
  const [settingsMenuVisible, setSettingsMenuVisible] = React.useState<boolean>(false);

  const createSettingMenuItem = (setting: ComponentShowcaseSetting): MenuItemProps => {
    return {
      title: setting.description || `${setting.propertyName}: ${setting.value}`,
    };
  };

  const createThemeMenuItem = (title: string): MenuItemProps => {
    return { title };
  };

  const onThemeSelect = (index: number): void => {
    // @ts-ignore
    props.onThemeSelect(props.themes[index]);
    setThemesMenuVisible(false);
  };

  const onResetButtonPress = (): void => {
    props.onReset();
  };

  const onSettingSelect = (index: number): void => {
    // @ts-ignore
    const { [index]: setting } = props.settings;

    // @ts-ignore
    props.onSettingSelect({
      [setting.propertyName]: setting.value,
    });

    setSettingsMenuVisible(false);
  };

  const createThemesMenuItems = (): MenuItemProps[] => {
    // @ts-ignore
    return props.themes && props.themes.map(createThemeMenuItem);
  };

  const createSettingsMenuItems = (): MenuItemProps[] => {
    const settings = props.settings && props.settings.map(createSettingMenuItem);
    return settings || [];
  };

  const toggleThemesMenu = (): void => {
    setThemesMenuVisible(!themesMenuVisible);
  };

  const toggleSettingsMenu = (): void => {
    setSettingsMenuVisible(!settingsMenuVisible);
  };

  const toggleRtl = (): void => {
    I18nManager.forceRTL(!I18nManager.isRTL);
    I18nManager.allowRTL(I18nManager.isRTL);
    AppReloadService.reload();
  };

  const renderRTLToggle = (): React.ReactElement => (
    <CheckBox
      checked={I18nManager.isRTL}
      onChange={toggleRtl}
      text='RTL'
    />
  );

  return (
    <Layout
      style={[styles.container, props.style]}
      level='1'>
      <OverflowMenu
        visible={themesMenuVisible}
        onSelect={onThemeSelect}
        data={createThemesMenuItems()}
        onBackdropPress={toggleThemesMenu}>
        <Button
          size='mini'
          icon={ColorPaletteIcon}
          disabled={!props.themes}
          onPress={toggleThemesMenu}>
          THEMES
        </Button>
      </OverflowMenu>
      <OverflowMenu
        visible={settingsMenuVisible}
        onSelect={onSettingSelect}
        data={createSettingsMenuItems()}
        onBackdropPress={toggleSettingsMenu}>
        <Button
          size='mini'
          icon={SettingsIcon}
          disabled={!props.settings}
          onPress={toggleSettingsMenu}>
          SETTINGS
        </Button>
      </OverflowMenu>
      <Button
        size='mini'
        status='danger'
        icon={TrashIcon}
        disabled={!props.settings}
        onPress={onResetButtonPress}>
        RESET
      </Button>
      {__DEV__ && renderRTLToggle()}
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 16,
  },
});
