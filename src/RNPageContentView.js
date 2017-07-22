import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';
class EmptyPage extends React.Component {
  render() {
    return (
      <View style={styles.container_View_Style}>
        <Text style={styles.content_Text_Style}>
          {this.props.text}
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container_View_Style:{
    flex:1,
    padddingTop:64,
  },
  content_Text_Style:{
    margin:10,
  },
})
