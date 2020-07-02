import React from 'react';
import { FlexStyle, View, ViewProps } from 'react-native';
import { EdgeInsets, SafeAreaConsumer } from 'react-native-safe-area-context';
import { withThemes } from '@southem/theme';

interface InsetProvider {
  // toStyle: (insets: EdgeInsets, styles) => FlexStyle;
  toStyle: (insets: EdgeInsets) => FlexStyle;
}

const INSETS: Record<string, InsetProvider> = {
  top: {
    toStyle: (insets: EdgeInsets): FlexStyle => ({
      // ...styles,
      paddingTop: insets.top,
    }),
  },
  bottom: {
    toStyle: (insets: EdgeInsets): FlexStyle => ({
      // ...styles,
      paddingBottom: insets.bottom,
    }),
  },
};

type Inset = 'top' | 'bottom';

export interface SafeAreaLayoutProps extends ViewProps {
  insets?: Inset;
  children?: React.ReactNode;
}

export class SafeAreaLayoutComponent extends React.Component<SafeAreaLayoutProps> {
  public static displayName = 'SafeAreaLayout';

  public render(): React.ReactElement<ViewProps> {
    return (
      <SafeAreaConsumer>
        {this.renderComponent}
      </SafeAreaConsumer>
    );
  }

  private createInsets = (insets: Inset | Inset[], safeAreaInsets: EdgeInsets): FlexStyle[] => {
    return React.Children.map(insets, inset => INSETS[inset].toStyle(safeAreaInsets));
  };

  private renderComponent = (safeAreaInsets: EdgeInsets): React.ReactElement<ViewProps> => {
    const { style, insets, ...viewProps } = this.props;

    return (
      <View
        {...viewProps}
        // @ts-ignore
        style={[this.createInsets(insets, safeAreaInsets), style]}
      />
    );
  };
}

export const SafeAreaLayout = withThemes('SafeAreaLayout')(SafeAreaLayoutComponent);

