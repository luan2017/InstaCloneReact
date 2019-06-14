import React, { Component } from 'react';

import { View, Image, Text, FlatList, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

import Camera from '../assets/camera.png';
import netflix from '../assets/netflix.jpeg';
import more from '../assets/more.png';
import like from '../assets/like.png';
import comment from '../assets/comment.png';
import send from '../assets/send.png';
import phone from '../assets/phone.jpeg';
import tv from '../assets/tv.jpg';
import car from '../assets/car.jpg';
import caveira from '../assets/caveira.jpg';
import xbox from '../assets/xbox.jpg';
import s9 from '../assets/s9.jpg';

export default class Feed extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight: (
      <TouchableOpacity style={{justifyContent: 'flex-end', margin: 10}} onPress ={ () => navigation.navigate('New')}>
        <Image source={Camera} />
      </TouchableOpacity>
    ),
  });

  render() {
    return (
      <ScrollView>
      <View style={styles.container}>

        <Text style={styles.text} >Car Tunning</Text>          

          <Image style={styles.feedImage} source={car} />

          <View style={styles.feedItemHeader}>
            <View style={styles.actions}>
             <TouchableOpacity style={styles.action} onPress ={ () => {} } >
               <Image source={like} />
             </TouchableOpacity>

             <TouchableOpacity style={styles.action} onPress ={ () => {} } >
               <Image source={comment} />
             </TouchableOpacity>

             <TouchableOpacity style={styles.action} onPress ={ () => {} } >
               <Image source={send} />
             </TouchableOpacity>

             <Text style={{fontWeight: 'bold'}}>140 </Text>
             <Text> Curtidas </Text>

            </View>
          </View>

          <Text style={styles.text} >TV 4K</Text>          

          <Image style={styles.feedImage} source={tv} />

          <View style={styles.feedItemHeader}>
            <View style={styles.actions}>
            <TouchableOpacity style={styles.action} onPress ={ () => {} } >
              <Image source={like} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.action} onPress ={ () => {} } >
              <Image source={comment} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.action} onPress ={ () => {} } >
              <Image source={send} />
            </TouchableOpacity>

            <Text style={{fontWeight: 'bold'}}>255 </Text>
            <Text> Curtidas </Text>

            </View>
          </View>


          <Text style={styles.text} >Mexican Arts</Text>          

          <Image style={styles.feedImage} source={caveira} />

          <View style={styles.feedItemHeader}>
            <View style={styles.actions}>
             <TouchableOpacity style={styles.action} onPress ={ () => {} } >
               <Image source={like} />
             </TouchableOpacity>

             <TouchableOpacity style={styles.action} onPress ={ () => {} } >
               <Image source={comment} />
             </TouchableOpacity>

             <TouchableOpacity style={styles.action} onPress ={ () => {} } >
               <Image source={send} />
             </TouchableOpacity>

             <Text style={{fontWeight: 'bold'}}>248 </Text>
             <Text> Curtidas </Text>

            </View>
          </View>

          <Text style={styles.text} > Samung Galaxy S9</Text>          

          <Image style={styles.feedImage} source={s9} />

          <View style={styles.feedItemHeader}>
            <View style={styles.actions}>
            <TouchableOpacity style={styles.action} onPress ={ () => {} } >
              <Image source={like} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.action} onPress ={ () => {} } >
              <Image source={comment} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.action} onPress ={ () => {} } >
              <Image source={send} />
            </TouchableOpacity>

            <Text style={{fontWeight: 'bold'}}>67 </Text>
            <Text> Curtidas </Text>
            </View>
          </View>


          <Text style={styles.text} >Lançamento Xbox</Text>          

          <Image  style={styles.feedImage} source={xbox} />

          <View style={styles.feedItemHeader}>
            <View style={styles.actions}>
            <TouchableOpacity style={styles.action} onPress ={ () => {} } >
              <Image source={like} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.action} onPress ={ () => {} } >
              <Image source={comment} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.action} onPress ={ () => {} } >
              <Image source={send} />
            </TouchableOpacity>

            <Text style={{fontWeight: 'bold'}}>85 </Text>
            <Text> Curtidas </Text>
            </View>
          </View>
          <View style={{marginBottom: 20}}></View>
      </View>
      </ScrollView>
    
    );
  }
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
 },
 feedItem: {
   marginTop: 20,
 },
 feedItemHeader: {
   paddingHorizontal: 15,

   flexDirection: 'row',
   justifyContent: 'space-between',
   alignItems: 'center'


 },
 actions: {
   flexDirection: 'row'

 },
 feedImage: {
   width: '100%',
   height: 400,
   marginVertical: 20
 },
 feedItemFooter: {
   paddingHorizontal: 15,
 },
 action:{
  marginRight: 8,
 },
 likes: {
   marginTop: 15,
   fontWeight: 'bold',
   color: '#000',
 },
 description: {
  lineHeight: 18,
  color: '#000'
 },
 text: {
   fontWeight: 'bold',
   fontSize: 16,
   color: 'black',
   padding: 10,
   marginTop: 30,
 }
});
