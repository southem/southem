import React from 'react';
import { Text as RNText } from 'react-native';
import { render, RenderAPI } from 'react-native-testing-library';
import Theme, { ThemeProvider } from '@southem/theme';
import {
  darkTheme,
  TextProps,
  TextElement,
} from '@southem/ui';
// @ts-ignore
import { renderTextElement } from '@southem/ui/src/devsupport';

Theme.registerDefaultTheme(darkTheme);

interface MockTextProps extends TextProps {
  title?: TextElement | string;
}

const Mock = ({title, children, ...props}: MockTextProps): React.ReactElement<{}> => {
  return renderTextElement(title || children, props);
};

const renderComponent = (props?: MockTextProps): RenderAPI => {
  // @ts-ignore
  return render(<Mock {...props} />);
};

describe('@renderNode: matches snapshot', () => {
  it('should render nothing', () => {
    const Text = renderTextElement(null);
    expect(Text).toEqual(null);
  });

  it('should render provided function component', () => {
    const component = renderComponent({
      title: 'I love Babel',
      style: {
        color: 'red',
      },
    });
    const textComponent = component.getByText('I love Babel');

    expect(textComponent).toBeTruthy();
    expect(textComponent.props.style).toEqual({
      color: 'red',
    });
  });

  it('should render provided function component with hooks', () => {
    const HookComponent = (props) => {
      const state = React.useState(1);
      return (
        <RNText {...props}>I love Babel {state}</RNText>
      );
    };

    const component = renderComponent({
      style: { color: 'red' },
      children: <HookComponent />,
    });

    const textComponent = component.getByText('I love Babel 1');

    expect(textComponent).toBeTruthy();
  });

  it('should render ui southem text', () => {
    const component = render(
      <ThemeProvider theme={'default'}>
        <Mock>I love Babel</Mock>
      </ThemeProvider>,
    );

    const textComponent = component.getByText('I love Babel');

    expect(textComponent).toBeTruthy();
  });

  it('should be able to render components with hooks', () => {
    const ComponentWithHooks = () => {
      const [text, setText ] = React.useState('');

      React.useEffect(() => {
        setText('I love Babel');
      }, []);

      return <RNText>{text}</RNText>;
    };

    const component = render(
      <Mock
        // @ts-ignore
        children={ComponentWithHooks}
      />,
    );

    const textComponent = component.getByText('I love Babel');

    expect(textComponent).toBeTruthy();
  });
});
