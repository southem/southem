import React from 'react';
import {
  ImageProps,
  StyleSheet,
} from 'react-native';
import { StyleType } from '@southem/theme';
import {
  TopNavigation,
  // @ts-ignore
  TopNavigationAction,
  // @ts-ignore
  TopNavigationActionProps,
  TopNavigationProps,
} from '@southem/ui';
import { SafeAreaView } from './safeAreaView.component';

export interface ComponentProps {
  backIcon?: BackIconProp;
  onBackPress?: () => void;
}

export type TopNavigationBarProps = TopNavigationProps & ComponentProps;

type BackIconProp = (style: StyleType) => React.ReactElement<ImageProps>;
type BackButtonElement = React.ReactElement<TopNavigationActionProps>;

export class TopNavigationBar extends React.Component<TopNavigationBarProps> {

  private onBackButtonPress = () => {
    if (this.props.onBackPress) {
      this.props.onBackPress();
    }
  };

  private renderBackButton = (source: BackIconProp): BackButtonElement => {
    return (
      <TopNavigationAction
        icon={source}
        onPress={this.onBackButtonPress}
      />
    );
  };

  public render(): React.ReactNode {
    const { title, backIcon } = this.props;

    const leftControlElement: BackButtonElement | null = backIcon ? this.renderBackButton(backIcon) : null;

    return (
      <SafeAreaView forceInset={{ top: 'always' }} style={styles.safeArea}>
        <TopNavigation
          alignment={'center'}
          title={title}
          titleStyle={{ fontWeight: 'normal' }}
          subtitleStyle={{ fontWeight: 'normal' }}
          // @ts-ignore
          leftControl={leftControlElement}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
