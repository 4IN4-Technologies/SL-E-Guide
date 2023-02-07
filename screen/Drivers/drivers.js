import React, { Component } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, Text, ImageBackground,Image } from "react-native";
import CupertinoHeaderWithAddButton from "./components/CupertinoHeaderWithAddButton";
import MaterialButtonViolet from "../guides/components/MaterialButtonViolet";


function Drivers() {
  return (
<SafeAreaView style={{flex:1}}>
<View style={styles.container}>
<CupertinoHeaderWithAddButton style={styles.cupertinoHeaderWithAddButton}></CupertinoHeaderWithAddButton>
<ScrollView>

<ImageBackground source={require('./assets/bg.png')}>  
          
<View style={styles.list}>
<Text style={styles.hlist}>Nishantha Jayawardana</Text>
<View style={styles.detailslist}>
<Image style={{width:150,height:150,}} source={{uri:"https://th.bing.com/th?id=AwyjLboIyyNbT/Q480x360&rs=1&pid=ImgDet"}}/>
<View>
<Text style={styles.plist}>                    
Colombo, Western {'\n'}
+94 77 628 7373{'\n'}
8 Year experience{'\n'}
Available Now
</Text>
<MaterialButtonViolet phoneNumber="+94 77 628 7373" />
</View>
</View>
</View>

<View style={styles.list}>
<Text style={styles.hlist}>Charitha Fernando</Text>
<View style={styles.detailslist}>
<Image style={{width:150,height:150,}} source={{uri:"https://media-cdn.tripadvisor.com/media/photo-s/19/0f/94/9e/caption.jpg"}}/>
<View>
<Text style={styles.plist}>                    
Kalutara, {'\n'}
Jayavardhanapura{'\n'}
+94 71 354 9803{'\n'}
6 Year experience{'\n'}
Available Now
</Text>
<MaterialButtonViolet phoneNumber="+94 71 354 9803" />
</View>
</View>
</View>


<View style={styles.list}>
<Text style={styles.hlist}> Dinesh Priyantha</Text>
<View style={styles.detailslist}>
<Image style={{width:150,height:150,}} source={{uri:"https://media-cdn.tripadvisor.com/media/photo-s/19/21/be/fb/photo0jpg.jpg"}}/>
<View>
<Text style={styles.plist}>                    
Jayanthi Rd, {'\n'}
Honnanthara{'\n'}
+94 71 219 7939{'\n'}
7 Year experience{'\n'}
Available Now
</Text>
<MaterialButtonViolet phoneNumber="+94 71 219 7939" />
</View>
</View>
</View>

<View style={styles.list}>
<Text style={styles.hlist}>Sirimewan Abeysinghe</Text>
<View style={styles.detailslist}>
<Image style={{width:150,height:150,}} source={{uri:"https://media-cdn.tripadvisor.com/media/photo-s/19/fa/fc/32/caption.jpg"}}/>
<View>
<Text style={styles.plist}>                    
Kimbulapitiya,{'\n'}
Katunayaka{'\n'}
+94 77 605 0290{'\n'}
12 Year experience{'\n'}
Available Now
</Text>
<MaterialButtonViolet phoneNumber="+94 77 605 0290" />
</View>
</View>
</View>

<View style={styles.list}>
<Text style={styles.hlist}>Dharshana Bandara</Text>
<View style={styles.detailslist}>
<Image style={{width:150,height:150,}} source={{uri:"https://media-cdn.tripadvisor.com/media/photo-s/21/7d/fe/b0/immortal-memories.jpg"}}/>
<View>
<Text style={styles.plist}>                    
Katana, Negombo{'\n'}
+94 77 351 1554{'\n'}
5 Year experience{'\n'}
Available Now{'\n'}
VIP Driver
</Text>
<MaterialButtonViolet phoneNumber="+94 77 351 1554" />
</View>
</View>
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
    detailslist:{
      marginVertical:30,
      marginHorizontal:15,
      flexDirection:"row",
      justifyContent:"space-between"
    }

});

export default Drivers;