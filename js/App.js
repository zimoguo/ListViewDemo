import React, {Component} from 'react'

import {
  Navigator,
} from 'react-native'

import Index from './index.js'
import Platform from 'Platform';

export default class App extends Component{
  render(){
    return(
      <Navigator
        initialRoute={{name: 'Index', component: Index}}
        configureScene={() => {
          if (Platform.OS === 'android') {
            return Navigator.SceneConfigs.FadeAndroid;
          }
          return Navigator.SceneConfigs.FloatFromBottom;
        }}
        renderScene={(route, navigator) => {
          if (route.component) {
            const Comp = route.component;
            return <Comp {...route.params} navigator={navigator} />
          }
          return null;
        }}
      />
    );
  };
}
