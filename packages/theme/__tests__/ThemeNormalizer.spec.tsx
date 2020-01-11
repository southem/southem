import StyleNormalizer from '../src/normalizer/StyleNormalizer';
import {
  SIDES,
  CORNERS,
  HORIZONTAL,
  VERTICAL,
} from '../src/normalizer/ShorthandsNormalizerFactory';

describe('StyleNormalizer', () => {
  describe('shorthand normalizers creation', () => {
    it('creates proper sides normalizers', () => {
      const styleNormalizer = new StyleNormalizer();
      styleNormalizer.createNormalizers('test', [SIDES]);

      // @ts-ignore
      expect(styleNormalizer.normalizers.test).toBeDefined();
    });
    it('creates proper horizontal normalizers', () => {
      const styleNormalizer = new StyleNormalizer();
      styleNormalizer.createNormalizers('test', [HORIZONTAL]);

      // @ts-ignore
      expect(styleNormalizer.normalizers.testHorizontal).toBeDefined();
    });
    it('creates proper vertical normalizers', () => {
      const styleNormalizer = new StyleNormalizer();
      styleNormalizer.createNormalizers('test', [VERTICAL]);

      // @ts-ignore
      expect(styleNormalizer.normalizers.testVertical).toBeDefined();
    });
    it('creates proper horizontal normalizers', () => {
      const styleNormalizer = new StyleNormalizer();
      styleNormalizer.createNormalizers('test', [CORNERS]);

      // @ts-ignore
      expect(styleNormalizer.normalizers.test).toBeDefined();
    });
    it('creates multiple normalizers', () => {
      const styleNormalizer = new StyleNormalizer();
      styleNormalizer.createNormalizers('test', [SIDES, HORIZONTAL, VERTICAL]);

      // @ts-ignore
      expect(styleNormalizer.normalizers.test).toBeDefined();
      // @ts-ignore
      expect(styleNormalizer.normalizers.testHorizontal).toBeDefined();
      // @ts-ignore
      expect(styleNormalizer.normalizers.testVertical).toBeDefined();
    });
    it('throws error if normalizer for shorthand already exists', () => {
      const styleNormalizer = new StyleNormalizer();
      expect(() => {
        styleNormalizer.createNormalizers('test', [SIDES, CORNERS]);
      }).toThrow();
    });
  });
  describe('normalizers creation with suffix', () => {
    it('creates proper normalizers with suffix', () => {
      const styleNormalizer = new StyleNormalizer();
      styleNormalizer.createNormalizers('test', [SIDES], 'Suffix');

      // @ts-ignore
      expect(styleNormalizer.normalizers.testSuffix).toBeDefined();
    });
    it('creates proper normalizers with suffix', () => {
      const styleNormalizer = new StyleNormalizer();
      styleNormalizer.createNormalizers('test', [SIDES, VERTICAL], 'Suffix');

      // @ts-ignore
      expect(styleNormalizer.normalizers.testSuffix).toBeDefined();
      // @ts-ignore
      expect(styleNormalizer.normalizers.testVerticalSuffix).toBeDefined();
    });
  });
});
