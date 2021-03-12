import { normalize } from '@southem/tools';
import { transparent } from '../../colors';
import palette from '../_palette';

const sizeButton = normalize(40);

export default {
  ButtonGroup: {
    marginHorizontal: 10,
    marginVertical: 5,
    borderColor: '#e3e3e3',
    borderWidth: 1,
    flexDirection: 'row',
    borderRadius: 3,
    overflow: 'hidden',
    backgroundColor: '#fff',

    Button: {
      flex: 1,
    },
  },
  'ButtonGroup[appearance=filled]': {
    borderColor: palette.default,
    backgroundColor: palette.default,
  },
  'ButtonGroup[appearance=outline]': {
    borderWidth: 2,
    backgroundColor: transparent,
  },
  'ButtonGroup[size=mini]': {
    minWidth: sizeButton - 16,
    minHeight: sizeButton - 16,
  },
  'ButtonGroup[size=small]': {
    minWidth: sizeButton - 8,
    minHeight: sizeButton - 8,
  },
  'ButtonGroup[size=medium]': {
    minWidth: sizeButton,
    minHeight: sizeButton,
  },
  'ButtonGroup[size=large]': {
    minWidth: sizeButton + 8,
    minHeight: sizeButton + 8,
  },
  'ButtonGroup[size=big]': {
    minWidth: sizeButton + 16,
    minHeight: sizeButton + 16,
  },
};
