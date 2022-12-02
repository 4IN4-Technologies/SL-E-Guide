import React, {Component} from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, ScrollView ,Text, StyleSheet, View, Image, ImageBackground, StatusBar, TextInput ,TouchableOpacity } from "react-native";

const SignUp = ()=>{ 

    const navigation = useNavigation();

    return(
        <SafeAreaView>
             <ImageBackground source={require('../../screen/src/bg.png')} style={styles.bgimg}>
            <ScrollView>
                <View style={StyleSheet.container}>
                <View style={{padding:20, paddingTop:50}}>
                <Text style={{textAlign:'center',fontWeight:'bold',color:'#1ee868', fontSize:40, marginBottom:20 }}>Create  a new account</Text>   
                <View style={{paddingLeft:70}}>
                    <Image source={require('../src/create.png')} style={{width:220 , height: 220}}/>
                </View>
                <View style={styles.formInput}>
                    <TextInput style={styles.textInput} placeholder="Enter email address"/>
                </View>
                <View style={styles.formInput}>
                    <TextInput style={styles.textInput} placeholder="Enter password"/>
                </View>
                <View style={styles.formInput}>
                    <TextInput style={styles.textInput} placeholder="Confirm password" secureTextEntry={true}/>

                </View>
                <TouchableOpacity style={styles.signButton}>
                    <Text style={styles.signupText}>Create</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{navigation.navigate("Login")}} >
                    <Text style={styles.loginhere}>Already have an account? Login here</Text>
                </TouchableOpacity>
                </View>

            </View>
            </ScrollView>
        </ImageBackground>   
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    bgimg:{
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    formInput:{
        marginTop:10,
        padding:10
    },
    textInput:{
        padding:10,
        fontSize:18,
        borderWidth:1,
        borderColor:'black',
        borderRadius:10
    },
    signButton:{
        padding:15,
        marginTop:15,
        borderRadius:15,
        backgroundColor:'#0c1d6b',
        width:'100%',
        
    },
    signupText:{
        color:'#0c686b',
        textAlign:'center',
        fontWeight:'bold',
        fontSize:20

    },
    loginhere:{
        color:'#311bbf',
        textAlign:'left',
        fontWeight:'bold',
        padding:10,
        marginTop:15
    }
    


});

export default SignUp;