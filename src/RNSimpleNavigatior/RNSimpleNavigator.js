import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHightlight,
  Image,
  Navigator,
} from 'react-native';
class RNSimpleFirstPage extends Component{
  //Nav
     clickJump(){
       const {navigator} = this.props;
       if (navigator) {
         navigator.push({
           name:"Second Page",
           component:RNSimpleSecondPage,
         })
       }
     }
     render(){
       return(
         <View style = {styles.container_Style}>
           <Text>First Page</Text>
           <TouchableHightlight
             underlayColor = "rgb(180,136,254)"
             activeOpacity = {0.5}
             style ={styles.touch_Style}
             onPress ={this.clickJump.bind(this)}
             >
               <Text>Push to second page</Text>
             </TouchableHightlight>
         </View>
       )
     }
}
const styles= StyleSheet.create({
  container_Style:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"red",
  },
  touch_Style:{
    borderRadius:8,
    padding:8,
    marginTop:5,
    backgroundColor:"green",
  }
})
