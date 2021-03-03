import styleSheetCreator from './style-sheet';
import {
  normalize,
  normalizeVerticalScale,
  normalizeModerateScale,
} from '../normalize';

export const StyleSheet = styleSheetCreator(
  normalize,
  normalizeVerticalScale,
  normalizeModerateScale,
);
