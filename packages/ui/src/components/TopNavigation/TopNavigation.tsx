/* eslint-disable */
import React from 'react';
import {
  View,
  StyleProp,
  StyleSheet,
  TextStyle,
  ViewProps,
} from 'react-native';
import {withThemes} from '@southem/theme';
import {
  RenderProp,
  renderNode,
  Overwrite,
  StyledComponentProps,
} from '../../devsupport';
import {Title, Subtitle} from '../../common';
import {TopNavigationAction, TopNavigationActionProps} from './TopNavigationAction';
import { TextProps, TextElement } from '../../common/text';

type TopNavigationStyledProps = Overwrite<StyledComponentProps, {
  appearance?: 'default' | 'control' | string;
}>;

type AlignmentProp = 'start' | 'center';
type ActionElement = React.ReactElement<TopNavigationActionProps>;
type ActionElementProp = ActionElement | ActionElement[];

// @ts-ignore
export interface TopNavigationProps extends ViewProps, TopNavigationStyledProps {
  title?: RenderProp<TextProps> | React.ReactText;
  titleStyle?: StyleProp<TextStyle>;
  subtitle?: RenderProp<TextProps> | React.ReactText;
  subtitleStyle?: StyleProp<TextStyle>;
  alignment?: AlignmentProp;
  leftControl?: ActionElement;
  rightControls?: ActionElementProp;
}

export type TopNavigationElement = React.ReactElement<TopNavigationProps>;

const LeftControlContainer = withThemes('LeftControlContainer')(View);
const RightControlsContainer = withThemes('RightControlsContainer')(View);
const TitleContainer = withThemes('TitleContainer')(View);
const renderAction = (content, defaultProps?, style?): ActionElement[] =>
  React.Children.map(content, (element: ActionElement, index: number): ActionElement =>
    renderNode(TopNavigationAction, element, {
      index,
      ...defaultProps,
      style: StyleSheet.flatten([style, defaultProps && defaultProps.style]),
    }),
  );
const renderText = (title, defaultProps?, style?): TextElement =>
  renderNode(Title, title, {
    ...defaultProps,
    style: StyleSheet.flatten([style, defaultProps && defaultProps.style]),
  });
const renderSubText = (subtitle, defaultProps?, style?): TextElement =>
  renderNode(Subtitle, subtitle, {
    ...defaultProps,
    style: StyleSheet.flatten([style, defaultProps && defaultProps.style]),
  });

/**
 * TopNavigation component is designed to be a Navigation Bar.
 * Can be used for navigation.
 *
 * @extends React.Component
 *
 * @property {string} title - Determines the title of the component.
 *
 * @property {string} subtitle - Determines the subtitle of the component.
 *
 * @property {string} alignment - Determines the alignment of the component.
 * Can be `center` or `start`.
 *
 * @property {React.ReactElement<TopNavigationActionProps>} leftControl - Determines the left control
 * of the component.
 *
 * @property {React.ReactElement<TopNavigationActionProps>[]} rightControls - Determines the right controls
 * of the component.
 *
 * @property {StyleProp<TextStyle>} titleStyle - Customizes text style of title.
 *
 * @property {StyleProp<TextStyle>} subtitleStyle - Customizes text style of subtitle.
 *
 * @property ViewProps
 *
 * @property StyledComponentProps
 *
 * @example Simple usage example
 *
 * ```
 * import React from 'react';
 * import {
 *   TopNavigation,
 *   TopNavigationAction,
 *   TopNavigationActionProps,
 * } from '@southem/ui';
 *
 * export const TopNavigationShowcase = (props?: TopNavigationProps): React.ReactElement<TopNavigationProps> => {
 *   return (
 *     <TopNavigation title='Title' />
 *   );
 * };
 * ```
 *
 * @example Actions usage example
 *
 * ```
 * import React from 'react';
 * import { Image, ImageProps } from 'react-native';
 * import {
 *   TopNavigation,
 *   TopNavigationAction,
 *   TopNavigationActionProps,
 * } from '@ui/components';
 *
 * export const TopNavigationShowcase = (props?: TopNavigationProps): React.ReactElement<TopNavigationProps> => {
 *
 *   private onLeftControlPress = () => {
 *     // Handle Left Control press
 *   };
 *
 *   const renderControlIcon = (style: StyleType): React.ReactElement<ImageProps> => {
 *     return (
 *       <Image
 *         style={style}
 *         source={{uri: 'https://path-to/awesome-image.png'}}
 *       />
 *     );
 *   };
 *
 *   const renderLeftControl = (): React.ReactElement<TopNavigationActionProps> => {
 *     return (
 *       <TopNavigationAction
 *         icon={this.renderControlIcon}
 *         onPress={this.onLeftControlPress}
 *       />
 *     );
 *   };
 *
 *   return (
 *     <TopNavigation
 *       title='Title'
 *       leftControl={this.renderLeftControl()}
 *     />
 *   );
 * };
 * ```
 *
 * @example Inline styling example
 *
 * ```
 * import React from 'react';
 * import { TopNavigation, TopNavigationProps } from '@ui/components';
 *
 * export const TopNavigationShowcase = (props?: TopNavigationProps): React.ReactElement<TopNavigationProps> => {
 *   return (
 *     <TopNavigation
 *       title='Title'
 *       subtitle='Subtitle'
 *       titleStyle={styles.title}
 *       subtitleStyle={styles.subtitle}
 *     />
 *   );
 * };
 * ```
 * */
// @ts-ignore
@withThemes('TopNavigation')
// @ts-ignore
export class TopNavigation extends React.Component<TopNavigationProps> {
  public static displayName: string = 'TopNavigation';
  public static defaultProps = {
    title: '',
    alignment: 'center',
  };

  public render(): React.ReactNode {
    const {
      style,
      leftControl,
      rightControls,
      title,
      titleStyle,
      subtitle,
      subtitleStyle,
      ...restProps
    } = this.props;

    return (
      <View style={style} {...restProps}>
        <LeftControlContainer>
          {renderAction(leftControl)}
        </LeftControlContainer>
        <TitleContainer>
          {renderText(title, {style: titleStyle})}
          {renderSubText(subtitle, {style: subtitleStyle})}
        </TitleContainer>
        <RightControlsContainer>
          {renderAction(rightControls)}
        </RightControlsContainer>
      </View>
    );
  }
}
