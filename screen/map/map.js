import React from "react";
import { SafeAreaView, Text, Image, StyleSheet, View, ImageBackground, TouchableOpacity } from "react-native";

const Qmap = () =>{
    return(
        <SafeAreaView style={{flex:1}}>
            <ImageBackground source={require('../../screen/src/bg.png')} style={styles.bgimg}>
                <View>
                    <Text style={{fontSize:50, color:'#3836ba', padding:60, paddingTop:100, fontWeight:'bold', paddingBottom:100}}>Queue Map</Text>
                    <View style={styles.container}>
                        <Image source={require('../src/map.jpg')} style={{width:'100%', height:310}}/>                       
                    </View>
                </View>
                <View style={{paddingLeft:80, paddingTop:20}}>
                    <Image source={require('../../screen/src/indicator.png')}></Image>
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
        width:350,
        height:350,
        paddingLeft:20,
        paddingRight:20,
        marginLeft:30,
        marginRight:20,
        paddingTop:20,
        paddingBottom:100,
        borderRadius:15,
        backgroundColor:'#1ac9e8'
    },
    
})
export default Qmap;