# @southem/fonts

![npm version](https://flat.badgen.net/npm/v/@southem/fonts)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@southem/fonts)
![publish size](https://flat.badgen.net/packagephobia/publish/@southem/fonts)

This package lets you use the [**Fira Sans**](https://fonts.google.com/specimen/Fira+Sans) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Fira Sans

![Fira Sans](./font-family.png)

This font family contains [18 styles](#-gallery).

- `FiraSans_100Thin`
- `FiraSans_100Thin_Italic`
- `FiraSans_200ExtraLight`
- `FiraSans_200ExtraLight_Italic`
- `FiraSans_300Light`
- `FiraSans_300Light_Italic`
- `FiraSans_400Regular`
- `FiraSans_400Regular_Italic`
- `FiraSans_500Medium`
- `FiraSans_500Medium_Italic`
- `FiraSans_600SemiBold`
- `FiraSans_600SemiBold_Italic`
- `FiraSans_700Bold`
- `FiraSans_700Bold_Italic`
- `FiraSans_800ExtraBold`
- `FiraSans_800ExtraBold_Italic`
- `FiraSans_900Black`
- `FiraSans_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @southem/fonts expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  FiraSans_Thin,
  FiraSans_Thin_Italic,
  FiraSans_ExtraLight,
  FiraSans_ExtraLight_Italic,
  FiraSans_Light,
  FiraSans_Light_Italic,
  FiraSans_Regular,
  FiraSans_Regular_Italic,
  FiraSans_Medium,
  FiraSans_Medium_Italic,
  FiraSans_SemiBold,
  FiraSans_SemiBold_Italic,
  FiraSans_Bold,
  FiraSans_Bold_Italic,
  FiraSans_ExtraBold,
  FiraSans_ExtraBold_Italic,
  FiraSans_Black,
  FiraSans_Black_Italic,
} from '@southem/fonts';

export default () => {
  let [fontsLoaded] = useFonts({
    'Fira Sans Thin': FiraSans_Thin,
    'Fira Sans Thin Italic': FiraSans_Thin_Italic,
    'Fira Sans Extra Light': FiraSans_ExtraLight,
    'Fira Sans ExtraLight Italic': FiraSans_ExtraLight_Italic,
    'Fira Sans Light': FiraSans_Light,
    'Fira Sans Light Italic': FiraSans_Light_Italic,
    'Fira Sans Regular': FiraSans_Regular,
    'Fira Sans Regular Italic': FiraSans_Regular_Italic,
    'Fira Sans Medium' : FiraSans_Medium,
    'Fira Sans Medium Italic': FiraSans_Medium_Italic,
    'Fira Sans Semi Bold': FiraSans_SemiBold,
    'Fira Sans Semi Bold Italic': FiraSans_SemiBold_Italic,
    'Fira Sans Bold': FiraSans_Bold,
    'Fira Sans Bold Italic': FiraSans_Bold_Italic,
    'Fira Sans Extra Bold': FiraSans_ExtraBold,
    'Fira Sans ExtraBold Italic': FiraSans_ExtraBold_Italic,
    'Fira Sans Black': FiraSans_Black,
    'Fira Sans Black Italic': FiraSans_Black_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Fira Sans Thin',
          }}>
          Fira Sans Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Fira Sans Thin Italic',
          }}>
          Fira Sans Thin Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Fira Sans Extra Light',
          }}>
          Fira Sans Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Fira Sans Extra Light Italic',
          }}>
          Fira Sans Extra Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Fira Sans Light',
          }}>
          Fira Sans Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Fira Sans Light Italic',
          }}>
          Fira Sans Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Fira Sans Regular',
          }}>
          Fira Sans Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Fira Sans Italic',
          }}>
          Fira Sans Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Fira Sans Medium',
          }}>
          Fira Sans Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Fira Sans Medium Italic',
          }}>
          Fira Sans Medium Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Fira Sans Semi Bold',
          }}>
          Fira Sans Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Fira Sans Semi Bold Italic',
          }}>
          Fira Sans Semi Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Fira Sans Bold',
          }}>
          Fira Sans Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Fira Sans Bold Italic',
          }}>
          Fira Sans Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Fira Sans Extra Bold',
          }}>
          Fira Sans Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Fira Sans Extra Bold Italic',
          }}>
          Fira Sans Extra Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Fira Sans Black',
          }}>
          Fira Sans Black
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Fira Sans Black Italic',
          }}>
          Fira Sans Black Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![FiraSans_100Thin](./FiraSans_100Thin.ttf.png)|![FiraSans_100Thin_Italic](./FiraSans_100Thin_Italic.ttf.png)|![FiraSans_200ExtraLight](./FiraSans_200ExtraLight.ttf.png)||
|![FiraSans_200ExtraLight_Italic](./FiraSans_200ExtraLight_Italic.ttf.png)|![FiraSans_300Light](./FiraSans_300Light.ttf.png)|![FiraSans_300Light_Italic](./FiraSans_300Light_Italic.ttf.png)||
|![FiraSans_400Regular](./FiraSans_400Regular.ttf.png)|![FiraSans_400Regular_Italic](./FiraSans_400Regular_Italic.ttf.png)|![FiraSans_500Medium](./FiraSans_500Medium.ttf.png)||
|![FiraSans_500Medium_Italic](./FiraSans_500Medium_Italic.ttf.png)|![FiraSans_600SemiBold](./FiraSans_600SemiBold.ttf.png)|![FiraSans_600SemiBold_Italic](./FiraSans_600SemiBold_Italic.ttf.png)||
|![FiraSans_700Bold](./FiraSans_700Bold.ttf.png)|![FiraSans_700Bold_Italic](./FiraSans_700Bold_Italic.ttf.png)|![FiraSans_800ExtraBold](./FiraSans_800ExtraBold.ttf.png)||
|![FiraSans_800ExtraBold_Italic](./FiraSans_800ExtraBold_Italic.ttf.png)|![FiraSans_900Black](./FiraSans_900Black.ttf.png)|![FiraSans_900Black_Italic](./FiraSans_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/southem/southem/tree/master/packages/fonts#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@southem/fonts` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Fira Sans page on Google Fonts](https://fonts.google.com/specimen/Fira+Sans) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Fira Sans on Google Fonts](https://fonts.google.com/specimen/Fira+Sans)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@southem/fonts)
- [This package on GitHub](https://github.com/southem/southem/tree/master/packages/fonts)
