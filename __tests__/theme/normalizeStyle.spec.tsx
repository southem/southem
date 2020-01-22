import {
  CORNERS,
  SIDES,
  HORIZONTAL,
  VERTICAL,
  ShorthandsNormalizerFactory,
} from '@southem/theme';

// We can not guarantee order when shorthands are mixed
// with single values or other shorthands

const TEST_VAL = 5;
describe('normalizeStyle', () => {
  it('normalize all sides', () => {
    const normalizePropVal =
      // @ts-ignore
      ShorthandsNormalizerFactory.createNormalizer('padding', SIDES);
    const expectedStyle = {
      paddingTop: TEST_VAL,
      paddingLeft: TEST_VAL,
      paddingBottom: TEST_VAL,
      paddingRight: TEST_VAL,
    };

    const normalizedStyle = normalizePropVal(TEST_VAL);

    expect(normalizedStyle).toMatchObject(expectedStyle);
  });
  it('normalize all sides with suffix', () => {
    const normalizePropVal =
      ShorthandsNormalizerFactory.createNormalizer('padding', SIDES, 'Suffix');
    const expectedStyle = {
      paddingTopSuffix: TEST_VAL,
      paddingLeftSuffix: TEST_VAL,
      paddingBottomSuffix: TEST_VAL,
      paddingRightSuffix: TEST_VAL,
    };

    const normalizedStyle = normalizePropVal(TEST_VAL);

    expect(normalizedStyle).toMatchObject(expectedStyle);
  });
  it('normalize all corners', () => {
    // @ts-ignore
    const normalizePropVal = ShorthandsNormalizerFactory.createNormalizer('border', CORNERS);
    const expectedStyle = {
      borderBottomLeft: TEST_VAL,
      borderBottomRight: TEST_VAL,
      borderTopLeft: TEST_VAL,
      borderTopRight: TEST_VAL,
    };

    const normalizedStyle = normalizePropVal(TEST_VAL);

    expect(normalizedStyle).toMatchObject(expectedStyle);
  });
  it('normalize all corners with suffix', () => {
    const normalizePropVal =
      ShorthandsNormalizerFactory.createNormalizer('border', CORNERS, 'Radius');
    const expectedStyle = {
      borderBottomLeftRadius: TEST_VAL,
      borderBottomRightRadius: TEST_VAL,
      borderTopLeftRadius: TEST_VAL,
      borderTopRightRadius: TEST_VAL,
    };

    const normalizedStyle = normalizePropVal(TEST_VAL);

    expect(normalizedStyle).toMatchObject(expectedStyle);
  });
  it('normalize horizontal', () => {
    // @ts-ignore
    const normalizePropVal = ShorthandsNormalizerFactory.createNormalizer('margin', HORIZONTAL);
    const expectedStyle = {
      marginLeft: TEST_VAL,
      marginRight: TEST_VAL,
    };

    const normalizedStyle = normalizePropVal(TEST_VAL);

    expect(normalizedStyle).toMatchObject(expectedStyle);
  });
  it('normalize vertical', () => {
    // @ts-ignore
    const normalizePropVal = ShorthandsNormalizerFactory.createNormalizer('margin', VERTICAL);
    const expectedStyle = {
      marginTop: TEST_VAL,
      marginBottom: TEST_VAL,
    };

    const normalizedStyle = normalizePropVal(TEST_VAL);

    expect(normalizedStyle).toMatchObject(expectedStyle);
  });
});
