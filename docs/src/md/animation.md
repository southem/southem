# Animations
<hr />

When building an application, there is a need to create animations to enrich the user experience. Although React Native [provides a way](https://facebook.github.io/react-native/docs/animations.html) to implement arbitrary animations, it is not an easy task to do it, even for simple animations. That's where `@southem/animation` package comes in. Package contains **animation components** that should be wrapped around components that you want to get animated and **driver** that controls the animations.

## Install

```bash
$ npm install --save @southem/animation
```
Or
```bash
$ yarn add --save @southem/animation
```

## Examples

To see animation components in action, start by creating new React Native project:

```bash
$ react-native init HelloWorld
```

Locate to project and install `@southem/animation`:

```bash
$ cd HelloWorld
$ npm install --save @southem/animation
```

Now, simply copy the following to your `index.ios.js` file of React Native project:

```javascript
import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';

import {
  FadeOut,
  FadeIn,
  ZoomOut,
  ZoomIn,
  ScrollDriver,
} from '@shoutem/animation';

export default class App extends Component<{}> {
  render() {
    // Create new ScrollDriver that will animate animations
    // when passing through scroll positions in input range
    const driver = new ScrollDriver();
    return (
      <ScrollView {...driver.scrollViewProps}>
        <View style={style.container}>
          {/* This will fade out and zoom in on scroll position 100 */}
          <ZoomIn driver={driver} inputRange={[50, 100]} maxFactor={3}>
            <FadeOut driver={driver} inputRange={[50, 100]}>
              <Text>Good Bye</Text>
            </FadeOut>
          </ZoomIn>
          {/* This will fade in and zoom out on scroll position 200 */}
          <ZoomOut driver={driver} inputRange={[150, 200]} maxFactor={3}>
            <FadeIn driver={driver} inputRange={[150, 200]}>
              <Text>Hello</Text>
            </FadeIn>
          </ZoomOut>
        </View>
      </ScrollView>
    );
  }
}

const style = StyleSheet.create({
  container: {
    height: 800,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
```

Finally, run the app!

```bash
$ react-native run-ios
```

For more complex animations, run application from `examples` folder:

```bash
$ git clone git@github.com:southem/examples.git
$ cd examples/animation/SouthemAnimation
$ npm install
$ react-native run-ios
```
