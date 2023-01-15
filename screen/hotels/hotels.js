import React, { Component } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, Text, ImageBackground,Image } from "react-native";
import CupertinoHeaderWithAddButton from "./components/CupertinoHeaderWithAddButton";

function Hotels() {
  return (
<SafeAreaView style={{flex:1}}>
<View style={styles.container}>
<CupertinoHeaderWithAddButton style={styles.cupertinoHeaderWithAddButton}></CupertinoHeaderWithAddButton>
<ScrollView style={styles.scroll}>
<ImageBackground source={require('../src/bg.png')}>  
          
<View style={styles.list}>
<Text style={styles.hlist}>Kandyan Reach Hotel</Text>
<Text style={styles.plist}>   
<Image style={{width:150,height:150,}} source={{uri:"https://aff.bstatic.com/images/hotel/max250/909/90995431.jpg"}}/>  {'\n'}                      
.                                              Kandy Road, Kurunegala{'\n'}
.                                              +94 372 224 218{'\n'}
.                                              1 night, 2 adults{'\n'}
.                                              US$90
</Text>
</View>


<View style={styles.list}>
<Text style={styles.hlist}>Hotel Blue Sky</Text>
<Text style={styles.plist}>
<Image style={{width:150,height:150,alignItems:'center'}} source={{uri:"https://cf.bstatic.com/xdata/images/hotel/square600/280629485.webp?k=ea45593d2f8091ba120e325c7345c9480060a5f3b87c8f0f9b859ed856351b02&o=&s=1"}}/>{'\n'} 
.                                              Malpiyali Mawatha, Malkaduwawa{'\n'}
.                                              +94 372 224 777{'\n'}
.                                              1 night, 2 adults{'\n'}
.                                              US$22</Text>
</View>

<View style={styles.list}>
<Text style={styles.hlist}> Earls Red Kurunegala </Text>
<Text style={styles.plist}>
<Image style={{width:150,height:150,}} source={{uri:"https://cf.bstatic.com/xdata/images/hotel/square600/186885706.webp?k=4e7d29f8880f18774d6af3f8a4fae114a3b6516642037a57a2a5aa1b6063165b&o=&s=1"}}/>{'\n'} 
.                                               Malpiyali Rd,Malkaduwawa{'\n'}
.                                              +94 372 227 414{'\n'}
.                                              1 night, 2 adults{'\n'}
.                                               US$27</Text>
</View>


<View style={styles.list}>
<Text style={styles.hlist}>Kakulanda</Text>
<Text style={styles.plist}>
<Image style={{width:150,height:150,}} source={{uri:"https://cf.bstatic.com/xdata/images/hotel/square600/418828669.webp?k=89fcd4991df63c9a3429dcd2cfcd860a0f163045b4a5849a4d5846f117ee32ba&o=&s=1"}}/>{'\n'} 
.                                                Galabodagama, Uhameeya{'\n'}
.                                                +94 70 644 5644{'\n'}
.                                                1 night, 2 adults{'\n'}
.                                                 US$32</Text>
</View>

<View style={styles.list}>
<Text style={styles.hlist}>NINETY-NINE APARTMENTS</Text>
<Text style={styles.plist}>
<Image style={{width:150,height:150,}} source={{uri:"https://cf.bstatic.com/xdata/images/hotel/square600/377097388.webp?k=ab8afa637db7ddd9092586abe2eeb2f55914d57c8a52e4232c9fda4152fa46c2&o=&s=1"}}/> {'\n'}
.                                                Dambulla road,Pollaththapitiya{'\n'}
.                                                +94 71 431 0200{'\n'}
.                                                1 night, 2 adults{'\n'}
.                                                 US$50 </Text>
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
    fontWeight:'bold'
    },

});

export default Hotels;
