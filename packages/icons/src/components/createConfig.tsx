import { set } from 'lodash';

export default function (fontFamily, defaultConfig) {
  const config = { ...defaultConfig };
  set(config, 'metadata.name', fontFamily);
  set(config, 'preferences.metadata.fontFamily', fontFamily);
  return config;
}
