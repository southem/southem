import React from 'react';
import {I18nManager, StyleSheet, ViewProps} from 'react-native';
import {
  Button,
  CheckBox,
  Layout,
  OverflowMenu,
  MenuItem,
} from '@southem/ui';
import {TypeTheme} from '@southem/theme';
import {ColorPaletteIcon, SettingsIcon, TrashIcon} from '../icons';
import {ComponentShowcaseSetting} from '../../model/showcase.model';
import {AppReloadService} from '../../services/app-reload.service';

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

  const createSettingMenuItem = (setting: ComponentShowcaseSetting): React.ReactElement => {
    const title = setting.description || `${setting.propertyName}: ${setting.value}`;
    return (<MenuItem key={'@settings'} title={title}/>);
  };

  const createThemeMenuItem = (title: string): React.ReactElement => (<MenuItem key={'@theme'} title={title}/>);

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
    const {[index]: setting} = props.settings;

    // @ts-ignore
    props.onSettingSelect({
      [setting.propertyName]: setting.value,
    });

    setSettingsMenuVisible(false);
  };

  const createThemesMenuItems = (): React.ReactElement[] => {
    // @ts-ignore
    return props.themes && props.themes.map(createThemeMenuItem);
  };

  const createSettingsMenuItems = (): React.ReactElement[] => {
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
        anchor={() => <Button size='mini' icon={ColorPaletteIcon} disabled={!props.themes} title='Themes'
                              onPress={toggleThemesMenu}/>}
        // @ts-ignore
        onSelect={onThemeSelect}
        onBackdropPress={toggleThemesMenu}>
        {createThemesMenuItems()}
      </OverflowMenu>
      <OverflowMenu
        visible={settingsMenuVisible}
        // @ts-ignore
        onSelect={onSettingSelect}
        anchor={() => <Button size='mini' title='Settings' icon={SettingsIcon}
                              disabled={!props.settings} onPress={toggleSettingsMenu}/>}
        onBackdropPress={toggleSettingsMenu}>
        {createSettingsMenuItems()}
      </OverflowMenu>
      <Button
        size='mini'
        status='danger'
        icon={TrashIcon}
        disabled={!props.settings}
        onPress={onResetButtonPress}>
        Reset
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
