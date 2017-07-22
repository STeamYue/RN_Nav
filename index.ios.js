/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components'
/*-----------------  官网栗子-001   ------------------*/
import RNSimpleFirstPage from "./RNSimpleFirstPage.js";
import RNSimpleSecondPage from "./RNSimpleSecondPage.js";
class RN_Nav extends Component{
  render (){
    let defult_Name = "First Page Name";
    let defult_Component = RNSimpleFirstPage;
    return(
      <Navigator
        style = {{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"blue"}}
        initialRoute ={{name:defult_Name,component:RNSimpleFirstPage}}
        configureScene = {
          (route)=>{
            return Navigator.SceneConfigs.FloatFormRight
          }
        }
        renderScene = {
          (route,navigator)=>{
           return <route.component{...route.params} navigator = {navigator}/>
          }
        }
      />
    )
  }
}

AppRegistry.registerComponent('RN_Nav', () => RN_Nav);
