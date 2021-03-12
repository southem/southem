import { shadow } from '@southem/styles';

describe('@shadow', () => {
  it('should be match elevation', () => {
    const elevation = {
      shadowColor: 'rgba(0, 0, 0, 0)',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0,
      shadowRadius: 0,
      zIndex: 0,
    };

    const shw = shadow(0);
    expect(elevation).toMatchObject(shw);
  });
});
