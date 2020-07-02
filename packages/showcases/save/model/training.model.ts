import { IconSource } from '../assets/icons';
import { ImageSource } from '../assets/images';

export interface Training {
  icon: IconSource;
  photo: ImageSource;
  category: string;
  time: number;
  styx: number;
  description: string;
}
