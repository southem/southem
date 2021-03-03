/**
 * @license
 * Copyright Southem. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import {
  IconPack,
  IconProvider,
} from './type';
import { IconProps } from '../type';

function throwPackNotFoundError(name: string) {
  const docRoot: string = 'https://eldorplus.github.io/southem-ui/docs';

  const message: string = [
    `\nIcon: Icon Pack '${name}' is not registered`,
    'Using Southem UI components is only possible with configuring ThemeProvider.',
    `📖 Documentation: ${docRoot}/guides/setting-up-icons`,
  ].join('\n');

  throw Error(message);
}

function throwIconNotFoundError(name: string, pack: string) {
  const docRoot: string = 'https://eldorplus.github.io/southem-ui/docs';

  const message: string = [
    `\nIcon: '${name}' icon is not registered in pack '${pack}'.`,
    'Check icon name or consider switching icon pack.',
    `📖 Documentation: ${docRoot}/guides/setting-up-icons`,
  ].join('\n');

  throw Error(message);
}

export interface RegisteredIcon<T> {
  name: string;
  type: string;
  icon: IconProvider<T>;
}

/**
 * This service allows to register multiple icon types to use them later within
 * `<Icon/>` component.
 */
class RegistryService {

  protected types: Map<string, IconPack<IconProps>> = new Map();
  protected defaultPack: string;

  /**
   * Registers multiple icon types and sets the first one as default if there is no default types
   *
   * @param {IconPack[]} types - array of icon types
   */
  public register<T>(...types: IconPack<T>[]) {
    types.forEach((type: IconPack<IconProps>) => {
      this.registerIconPack(type);
    });
  }

  /**
   * Sets type as default
   *
   * @param {string} name
   * @throws {Error} if type is nor registered
   */
  public setDefaultIconPack(name: string) {
    if (!this.types.has(name)) {
      throwPackNotFoundError(name);
    }

    this.defaultPack = name;
  }

  /**
   * @param {string} name
   * @returns {IconPack} type by name
   */
  public getIconPack<T>(name: string): IconPack<T> {
    return this.types.get(name);
  }

  /**
   * @param {string} name - icon name
   * @param {string} type - type name
   * @throws {Error} if requested icon type is not registered
   * @returns {RegisteredIcon} - registered icon of a requested/default type
   */
  public getIcon<T>(name: string, type?: string): RegisteredIcon<T> {
    const iconsPack: IconPack<T> = type ? this.getPackOrThrow(type) : this.getDefaultPack();

    return {
      name,
      type: iconsPack.name,
      icon: this.getIconFromPack(name, iconsPack),
    };
  }

  /**
   * Registers single icon type
   *
   * @param {IconPack} type - icon type to register
   */
  protected registerIconPack<T>(type: IconPack<T>) {
    this.types.set(type.name, type);
  }

  protected getPackOrThrow<T>(name: string): IconPack<T> {
    const type: IconPack<IconProps> = this.types.get(name);

    if (!type) {
      throwPackNotFoundError(name);
    }

    return type;
  }

  protected getDefaultPack<T>(): IconPack<T> {
    return this.getIconPack(this.defaultPack);
  }

  protected getIconFromPack<T>(name: string, type: IconPack<T>, shouldThrow = true): IconProvider<T> {
    if (shouldThrow && !type.icons[name]) {
      throwIconNotFoundError(name, type.name);
    }

    return type.icons[name];
  }
}

export const IconRegistryService = new RegistryService();
