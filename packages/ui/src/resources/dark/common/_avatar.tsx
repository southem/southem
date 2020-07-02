import { avatarSize } from '../../spacing';

export default {
  Avatar: {
    width: avatarSize,
    height: avatarSize,
    borderWidth: 1,
    borderRadius: avatarSize / 2,
    borderColor: '#dedede',
  },
  'Avatar[size=mini]': {
    width: avatarSize - 20,
    height: avatarSize - 20,
    borderRadius: (avatarSize - 20) / 2,
  },
  'Avatar[size=small]': {
    width: avatarSize - 10,
    height: avatarSize - 10,
    borderRadius: (avatarSize - 10) / 2,
  },
  'Avatar[size=medium]': {
    width: avatarSize,
    height: avatarSize,
    borderRadius: avatarSize / 2,
  },
  'Avatar[size=large]': {
    width: avatarSize + 10,
    height: avatarSize + 10,
    borderRadius: (avatarSize + 10) / 2,
  },
  'Avatar[size=big]': {
    width: avatarSize + 20,
    height: avatarSize + 20,
    borderRadius: (avatarSize + 20) / 2,
  },
  'Avatar[shape=square]': {
    borderRadius: 0,
  },
  'Avatar[shape=rounded]': {
    borderRadius: (avatarSize * 2) / 2,
  },
};
