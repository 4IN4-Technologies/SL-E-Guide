import React, { Component } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, Text, ImageBackground,Image} from "react-native";
import CupertinoHeaderWithAddButton from "./components/CupertinoHeaderWithAddButton";
import MaterialButtonViolet from "./components/MaterialButtonViolet";

function Hotels() {
  return (
<SafeAreaView style={{flex:1}}>  

<View style={styles.container}>
<CupertinoHeaderWithAddButton style={styles.cupertinoHeaderWithAddButton}></CupertinoHeaderWithAddButton>
<ScrollView >
<ImageBackground source={require('../src/bg.png')}>  
          

<View style={styles.rect2}><Text>KURUNEGALA</Text></View>

<View style={styles.list}>
<Text style={styles.hlist}>Kandyan Reach Hotel</Text>
<View style={styles.detailslist}>
<Image style={{width:100,height:100,}} source={{uri:"https://aff.bstatic.com/images/hotel/max250/909/90995431.jpg"}}/>
<View>
<Text style={styles.plist}>                  
Kandy Road, Kurunegala{'\n'}
+94 372 224 218{'\n'}
1 night, 2 adults{'\n'}
US$90
</Text>
<MaterialButtonViolet phoneNumber="+94372224218" />
</View>
</View>  
</View>

<View style={styles.list}>
<Text style={styles.hlist}>Hotel Blue Sky</Text>
<View style={styles.detailslist}>
<Image style={{width:100,height:100,}} source={{uri:"https://cf.bstatic.com/xdata/images/hotel/square600/280629485.webp?k=ea45593d2f8091ba120e325c7345c9480060a5f3b87c8f0f9b859ed856351b02&o=&s=1"}}/>
<View>
<Text style={styles.plist}>                  
Malpiyali Mawatha,{'\n'} Malkaduwawa{'\n'}
+94 372 224 777{'\n'}
1 night, 2 adults{'\n'}
US$22
</Text>
<MaterialButtonViolet phoneNumber="+94372224777" />
</View>
</View>  
</View>

<View style={styles.rect2}><Text>COLOMBO</Text></View>

<View style={styles.list}>
<Text style={styles.hlist}>Marino Beach Colombo</Text>
<View style={styles.detailslist}>
<Image style={{width:100,height:100,}}source={{uri:"https://images.trvl-media.com/lodging/30000000/29970000/29961100/29961010/46836ee4.jpg?impolicy=resizecrop&rw=455&ra=fit"}}/>
<View>
<Text style={styles.plist}>                  
590 , Marine Drive, {'\n'} 
Colombo 03, Colpetty,{'\n'}
 Colombo{'\n'}
 per night$58{'\n'}
+94112375375</Text>
<MaterialButtonViolet phoneNumber="+94112375375" />
</View>
</View> 
</View>

<View style={styles.list}>
<Text style={styles.hlist}>Shangri-La Colombo</Text>
<View style={styles.detailslist}>
<Image style={{width:100,height:100,}} source={{uri:"https://images.trvl-media.com/lodging/20000000/19420000/19414300/19414242/ffc2c2a1.jpg?impolicy=resizecrop&rw=1200&ra=fit"}}/>
<View>
<Text style={styles.plist}>                  
$195 per night{'\n'}
Colombo, Western{'\n'}
10.9 km{'\n'}
+94 117 888 288
</Text>
<MaterialButtonViolet phoneNumber="+94112590200" />
</View>
</View>  
</View>

<View style={styles.list}>
<Text style={styles.hlist}>Granbell Hotel Colombo</Text>
<View style={styles.detailslist}>
<Image style={{width:100,height:100,}} source={{uri:"https://pix8.agoda.net/hotelImages/30921489/0/f9534cceea9fbe9eed361f334c0ecf89.jpg?ca=27&ce=0&s=1024x768"}}/>
<View>
<Text style={styles.plist}>                  
Kollupitiya Road,{'\n'}  
No. 282/5, Colpetty, {'\n'} 
Colombo {'\n'} 
+94 112 698 847</Text>
<MaterialButtonViolet phoneNumber="+94112698847" />
</View>
</View>  
</View>

 <View style={styles.rect2}><Text>KANDY</Text></View>

<View style={styles.list}>
<Text style={styles.hlist}>Cafe Aroma Inn</Text>
<View style={styles.detailslist}>
<Image style={{width:100,height:100,}} source={{uri:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/35393134.jpg?k=08f728d81414091f6c7263dce386ddb13747562bf1003c240782c6703dfc042c&o=&hp=1"}}/>
<View>
<Text style={styles.plist}>                  
Colombo Street,{'\n'} 
 Kandy, Central{'\n'} 
 US$20 per night{'\n'}
+94 812 229 950
</Text>
<MaterialButtonViolet phoneNumber="+94812229950" />
</View>
</View>  
</View>

<View style={styles.list}>
<Text style={styles.hlist}>Kandy City Hotel by Earl's</Text>
<View style={styles.detailslist}>
<Image style={{width:100,height:100,}} source={{uri:"https://cf.bstatic.com/xdata/images/hotel/max1280x900/214183312.jpg?k=0aa518859e7b41ac21365922b6b7104e713221258607bdd0d49d87035f560d2c&o=&hp=1"}}/>
<View>
<Text style={styles.plist}>                  
37 Yatinuwara Street,{'\n'} 
 Kandy{'\n'} 
US$40 per night{'\n'}
+94 812 220 002
</Text>
<MaterialButtonViolet phoneNumber="+94812220002" />
</View>
</View>  
</View>

 <View style={styles.rect2}><Text>ANURADHAPURA</Text></View>

<View style={styles.list}>
<Text style={styles.hlist}>Hotel White House</Text>
<View style={styles.detailslist}>
<Image style={{width:100,height:100,}} source={{uri:"https://cf.bstatic.com/xdata/images/hotel/max1280x900/88154319.jpg?k=9a3d761371335b551c5b32b6e4d52f3bfb80c3371d6e484ac322a78ba344975e&o=&hp=1"}}/>
<View>
<Text style={styles.plist}>                  
Stage 2, {'\n'} 
Dahaiyagama Junction,{'\n'} 
Anuradhapura,{'\n'} 
US$30 per night {'\n'}
+94252224444
</Text>
<MaterialButtonViolet phoneNumber="+94252224444" />
</View>
</View>  
</View>

<View style={styles.list}>
<Text style={styles.hlist}>CTC Receptions</Text>
<View style={styles.detailslist}>
<Image style={{width:100,height:100,}} source={{uri:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/300510739.jpg?k=58358e5e7e3e1a647cb61839c847d4a61155a050f305974875c124ffae078c25&o=&hp=1"}}/>
<View>
<Text style={styles.plist}>                  
Udaya Mawatha, {'\n'}
Anuradhapura,{'\n'} 
US$9 per night {'\n'}
+94 252 235 193
</Text>
<MaterialButtonViolet phoneNumber="+94252235193" />
</View>
</View>  
</View>

<View style={styles.rect2}><Text>HAMBANTOTA</Text></View>

<View style={styles.list}>
<Text style={styles.hlist}>Hambanthota Beach Hotel</Text>
<View style={styles.detailslist}>
<Image style={{width:100,height:100,}}source={{uri:"https://cf.bstatic.com/xdata/images/hotel/max1280x900/161684914.jpg?k=a7101deac950ffbc5a5a9ea2b29798e5c76112b9c1a3e1fcd174e1ba8170093d&o=&hp=1"}}/>
<View>
<Text style={styles.plist}>                  
City Center Building,{'\n'}
Hambantota{'\n'} 
US$10 per night{'\n'}
+94 71 579 0401</Text>
<MaterialButtonViolet phoneNumber="+94715790401" />
</View>
</View>
</View>

<View style={styles.list}>
<Text style={styles.hlist}>Duncan Murray Villa</Text>
<View style={styles.detailslist}>
<Image style={{width:100,height:100,}} source={{uri:"https://cf.bstatic.com/xdata/images/hotel/max1280x900/244965093.jpg?k=238145b93fd73fe5cb07a11ac4628b93a0974b5011db9c0b6c7e297ef60f45be&o=&hp=1"}}/>
<View>
<Text style={styles.plist}>                  
Well Road, {'\n'}
Hambantota{'\n'}
US$7 per night{'\n'}
+94 71 138 7540</Text>
<MaterialButtonViolet phoneNumber="+94711387540" />
</View>
</View>
</View>


<View style={styles.rect2}><Text>JAFFNA</Text></View>
<View style={styles.list}>
<Text style={styles.hlist}>Cedar</Text>
<View style={styles.detailslist}>
<Image style={{width:100,height:100,}}source={{uri:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/269596633.jpg?k=15bc010ff489c86f5614e788c7004078b742facdd62a62ae6a3a94c988b9bb72&o=&hp=1"}}/>
<View>
<Text style={styles.plist}>                  
Kandy Rd, {'\n'}
Jaffna{'\n'}
US$11 per night{'\n'}
+94 77 151 2892</Text>
<MaterialButtonViolet phoneNumber="+94771512892" />
</View>
</View> 
</View>

<View style={styles.list}>
<Text style={styles.hlist}>Hotel Lovusiyah</Text>
<View style={styles.detailslist}>
<Image style={{width:100,height:100,}}source={{uri:"https://cf.bstatic.com/xdata/images/hotel/max1280x900/180276850.jpg?k=ae6e0c0b62a233fcefb4357890e96e25db13a9bf1c41447018dbf5bf5674dbf7&o=&hp=1"}}/>
<View>
<Text style={styles.plist}>                  
Clock tower road,{'\n'}
Jaffna{'\n'}
US$15 per night{'\n'}
+94 77 821 0122</Text>
<MaterialButtonViolet phoneNumber="+94778210122" />
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
    rect2: {
    width: 400,
    height: 24,
    backgroundColor: "#cc66ff"
  },
  list:{
    backgroundColor: '#ffffff',
    padding:0,
    marginHorizontal:10,
    marginVertical:10,
    height: 175,
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
      flexDirection:"row",
      marginVertical:30,
      marginHorizontal:15,
      justifyContent:"space-between"
    }


});

export default Hotels;