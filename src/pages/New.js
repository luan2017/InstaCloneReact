import React, { Component } from 'react';

import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';


export default class New extends Component {
  
  render() {
    return (

        <View style={styles.container}>
          <Text style={styles.text}> Em Desenvolvimento . . .</Text>
          <ActivityIndicator style={{ justifyContent: 'flex-end'}}/>
        </View> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25
  },
  text:{
    fontSize: 20,
    fontWeight:'bold',
    color: 'white',
    
  }

});
