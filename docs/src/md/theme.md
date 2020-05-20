# Themes
 
 ### Features
 
 - Lightly dependency, very little dependency
 - Global theming, a variety of style selector implementation
 - Rich base components
 - Friendly API design
 
 ## Quick Start
 
 Now, simply copy the following to your `index.ts` file of React Native project:
 
 ``` js
 import React, { Component } from 'react';
 import { AppRegistry } from 'react-native';
 import Theme, { ThemeProviderv} from '@southem/theme';
 import defaultTheme from '@southem/theme/resources/default';
 
 // Register a default theme
 Theme.registerTheme('default', [
   defaultTheme,
 ]);
 
 class Examples extends Component {
   render() {
     return (
       <ThemeProvider theme={'default'}>
         <View>
           <Text>Hello World</Text>
         </View>
       </ThemeProvider>
     );
   }
 }
 
 AppRegistry.registerComponent('Examples', () => Examples);
 ```
