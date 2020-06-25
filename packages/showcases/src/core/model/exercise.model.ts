import { ImageSource } from '../../assets/images';

export interface Exercise {
  name: string;
  image: ImageSource;
  duration: string;
  level: 'Easy' | 'Medium' | 'Hard';
  energy: string;
}
