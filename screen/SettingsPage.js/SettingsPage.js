import { StyleSheet, Text, View, StatusBar, Dimensions,ImageBackground } from 'react-native'
import React from 'react'
import Fontawesome from "react-native-vector-icons/FontAwesome";
Sheshan
import { TouchableOpacity } from 'react-native-gesture-handler';

=======
main

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const SettingsPage = () => {
  return (

        <ImageBackground source={require("../../assets/Images/bg.png")} style={{ flex: 1, paddingTop: StatusBar.currentHeight || 0 }}>
        <View>
        <Text style={styles.title}>Settings</Text>
            <Fontawesome
            name = "user"
            color={"black"}
            size={windowHeight * 0.2}
            style={styles.profile}
            />
            
        </View>  
Sheshan
        <View>
            <Text style={{fontSize:18, alignSelf:"center"}}>You are currently logged in as</Text>
            
        </View>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.btn}>
                <Text style={{marginVertical:10, fontSize:18, fontWeight:"bold"}}>Contact Us</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnSignOut}>
                <Text style={{marginVertical:10, fontSize:18, fontWeight:"bold"}}>Sign Out</Text>
                </TouchableOpacity>
        </View>
=======
main
        </ImageBackground>   

  )
}

export default SettingsPage

const styles = StyleSheet.create({
    title:{
        fontWeight: "bold",
            fontSize: 40,
            justifyContent: "center",
            alignSelf: "center",
            paddingVertical:"10%",
            borderBottomColor:"#000",
            borderBottomWidth:2
    },
    profile:{
        alignSelf: "center",
        marginVertical:windowHeight * 0.06
Sheshan
    },
    buttonContainer:{
        marginTop:windowHeight * 0.2,
    },
    btn:{
        backgroundColor:"#c179e0",
        width:windowWidth * 0.8,
        borderRadius:20,
        alignItems:"center",
        marginVertical:windowHeight*0.03
    },
    btnSignOut:{
        backgroundColor:"red",
        width:windowWidth * 0.8,
        borderRadius:20,
        alignItems:"center",
    }
    
})
=======
    }
})
main
