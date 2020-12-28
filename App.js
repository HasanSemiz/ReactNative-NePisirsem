/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{Component} from 'react';
import {
  View,
} from 'react-native';
import Anasayfa from './src/pages/Anasayfa';

export default class App extends Component{
  render() {
    
    return (
     <View>
      <Anasayfa/>
     </View>
    );
  }
  
  
}
