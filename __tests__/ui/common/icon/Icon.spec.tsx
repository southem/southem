import React from 'react';
import {
  Text,
  Image,
  ImageProps,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';
import {
  render,
  shallow,
  fireEvent,
  RenderAPI,
} from 'react-native-testing-library';
import Theme, {ThemeProvider} from '@southem/theme';
import {
  darkTheme,
  Icon,
  IconProps,
} from '@southem/ui';

Theme.registerDefaultTheme(darkTheme);

const Mock = (props?: IconProps): React.ReactElement<{}> => {
  return (
    <ThemeProvider
      theme={'default'}>
      <Icon {...props} />
    </ThemeProvider>
  );
};

const renderComponent = (props?: IconProps): RenderAPI => {
  return render(
    <Mock {...props} />,
  );
};

describe('@icon: matches snapshot', () => {

  describe('* interaction', () => {
    it('* stateless', () => {
      const component: RenderAPI = renderComponent({
        name: 'wifi',
      });
      const { output } = shallow(component.getByType(Icon));

      expect(output).toMatchSnapshot();
    });
  });

  describe('* appearance', () => {
    it('* empty', () => {
      const component: RenderAPI = renderComponent();
      const { output } = shallow(component.getByType(Icon));

      expect(output).toMatchSnapshot();
    });

    it('* with type', () => {
      const component: RenderAPI = renderComponent({
        name: 'access-alarm',
        type: 'octicon',
        color: 'red',
      });
      const { output } = shallow(component.getByType(Icon));

      expect(output).toMatchSnapshot();
    });

    it('* custom style (styled)', () => {
      const component: RenderAPI = renderComponent({
        size: 24,
        style: {
          fontSize: 32,
          lineHeight: 34,
        },
      });
      const { output } = shallow(component.getByType(Icon));

      expect(output).toMatchSnapshot();
    });
  });

});

/**
describe('@icon: component checks', () => {
  it('should render without issues', () => {
    const component = shallow(<Icon name='wifi'/>);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with icon type', () => {
    const component = shallow(
      <Icon
        name='alert'
        type='octicon'
        reverse
        color='red'
        iconStyle={{backgroundColor: 'peru'}}
      />,
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should have onPress event', () => {
    const onPress = jest.fn();
    const component = shallow(<Icon onPress={onPress} name='wifi'/>);
    const touchable = component.childAt(0);

    touchable.simulate('press');
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it('should apply default disabled styles', () => {
    const onPress = jest.fn();
    const component = shallow(<Icon onPress={onPress} name='wifi' disabled/>);

    expect(toJson(component)).toMatchSnapshot();
  });

  it('should apply custom disabled styles', () => {
    const onPress = jest.fn();
    const component = shallow(
      <Icon
        onPress={onPress}
        name='wifi'
        disabled
        disabledStyle={{backgroundColor: 'pink'}}
      />,
    );

    expect(toJson(component)).toMatchSnapshot();
  });

  it('should apply container style', () => {
    const component = shallow(
      <Icon name='wifi' containerStyle={{backgroundColor: 'blue'}}/>,
    );

    expect(toJson(component)).toMatchSnapshot();
  });

  it('should apply reverse styles', () => {
    const component = shallow(<Icon name='wifi' reverse/>);

    expect(toJson(component)).toMatchSnapshot();
  });

  it('should set underlayColor to color when styles when underlayColor absent', () => {
    const component = shallow(<Icon name='wifi' underlayColor={null}/>);

    expect(toJson(component)).toMatchSnapshot();
  });

  it('should apply raised styles', () => {
    const component = shallow(<Icon name='wifi' raised/>);

    expect(toJson(component)).toMatchSnapshot();
  });

  it('should apply values from theme', () => {
    const component = create(
      <ThemeProvider theme={'default'}>
        <Icon/>
      </ThemeProvider>,
    );

    expect(component.root.findByProps({testID: 'iconIcon'}).props.size).toBe(
      26,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
**/
