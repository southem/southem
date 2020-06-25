import { LayoutsListItemData } from '../../../components/menu';

export type LayoutsData = LayoutsListItemData;

export interface LayoutsContainerData extends LayoutsData {
  route: string;
}
