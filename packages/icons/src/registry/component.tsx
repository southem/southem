/**
 * @license
 * Copyright Southem. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React from 'react';
import {
  IconPack,
  IconRegistryService,
} from '../service';

type IconsProp = IconPack<any> | IconPack<any>[];

export interface IconRegistryProps {
  icons: IconsProp;
  defaultIcons?: string;
}

export type IconRegistryElement = React.ReactElement<IconRegistryProps>;

/**
 * Registers one or more icon types for later usage in Icon component.
 * Renders nothing, but should be added as a child of an Application Root.
 *
 * @extends React.Component
 *
 * @property {IconPack<any> | IconPack<any>[]} icons - Icon types to register.
 * @property {string} defaultIcons - A name of an icon type that is used by default.
 *
 * @overview-example Simple Usage
 *
 * ```
 * import React from 'react';
 * import { ThemeProvider, Layout, Text, Icon, Button } from '@southem/ui';
 * import { IconRegistry, IconsPack } from '@southem/icons'; // <-- Make sure it is installed. npm i @southem/icons
 *
 * const LikeIcon = (props) => (
 *   <Icon {...props} name='like' />
 * );
 *
 * export default () => (
 *   <>
 *     <IconRegistry icons={IconsPack}/>
 *     <ThemeProvider theme={'light'}>
 *       <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
 *         <Text>Welcome to Southem UI</Text>
 *         <Button accessoryLeft={LikeIcon}>LIKE</Text>
 *       </Layout>
 *     </ThemeProvider>
 *   </>
 * );
 * ```
 */
export class IconRegistry extends React.Component<IconRegistryProps> {

  static defaultProps: Partial<IconRegistryProps> = {
    icons: [],
  };

  private findDefaultIconPack = (types: IconPack<any>[], name: string): IconPack<any> => {
    const requestedPackIndex: number = types.findIndex((type: IconPack<any>): boolean => {
      return type.name === name;
    });

    return types[Math.max(0, requestedPackIndex)];
  };

  private registerIcons = (source: IconsProp, defaultPack: string): void => {
    const types: IconPack<any>[] = Array.isArray(source) ? source : [source];
    const defaultIconPack: IconPack<any> = this.findDefaultIconPack(types, defaultPack);

    IconRegistryService.register(...types);
    IconRegistryService.setDefaultIconPack(defaultIconPack.name);
  };

  public render(): React.ReactNode {
    const { icons, defaultIcons } = this.props;
    this.registerIcons(icons, defaultIcons);

    return null;
  }
}
