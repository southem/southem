import {
  shadow,
  palette
} from '@southem/styles';

describe('@shadow', () => {
  it('should be match elevation', () => {
    const elevation = {
      elevation: 0,
      shadowColor: palette.default.dark,
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0,
      shadowRadius: 0,
    };

    const shw = shadow(0);
    expect(elevation).toMatchObject(shw);
  });
});
