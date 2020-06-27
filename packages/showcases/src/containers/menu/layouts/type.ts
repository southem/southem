import { LayoutsListItemData } from '../../../components/menu';

export type LayoutsData = LayoutsListItemData;

export interface LayoutsContainerData extends LayoutsListItemData {
  route: string;
}
