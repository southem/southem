import { ComponentsListItemData } from '../../../components/menu';

export type ComponentsData = ComponentsListItemData;

export interface ComponentsContainerData extends ComponentsData {
  route: string;
}
