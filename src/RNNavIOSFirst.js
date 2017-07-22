import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  TouchableHightlight,
} from 'react-native';
/* 导出View层*/
import RNPageContentView from "./RNPageContentView.js";
class RNNavIOSFirst extends Component{
  render(){
    return (
      <NavigatorIOS
        initialRoute = {{
          component:MyScene,
          title:"One",
        }}
        style = {styles.nav_Style}
      />
    );
  }
}
 const styles =StyleSheet.create({
   nav_Style:{
     flex:1,
   },
 })
