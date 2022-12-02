import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, Text, Image, StyleSheet, View, ImageBackground, TouchableOpacity } from "react-native";

const Main = () =>{

    const navigation = useNavigation();
    return(
        <SafeAreaView style={{flex:1}}>
            <ImageBackground source={require('../../screen/src/bg.png')} style={styles.bgimg}>
                <View>
                    <Text style={{fontSize:50, color:'#3836ba', padding:80, paddingTop:180, fontWeight:'bold', paddingBottom:100}}>Welcome!</Text>
                    <View style={styles.container}>
                        <TouchableOpacity style={styles.buttons} onPress={()=>{navigation.navigate("Flist")}}>
                            <Text style={{fontSize:30, textAlign:'center', fontWeight:'bold'}}>Fuel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttons} onPress={()=>{navigation.navigate("Qmap")}} > 
                            <Text style={{fontSize:28, textAlign:'center', fontWeight:'bold'}}>Live Queue Map</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    bgimg:{
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    container:{
        paddingLeft:80,
        marginLeft:20,
        marginRight:20,
        paddingTop:30,
        paddingBottom:50,
        borderRadius:15,
        backgroundColor:'#1ac9e8'
    },
    buttons:{
        marginTop:30,
        marginBottom:5,
        borderWidth:2,
        borderColor:'#3d90bf',
        padding:20,
        width:'70%',
        borderRadius:15,
        backgroundColor:'#3d90bf'
    }

})
export default Main;