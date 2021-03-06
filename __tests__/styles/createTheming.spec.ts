import createStyling from '@southem/sytles/src/utils/createStyling';
import type { StylesTheme } from '@southem/sytles/src/types';

describe('createTheming', () => {
  const defaultStyle: StylesTheme = {
    colors: undefined,
    elevations: [],
    fills: undefined,
    fonts: undefined,
    layout: undefined,
    size: undefined,
    spacing: undefined,
  };

  const { useStyles } = createStyling(defaultStyle);

  it('provides theme with hook', () => {
    const PropsChecker = props => {
      const style = useStyles(props.theme);

      expect(typeof style).toBe('object');
      expect(style).toEqual(defaultStyle);
      return null;
    };
  });

});
