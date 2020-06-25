import React from 'react';
import {
  View,
  StatusBar,
  ViewProps,
  StatusBarStyle,
  Platform,
  StyleSheet,
} from 'react-native';
import { ThemeKey } from '../../services/theme.service';
import Constants from 'expo-constants';

interface ComponentProps {
  currentTheme: ThemeKey;
}

export type DynamicStatusBarProps = ViewProps & ComponentProps;

export class DynamicStatusBar extends React.Component<DynamicStatusBarProps> {

  private getStatusBarContent = (): StatusBarStyle => {
    if (this.props.currentTheme === 'dark') {
      return 'dark-content';
    } else {
      return 'light-content';
    }
  };

  public render(): React.ReactNode {
    const androidStatusBarBgColor: string = styles.container.backgroundColor;
    const barStyle: StatusBarStyle = this.getStatusBarContent();

    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={androidStatusBarBgColor}
          barStyle={barStyle}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: Platform.select({
      ios: Constants.statusBarHeight,
      android: 0,
    }),
  },
});
