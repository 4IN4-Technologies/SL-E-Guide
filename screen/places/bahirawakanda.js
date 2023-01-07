import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Text, ScrollView, SafeAreaView, ImageBackground} from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';


export default function App() {

    const images = [
        'https://i.pinimg.com/736x/d2/92/a8/d292a87469d240ca9fbba5dcb91d5865.jpg',
        'https://www.kandyescapes.com/wp-content/uploads/2020/04/bahirawakanda-mob.jpg',
        'https://duqjpivknq39s.cloudfront.net/2019/01/800x750-1.jpg',
        'https://img.freepik.com/premium-photo/bahirawa-kanda-bahirawakanda-vihara-buddha-statue-kandy-sri-lanka-bahirawakanda-is-giant-samadhi-buddha-statue-top-mountain-kandy_78361-9863.jpg?w=2000',
      ]
  const [mapRegion, setMapRegion] = useState({
    latitude: 7.300,   
    longitude: 80.617, 
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  return (
    <SafeAreaView style={{ flex: 1}}>
      <ScrollView>
        <View>
          <SliderBox images={images} dotColor="red" inactiveDotColor="black" dotStyle={{
            height:20, width:20, borderRadius:50
          }}/>
        </View>
        <View style={styles.container}>
        <ImageBackground source={require('./assets/images/bg.jpeg')} resizeMode="cover" style={{flex:1,resizeMode:'cover',height:800}}>
          <View>
            <Text style={styles.title}>Bahirawakanda</Text>
          </View>
          <View style={styles.description}>
            <Text style={{fontSize:15}}> 
             
            Bhairava Kanda is a beautiful hilltop facing the Tooth Relic in the Kandy District of the Central Province. 
            Its 650 feet tall Buddha statue has attracted many local and foreign tourists. Planting a southern branch of the Jayasree Maha Bodhi, 
            erecting a Bodhi wall and a gold fence, this Buddha statue has been further expanded and given the taste of Dhamma to the area. In the past, 
            this shrine could be called a shrine dedicated to the good of the country and those who went astray were sent back to the right path.

Sri Maha Bodhi Temple, located on the top of the Bhairawakanda Hills, is one of the most popular temples in Kandy due to its gigantic Buddha statues, 
which can be seen from anywhere in Kandy. Built in 1972, the statue depicts the Supreme Buddha seated in a nirvana position.

At over 25 meters tall, it is one of the tallest Buddha statues in Sri Lanka. Behind the huge white statue of the Buddha, a 
flight of stairs allows visitors to climb up and view the magnificent landscape around the temple.

            </Text>
          </View>
          <View style={styles.mapcontain}>
            <MapView style={styles.map} region={mapRegion}>
              <Marker coordinate={mapRegion} title="Marker" />
            </MapView>
          </View>
          </ImageBackground>  
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 700,
    resizeMode: 'contain'
  },
  mapcontain: {
    alignSelf: 'center',
    flex:1,
    paddingBottom:80
  },
  description:{
    flex:2,
    paddingTop:40,

  },
  map: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    paddingVertical:120,
    paddingHorizontal:200,
    margin: 10,
  },
  bgimage:{
    flex:1,
  },
  title:{
    fontWeight:'bold',
    textAlign:'center',
    fontSize:40
  }
});