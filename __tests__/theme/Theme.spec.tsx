// @ts-ignore
import Theme, { themes } from '@southem/theme';

describe('Theme', () => {
  it('register default theme', () => {
    const defaultTheme = {
      Text: {
        color: '#000000',
      },
    };

    Theme.registerDefaultTheme(defaultTheme);
    expect(themes).toMatchObject({ default: { ...defaultTheme } });
  });

  it('register default theme', () => {
    const defaultTheme = {
      Text: {
        color: '#000000',
      },
    };

    const defaultThemePro = {
      AppBar: {
        height: 42,
      },
    };

    Theme.registerTheme('default', [defaultTheme, defaultThemePro]);
    expect(themes).toMatchObject({ default: { ...defaultTheme, ...defaultThemePro } });
  });

  it('register theme', () => {

    const lightTheme = {
      Text: {
        color: '#000000',
      },
    };

    // @ts-ignore
    Theme.registerTheme('light', lightTheme);
    expect(themes).toMatchObject({ light: lightTheme });
  });

  it('register themes', () => {
    const lightTheme = {
      Text: {
        color: '#000000',
      },
    };

    const darkTheme = {
      Text: {
        color: '#000000',
      },
    };
    // @ts-ignore
    Theme.registerTheme('light', lightTheme);
    // @ts-ignore
    Theme.registerTheme('dark', darkTheme);

    expect(themes).toMatchObject({
      light: lightTheme,
      dark: darkTheme,
    });
  });
});
