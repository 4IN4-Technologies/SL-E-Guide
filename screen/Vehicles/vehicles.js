import React, { Component } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, Text, ImageBackground,Image } from "react-native";
import CupertinoHeaderWithAddButton from "./components/CupertinoHeaderWithAddButton";
;

function Vehicles() {
  return (
    <SafeAreaView style={{flex:1}}>
  

<View style={styles.container}>

<CupertinoHeaderWithAddButton style={styles.cupertinoHeaderWithAddButton}></CupertinoHeaderWithAddButton>

<ScrollView >
 <ImageBackground source={require('./assets/bg.png')}>  
          

<View style={styles.list}>
<Text style={styles.hlist}>NEWANJITH RENT A CAR</Text>
<Text style={styles.plist}>   
<Image style={{width:150,height:150,}} source={{uri:"https://rentcar.lk/wp-content/uploads/2020/02/Car-Rental-Image-25.png"}}/>  {'\n'}                      
.                                                      Rent a car service {'\n'}
.                                                      +94 71 440 2885{'\n'}
.                                                      18 years of service{'\n'}
.                                                      Chat with Whatssapp
</Text>
</View>


<View style={styles.list}>
<Text style={styles.hlist}>SR rent a car</Text>
<Text style={styles.plist}>
<Image style={{width:150,height:150,alignItems:'center'}} source={{uri:"https://srilankarentacar.lk/wp-content/uploads/2021/06/Vehicle-Group.png"}}/>{'\n'} 
.                                                 Rent a car service{'\n'}
.                                                 +94 77 778 0729{'\n'}
.                                                 Service since 2004{'\n'}
.                                                 Contact Us 24/7</Text>
</View>

<View style={styles.list}>
<Text style={styles.hlist}>MALKEY RENT-A-CAR</Text>
<Text style={styles.plist}>
<Image style={{width:150,height:150,}} source={{uri:"https://d8asu6slkrh4m.cloudfront.net/2013/04/vw-van.jpg"}}/>{'\n'} 
.                                               Car/Van/Bus/SUV{'\n'}
.                                               +94 11 2365365{'\n'}
.                                               24/7 PICKUP/DROP{'\n'}
.                                               GPS SAT NAV</Text>
</View>


<View style={styles.list}>
<Text style={styles.hlist}>CASON Rent A Car </Text>
<Text style={styles.plist}>
<Image style={{width:150,height:150,}} source={{uri:"https://th.bing.com/th/id/OIP.lcxKqBjAOrGeP379tRb1tAHaFy?pid=ImgDet&rs=1"}}/>{'\n'} 
.                                                Car/Van/Bus/SUV/Bike/Tuk tuk{'\n'}
.                                                +94 777 312 500{'\n'}
.                                                24/7 Breakdown Service{'\n'}
.                                                Book via Whattsapp</Text>
</View>

<View style={styles.list}>
<Text style={styles.hlist}>SHINEWAY rent a car</Text>
<Text style={styles.plist}>
<Image style={{width:150,height:150,}} source={{uri:"https://th.bing.com/th/id/OIP.RD3pht1vUE9-gfZlnU6GAAHaHa?w=189&h=189&c=7&r=0&o=5&dpr=1.3&pid=1.7"}}/> {'\n'}
.                                                 ECONOMY/STANDATD/LUXURY{'\n'}
.                                                 +94 71 278 9323{'\n'}
.                                                 We are ready to take your call{'\n'}
.                                                 24/7{'\n'}
.                                                 Reserve now</Text>
</View>

</ImageBackground> 
   
</ScrollView> 
</View>


     
</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(247,247,247,1)"
  },
  
  cupertinoHeaderWithAddButton: {
    height: 44,
    width: 380,
    opacity: 0.55,
    marginTop: 10,
    backgroundColor:"#ffffff",
    alignSelf: "center"
  },
  list:{
    backgroundColor: '#ffffff',
    padding:0,
    marginHorizontal:10,
    marginVertical:10,
    height: 250,
    width: 370,
    borderRadius:10
    },
    hlist:{
    fontSize:18,
    color:"blue",
    marginLeft:120,
    fontWeight:'bold'
    },
    plist:{
    fontSize:13,
    fontWeight:'bold',
    color:'green',
    },


});

export default Vehicles;