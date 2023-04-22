import React from 'react';
import { StyleSheet } from 'react-native';
import { Divider, TopNavigation, TopNavigationAction } from '@southem/ui';
import { SafeAreaLayout, SafeAreaLayoutProps } from '../safe-area-layout';
import { Showcase } from './showcase';
import { ShowcaseSettings } from './showcase-settings';
import { TypeTheme, useTheme } from '@southem/theme';
import { ComponentShowcase, ComponentShowcaseSetting } from '../../model/showcase.model';
import { ArrowIosBackIcon } from '../icons';

interface ShowcaseContainerProps extends SafeAreaLayoutProps {
  showcase: ComponentShowcase;
  settings?: ComponentShowcaseSetting[];
  renderItem: (props: any) => React.ReactElement;
  onBackPress?: () => void;
}

const themes: TypeTheme[] = ['light', 'dark'];

export const ShowcaseContainer = (props: ShowcaseContainerProps): React.ReactElement => {

  const { showcase, settings, renderItem, children, onBackPress, ...showcaseProps } = props;

  const [showcaseSettings, setShowcaseSettings] = React.useState({});
  const themeContext = useTheme();

  const onSelectSetting = (selectedSettings: { [prop: string]: any }): void => {
    setShowcaseSettings({ ...settings, ...selectedSettings });
  };

  const onResetSettings = (): void => {
    setShowcaseSettings({});
  };

  const renderBackAction = (): React.ReactElement => (
    <TopNavigationAction
      // @ts-ignore
      icon={ArrowIosBackIcon({ color: 'white' })}
      onPress={onBackPress}
    />
  );

  return (
    <SafeAreaLayout
      style={styles.container}
      insets='top'>
      <TopNavigation
        title={showcase.title}
        titleStyle={styles.title}
        accessoryLeft={renderBackAction}
      />
      <Divider/>
      <ShowcaseSettings
        themes={themes}
        settings={settings}
        onSettingSelect={onSelectSetting}
        // @ts-ignore
        onThemeSelect={themeContext.theme}
        onReset={onResetSettings}
      />
      <Divider/>
      {children}
      <Showcase
        {...showcaseProps}
        showcase={showcase}
        renderItem={renderItem}
        settings={showcaseSettings}
      />
    </SafeAreaLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: 'white',
  },
});
