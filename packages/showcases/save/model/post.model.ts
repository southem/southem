import { ImageSource } from '../assets/images';
import { Profile } from './profile.model';

export interface Post {
  photo: ImageSource;
  date: string;
  likes: number;
  author: Profile;
}
