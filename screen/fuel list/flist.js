import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, ScrollView,Text, Image, StyleSheet, View, ImageBackground, TouchableOpacity } from "react-native";


const Flist= () =>{

    const navigation = useNavigation();
    return(
        <SafeAreaView style={{flex:1}}>
            <ScrollView>
            <ImageBackground source={require('../../screen/src/bg.png')} style={styles.bgimg}>
                <View>
                    <Text style={{fontSize:30, color:'#3836ba', paddingLeft:20, paddingTop:180, fontWeight:'bold', paddingBottom:50}}>Nearest Fuel Station Info</Text>
                    <Text style={{padding:20,color:'blue'}}>Station:Ibbagamuwa</Text>
                    <View style={styles.container}>
                        <TouchableOpacity style={styles.buttons}>
                            <Text style={{fontSize:30, textAlign:'center', fontWeight:'bold'}}>Petrol</Text>
                            <Text style={{color:'red' ,textAlign:'center'}}>Remaining 400l out of 6600l</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttons}> 
                        <Text style={{fontSize:30, textAlign:'center', fontWeight:'bold'}}>Diesel</Text>
                        <Text style={{color:'red',textAlign:'center'}}>Remaining 890l out of 7400l</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttons}>
                            <Text style={{fontSize:30, textAlign:'center', fontWeight:'bold'}}>Kerosine</Text>
                            <Text style={{color:'red',textAlign:'center'}}>Out of Stock</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttons} > 
                            <Text style={{fontSize:28, textAlign:'center', fontWeight:'bold'}}>LP Gas</Text>
                            <Text style={{color:'red',textAlign:'center'}}>Out of Stock</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
            </ScrollView>
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
export default Flist;