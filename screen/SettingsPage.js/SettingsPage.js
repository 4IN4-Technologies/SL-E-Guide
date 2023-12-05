import { StyleSheet, Text, View, StatusBar, Dimensions,ImageBackground } from 'react-native'
import React from 'react'
import Fontawesome from "react-native-vector-icons/FontAwesome";

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
    }
})