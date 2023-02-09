import React, { Component } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, Text, ImageBackground,Image} from "react-native";
import CupertinoHeaderWithAddButton from "./components/CupertinoHeaderWithAddButton";
import MaterialButtonViolet from "./components/MaterialButtonViolet";

function Hospitallist() {
  return (
<SafeAreaView style={{flex:1}}>  

<View style={styles.container}>
<CupertinoHeaderWithAddButton style={styles.cupertinoHeaderWithAddButton}></CupertinoHeaderWithAddButton>
<ScrollView >
<ImageBackground source={require('./assets/bg.png')}>  
          
<View style={styles.rect2}><Text>COLOMBO</Text></View>

<View style={styles.list}>
<Text style={styles.hlist}>Asiri Medical Hospital</Text>
<View style={styles.detailslist}>
<Image style={{width:100,height:100,}}source={{uri:"https://www.asirihealth.com/imgup/surgical-hospital/1.jpg"}}/>
<View>
<Text style={styles.plist}>                  
181, Kirula Road,{'\n'} 
Narahenpita,Colombo{'\n'}
+94114523300</Text>
<MaterialButtonViolet phoneNumber="+94114523300" />
</View>
</View> 
</View>

<View style={styles.list}>
<Text style={styles.hlist}>Park Hospitals</Text>
<View style={styles.detailslist}>
<Image style={{width:100,height:100,}} source={{uri:"https://th.bing.com/th?id=AobS4O8ZnwQP/cA480x360&rs=1&pid=ImgDet"}}/>
<View>
<Text style={styles.plist}>                  
Park Road, Colombo{'\n'}
+94 112 590 200</Text>
<MaterialButtonViolet phoneNumber="+94112590200" />
</View>
</View>  
</View>

<View style={styles.list}>
<Text style={styles.hlist}>National Hospital of Sri Lanka</Text>
<View style={styles.detailslist}>
<Image style={{width:100,height:100,}} source={{uri:"https://www.nawaloka.com/image/catalog/package/general-surgery-lap-appendicectomy.jpg"}}/>
<View>
<Text style={styles.plist}>                  
Nawam Mawatha,{'\n'}  
Jetwing House II,{'\n'} 
Colombo {'\n'} 
+94 112 698 847</Text>
<MaterialButtonViolet phoneNumber="+94112698847" />
</View>
</View>  
</View>

<View style={styles.rect2}><Text>KURUNEGALA</Text></View>

<View style={styles.list}>
<Text style={styles.hlist}>Miracle Health Hospital</Text>
<View style={styles.detailslist}>
<Image style={{width:100,height:100,}} source={{uri:"https://th.bing.com/th/id/A6bNUBcmpDgUNbQ480x360?&rs=1&pid=ImgDet"}}/>
<View>
<Text style={styles.plist}>                  
223, Dambulla Road,,{'\n'} 
Kurunegala{'\n'}
+94 377 390 350
</Text>
<MaterialButtonViolet phoneNumber="+94377390350" />
</View>
</View>  
</View>

<View style={styles.list}>
<Text style={styles.hlist}>SETHSEVANA HOSPITAL</Text>
<View style={styles.detailslist}>
<Image style={{width:100,height:100,}} source={{uri:"https://th.bing.com/th/id/AwkNSKhJV0NmSTQ480x360?&rs=1&pid=ImgDet"}}/>
<View>
<Text style={styles.plist}>                  
No.266,Colombo Road,{'\n'} 
Kurunegala{'\n'}
+94 372 232 365
</Text>
<MaterialButtonViolet phoneNumber="+94372232365" />
</View>
</View>  
</View>

 <View style={styles.rect2}><Text>KANDY</Text></View>

<View style={styles.list}>
<Text style={styles.hlist}>Asiri Hospital Kandy</Text>
<View style={styles.detailslist}>
<Image style={{width:100,height:100,}} source={{uri:"https://th.bing.com/th/id/AsiZyzTB6DxKiug480x360?&rs=1&pid=ImgDet"}}/>
<View>
<Text style={styles.plist}>                  
907, Peradeniya Road, {'\n'} 
Kandy{'\n'}
+94 814 528 800
</Text>
<MaterialButtonViolet phoneNumber="+94814528800" />
</View>
</View>  
</View>

<View style={styles.list}>
<Text style={styles.hlist}>SUWASEWANA Hospital</Text>
<View style={styles.detailslist}>
<Image style={{width:100,height:100,}} source={{uri:"https://suwasevana.lk/wp-content/uploads/bfi_thumb/logo-web-2-3gx70o6yzmude45t78pclc.png"}}/>
<View>
<Text style={styles.plist}>                  
532,Peradeniya Road, {'\n'} 
Kandy{'\n'}
+94 081 2232357
</Text>
<MaterialButtonViolet phoneNumber="+940812232357" />
</View>
</View>  
</View>

 <View style={styles.rect2}><Text>ANURADHAPURA</Text></View>

<View style={styles.list}>
<Text style={styles.hlist}>Durdans Hospital</Text>
<View style={styles.detailslist}>
<Image style={{width:100,height:100,}} source={{uri:"https://th.bing.com/th/id/OIP.y4GHm0Q67vzMMnNyxi0JzQHaEo?pid=ImgDet&rs=1"}}/>
<View>
<Text style={styles.plist}>                  
4 Kada 50,,{'\n'} 
Bandaranayaka Mawatha{'\n'}
+94255673395
</Text>
<MaterialButtonViolet phoneNumber="+94255673395" />
</View>
</View>  
</View>

<View style={styles.list}>
<Text style={styles.hlist}>ROYAL RAJARATA Hospital</Text>
<View style={styles.detailslist}>
<Image style={{width:100,height:100,}} source={{uri:"https://th.bing.com/th/id/R.f3bb8f60ecf3c8038b886acf91e32ecf?rik=8wiXJ8CrDlOTYQ&pid=ImgRaw&r=0"}}/>
<View>
<Text style={styles.plist}>                  
122 Airport Road,{'\n'} 
Anuradhapura{'\n'}
+94 71 680 2228
</Text>
<MaterialButtonViolet phoneNumber="+94716802228" />
</View>
</View>  
</View>

<View style={styles.rect2}><Text>HAMBANTOTA</Text></View>

<View style={styles.list}>
<Text style={styles.hlist}>Ruhunu Medi Hospital</Text>
<View style={styles.detailslist}>
<Image style={{width:100,height:100,}}source={{uri:"https://lh3.googleusercontent.com/p/AF1QipPuTJdAQNB0hVw50OcnrcpoWSjJcSTdWyHcG2_9=s1360-w1360-h1020"}}/>
<View>
<Text style={styles.plist}>                  
23, Barack Street,{'\n'} 
hambantota{'\n'}
+94 472 220 378</Text>
<MaterialButtonViolet phoneNumber="+94472220378" />
</View>
</View>
</View>

<View style={styles.list}>
<Text style={styles.hlist}>District General Hospital</Text>
<View style={styles.detailslist}>
<Image style={{width:100,height:100,}} source={{uri:"https://static.wixstatic.com/media/ad43bd_5445141b8b934d05a58477c89a3972cc~mv2.jpg/v1/crop/x_998,y_0,w_3610,h_2770/fill/w_845,h_649,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/IMG_7888.jpg"}}/>
<View>
<Text style={styles.plist}>                  
New Road,{'\n'}
 Hambantota{'\n'}
+94 472 222 016</Text>
<MaterialButtonViolet phoneNumber="+94472222016" />
</View>
</View>
</View>

<View style={styles.rect2}><Text>POLONNARUWA</Text></View>

<View style={styles.list}>
<Text style={styles.hlist}>Venus Lanka Hospital</Text>
<View style={styles.detailslist}>
<Image style={{width:100,height:100,}}source={{uri:"https://th.bing.com/th?id=AYjNcZ/teOH3S2w480x360&rs=1&pid=ImgDet"}}/>
<View>
<Text style={styles.plist}>
28th Mile Post,{'\n'} 
Kaduruwela, Polonnaruwa{'\n'}
+94 272 223 205</Text>
<MaterialButtonViolet phoneNumber="+94 272 223 205" />
</View>
</View> 
</View>

<View style={styles.list}>
<Text style={styles.hlist}>Shanthi Medical Centre</Text>
<View style={styles.detailslist}>
<Image style={{width:100,height:100,}} source={{uri:"https://th.bing.com/th/id/OIP.UZQbi38QETTqKNyX9Bt1AQHaDN?pid=ImgDet&rs=1"}}/>
<View>
<Text style={styles.plist}>                  
347, Maradankadawala,{'\n'}
Habarana,{'\n'}
+94272222356</Text>
<MaterialButtonViolet phoneNumber="+94272222356" />
</View>
</View>  
</View>



<View style={styles.rect2}><Text>AMPARA</Text></View>

<View style={styles.list}>
<Text style={styles.hlist}>Prabhodha Hospital</Text>
<View style={styles.detailslist}>
<Image style={{width:100,height:100,}}source={{uri:"https://web.facebook.com/prabhodhaampara/photos/a.379738465538632/1464116893767445/?__tn__=%3C"}}/>
<View>
<Text style={styles.plist}>
Pandukabaya Mawatha,{'\n'} 
Ampara{'\n'}
+94 634 672 672</Text>
<MaterialButtonViolet phoneNumber="+94634672672" />
</View>
</View> 
</View>

<View style={styles.list}>
<Text style={styles.hlist}>District General Hospital</Text>
<View style={styles.detailslist}>
<Image style={{width:100,height:100,}}source={{uri:"https://th.bing.com/th?id=AbbRWjBHpK%2bZWhw480x360&pid=ImgDet&rs=1"}}/>
<View>
<Text style={styles.plist}>
Street,{'\n'} 
Ampara{'\n'}
+94 632 222 261</Text>
<MaterialButtonViolet phoneNumber="+94632222261" />
</View>
</View> 
</View>


<View style={styles.rect2}><Text>BADULLE</Text></View>

<View style={styles.list}>
<Text style={styles.hlist}>Central Hospital</Text>
<View style={styles.detailslist}>
<Image style={{width:100,height:100,}}source={{uri:"https://th.bing.com/th/id/R.9fec2bb470dbb505fbc0f0a95ef56ef2?rik=fWXSJRuQD1Qcjg&pid=ImgRaw&r=0"}}/>
<View>
<Text style={styles.plist}>
No:12,Ward St,{'\n'} 
Badulla{'\n'}
+94 552 222 164</Text>
<MaterialButtonViolet phoneNumber="+94552222164" />
</View>
</View> 
</View>

<View style={styles.list}>
<Text style={styles.hlist}>Perlin Pvt Hospital</Text>
<View style={styles.detailslist}>
<Image style={{width:100,height:100,}} source={{uri:"https://photos.wikimapia.org/p/00/01/61/04/40_big.jpg"}}/>
<View>
<Text style={styles.plist}>                  
35 Bandarawela Rd,{'\n'}
Badulla{'\n'}
055-2222800</Text>
<MaterialButtonViolet phoneNumber="+0552222800" />
</View>
</View>  
</View>


<View style={styles.rect2}><Text>Galle</Text></View>

<View style={styles.list}>
<Text style={styles.hlist}>
Ruhunu Hospital
</Text>
<View style={styles.detailslist}>
<Image style={{width:100,height:100,}}source={{uri:"https://th.bing.com/th/id/R.9e302ae43a26c296fedd0315be42e136?rik=d1krZIe2wkyTzQ&pid=ImgRaw&r=0"}}/>
<View>
<Text style={styles.plist}>
Inland Hill Rd,{'\n'} 
Galle{'\n'}
+94 917 694 059</Text>
<MaterialButtonViolet phoneNumber="+94917694059" />
</View>
</View> 
</View>

<View style={styles.list}>
<Text style={styles.hlist}>Asiri Hospital</Text>
<View style={styles.detailslist}>
<Image style={{width:100,height:100,}} source={{uri:"https://th.bing.com/th/id/R.4afbeb122f6f6b38046c4ee652d28623?rik=QASWMABRtsZjuw&pid=ImgRaw&r=0"}}/>
<View>
<Text style={styles.plist}>                  
No.10 Wakwella Rd{'\n'}
Galle{'\n'}
+94 914 640 640</Text>
<MaterialButtonViolet phoneNumber="+94914640640" />
</View>
</View>  
</View>


<View style={styles.rect2}><Text>MATARA</Text></View>

<View style={styles.list}>
<Text style={styles.hlist}>Asiri Hospital</Text>
<View style={styles.detailslist}>
<Image style={{width:100,height:100,}}source={{uri:"https://promolkwebsite.blob.core.windows.net/profiles/promo.lk-promo-43277a5ef91d4535854988b82bfee1ba.jpg"}}/>
<View>
<Text style={styles.plist}>
Street,{'\n'} 
Matara{'\n'}
+94 417 501 501</Text>
<MaterialButtonViolet phoneNumber="+94417501501" />
</View>
</View> 
</View>

<View style={styles.list}>
<Text style={styles.hlist}>District General Hospital</Text>
<View style={styles.detailslist}>
<Image style={{width:100,height:100,}} source={{uri:"https://lh3.googleusercontent.com/p/AF1QipOVCwWXGp7vi4cqqQSMplHOoq58wUxQg1FvSZMO=s1600-w400"}}/>
<View>
<Text style={styles.plist}>                  
Edmond Samarasekara Mw,{'\n'}
Matara{'\n'}
+94 412 222 261</Text>
<MaterialButtonViolet phoneNumber="+94412222 61" />
</View>
</View>  
</View>


<View style={styles.rect2}><Text>NUWARA ELIYA</Text></View>

<View style={styles.list}>
<Text style={styles.hlist}>Ideal Hospital</Text>
<View style={styles.detailslist}>
<Image style={{width:100,height:100,}}source={{uri:"https://english.lankapuvath.lk/wp-content/uploads/2019/07/Nuwara-Eliya-Hospital.jpg"}}/>
<View>
<Text style={styles.plist}>
Park Rd,{'\n'} 
Nuwara Eliya{'\n'}
+94 522 223 050</Text>
<MaterialButtonViolet phoneNumber="+94522223050" />
</View>
</View> 
</View>

<View style={styles.list}>
<Text style={styles.hlist}>General Hospital</Text>
<View style={styles.detailslist}>
<Image style={{width:100,height:100,}} source={{uri:"https://th.bing.com/th/id/OIP.X0IAFpDhgoUucv8_KwE6JQHaEK?pid=ImgDet&rs=1"}}/>
<View>
<Text style={styles.plist}>                  
Hawa Eliya,{'\n'}
Nuwara Eliya{'\n'}
+94522222261</Text>
<MaterialButtonViolet phoneNumber="+94522222261" />
</View>
</View>  
</View>

<View style={styles.rect2}><Text>RATNAPURA</Text></View>
<View style={styles.list}>
<Text style={styles.hlist}>Aloka Private Hospital</Text>
<View style={styles.detailslist}>
<Image style={{width:100,height:100,}}source={{uri:"https://lh5.googleusercontent.com/p/AF1QipP6YsyqHBLRyiWYGlNqbd8Qfm3eypk48VGLGqG_=w500-h500-k-no"}}/>
<View>
<Text style={styles.plist}>                  
Inner Circular Rd,{'\n'} 
Ratnapura{'\n'}
+94 452 223 200</Text>
<MaterialButtonViolet phoneNumber="+94452223200" />
</View>
</View>
</View>

<View style={styles.list}>
<Text style={styles.hlist}>Arya Hospital</Text>
<View style={styles.detailslist}>
<Image style={{width:100,height:100,}} source={{uri:"https://www.premium.lk/images/premium/projects/arya/1.jpg"}}/>
<View>
<Text style={styles.plist}>                  
No.189 Colombo Rd,{'\n'}
Ratnapura{'\n'}
+94 452 233 133</Text>
<MaterialButtonViolet phoneNumber="+94452233133" />
</View>
</View>
</View>

<View style={styles.rect2}><Text>MATALE</Text></View>
<View style={styles.list}>
<Text style={styles.hlist}>Matale Nursing Home</Text>
<View style={styles.detailslist}>
<Image style={{width:100,height:100,}}source={{uri:"https://lh3.googleusercontent.com/p/AF1QipPuTJdAQNB0hVw50OcnrcpoWSjJcSTdWyHcG2_9=s1360-w1360-h1020"}}/>
<View>
<Text style={styles.plist}>                  
95A Kandy Rd,{'\n'} 
Matale{'\n'}
+94 662 222 460</Text>
<MaterialButtonViolet phoneNumber="+94662222460" />
</View>
</View>
</View>

<View style={styles.list}>
<Text style={styles.hlist}>Kumudu Hospital</Text>
<View style={styles.detailslist}>
<Image style={{width:100,height:100,}} source={{uri:"https://kumuduhospital.lk/wp-content/uploads/2020/02/web_logo_new-1.png"}}/>
<View>
<Text style={styles.plist}>                  
Kandy-Jaffna Highway,{'\n'}
Matale{'\n'}
+94 662 222 244</Text>
<MaterialButtonViolet phoneNumber="+94662222244" />
</View>
</View>
</View>


<View style={styles.rect2}><Text>TRINCOMALEE</Text></View>
<View style={styles.list}>
<Text style={styles.hlist}>RCeymed Hospital</Text>
<View style={styles.detailslist}>
<Image style={{width:100,height:100,}}source={{uri:"https://www.ceymed.lk/wp-content/themes/ceymed/images/logo.png"}}/>
<View>
<Text style={styles.plist}>                  
677 Road,{'\n'} 
Trincomalee{'\n'}
+94 264 595 444</Text>
<MaterialButtonViolet phoneNumber="+94264595444" />
</View>
</View> 
</View>

<View style={styles.rect2}><Text>JAFFNA</Text></View>
<View style={styles.list}>
<Text style={styles.hlist}>STS Hospital</Text>
<View style={styles.detailslist}>
<Image style={{width:100,height:100,}}source={{uri:"https://lh3.googleusercontent.com/p/AF1QipNueinDUB83ofB3M11Q4NCLW80GwxsM9vzd1oJA=s1600-h380"}}/>
<View>
<Text style={styles.plist}>                  
130 1st Cross St,{'\n'} 
Jaffna{'\n'}
+94 212 226 611</Text>
<MaterialButtonViolet phoneNumber="+94212226611" />
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

export default Hospitallist;