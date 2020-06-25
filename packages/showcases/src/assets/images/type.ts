import { ImageSourcePropType } from 'react-native';

export interface ImageSource {
  imageSource: ImageSourcePropType;
}

export class RemoteImage implements ImageSource {
  readonly source: string;

  constructor(source: string) {
    this.source = source;
  }

  // @ts-ignore
  get imageSource(): ImageSourcePropType {
    return { uri: this.source };
  }
}
