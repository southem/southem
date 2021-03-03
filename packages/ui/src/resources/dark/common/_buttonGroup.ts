import { normalize } from '@southem/tools';
import { transparent } from '../../colors';
import palette from '../_palette';

const sizeButton = normalize(42);

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
    height: sizeButton,

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
    height: sizeButton - 16,
  },
  'ButtonGroup[size=small]': {
    minWidth: sizeButton - 8,
    height: sizeButton - 8,
  },
  'ButtonGroup[size=medium]': {
    minWidth: sizeButton,
    height: sizeButton,
  },
  'ButtonGroup[size=large]': {
    minWidth: sizeButton + 8,
    height: sizeButton + 8,
  },
  'ButtonGroup[size=big]': {
    minWidth: sizeButton + 16,
    height: sizeButton + 16,
  },
};
