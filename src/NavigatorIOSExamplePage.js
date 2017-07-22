import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  TouchableHightlight,
  ScrollView,
} from 'react-native';
/* 导出page 内容的View层*/
import RNPageContentView from "./RNPageContentView.js";

class NavigatorIOSExamplePage extends  Component{
  /* */
  render(){
    let recurseTitle = "Recurse Nav";
    if (!this.props.deth || this.props.deth === 1) {
      recurseTitle += "-more example  here";
    }
    return(
      <ScrollView style ={styles.scrollView_Style}>
        <View style = {styles.line_Style}>
        </View>
        <View style ={styles.group_Style}>
          //1.render_Row
          {
            this.render_Row(recurseTitle,()=>{
              this.props.navigator.push({
                title:NavigatorIOSExamplePage.title,
                component:NavigatorIOSExamplePage,
                backButtonTitle:"Custom Back",
                passProps:{depth:this.props.deth ? this.props.deth +1:1},
              });
            })
          }
          //2.render_Row
         {
          this.render_Row("Push View example",()=>{
            this.props.navigator.push({
              title:"Very long...",
              component:create
            });
          });
         }


        </View>
      </ScrollView>
    );
  }
  /* */
  render_Row =(title:String,onPress:Function)=>{
    return(
      <View >
        <TouchableHighlight
            onPress = {onPress}>
            <View style = {styles.row_Style}>
              <Text style = {styles.row_Text_Style}>
               {title}
              </Text>
            </View>
        </TouchableHighlight>
      </View>

    );
  }
}
//styles
styles = StyleSheet.create({
  scrollView_Style:{
    backgroundColor:"#eeeeee",
    marginTop:10,
  },
  line_Style:{
  backgroundColor:"#bbbbbb",
  height:StyleSheet.hairlineWidth,
  },
  group_Style:{
    backgroundColor:"white",
  },
  row_Style:{
      backgroundColor:"white",
      justifyContent:"center",
      paddingHorizontal:15,
      paddingVertial:15,
  },
  row_Text_Style:{
    fontSize:17,
    fontWeight:"500",
  },
})

export default NavigatorIOSExamplePage;
