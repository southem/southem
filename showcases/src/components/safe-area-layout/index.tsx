import React from 'react';
import { FlexStyle, View, ViewProps } from 'react-native';
import { EdgeInsets, SafeAreaConsumer } from 'react-native-safe-area-context';
import { withThemes } from '@southem/theme';

interface InsetProvider {
  toStyle: (insets: EdgeInsets) => FlexStyle;
}

const INSETS: Record<string, InsetProvider> = {
  top: {
    toStyle: (insets: EdgeInsets): FlexStyle => ({
      paddingTop: insets.top,
    }),
  },
  bottom: {
    toStyle: (insets: EdgeInsets): FlexStyle => ({
      paddingBottom: insets.bottom,
    }),
  },
};

type Inset = 'top' | 'bottom';

export interface SafeAreaLayoutProps extends ViewProps {
  insets?: Inset;
  children?: React.ReactNode;
  backgroundColor?: string;
}

const mapPropToStyles = [
  'backgroundColor',
];


// @ts-ignore
@withThemes('SafeAreaLayout', mapPropToStyles)
// @ts-ignore
export class SafeAreaLayout extends React.Component<SafeAreaLayoutProps> {
  public static displayName = 'SafeAreaLayout';

  public render(): React.ReactElement<ViewProps> {
    return (
      // @ts-ignore
      <SafeAreaConsumer>{this.renderComponent}</SafeAreaConsumer>
    );
  }

  private createInsets = (
    insets: Inset | Inset[],
    safeAreaInsets: EdgeInsets,
  ): FlexStyle[] => {
    return React.Children.map(insets, (inset) =>
      INSETS[inset].toStyle(safeAreaInsets),
    );
  };

  private renderComponent = (safeAreaInsets: EdgeInsets): React.ReactElement<ViewProps> => {
    const { style, insets, backgroundColor, ...viewProps } = this.props;

    return (
      <View
        {...viewProps}
        style={[
          // @ts-ignore
          this.createInsets(insets, safeAreaInsets),
          style,
          { backgroundColor },
        ]}
      />
    );
  };
}
