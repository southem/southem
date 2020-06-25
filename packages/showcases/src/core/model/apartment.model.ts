import { ImageSource } from '../../assets/images';
import { IconSource } from '../../assets/icons';

export interface Apartment {
  title: string;
  description: string;
  price: number;
  primaryFacilities: ApartmentFacility[];
  facilities: ApartmentFacility[];
  primaryPhoto: ImageSource;
  photos: ImageSource[];
}

export interface ApartmentFacility {
  title: string;
  icon?: IconSource;
}
