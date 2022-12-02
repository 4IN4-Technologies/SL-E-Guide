import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, ScrollView ,Text, Image, StyleSheet, View, ImageBackground, StatusBar, TextInput ,TouchableOpacity } from "react-native";

const Login = ()=>{

    const navigation = useNavigation();
    

    return(
        <SafeAreaView>
            <ImageBackground source={require('../../screen/src/bg.png')} style={styles.bgimg}>
                <View style={StyleSheet.container}>
                <View style={{paddingTop:100}}>
                <Text style={{textAlign:'center',fontWeight:'bold',color:'#1ee868', fontSize:50, marginBottom:20 }}>SL E-GUIDE</Text>   
                <View style={{paddingLeft:100}} >
                <Image source={require('../src/login.png')} style={{width:200, height:200,}}/>
                </View>
                <View style={styles.formInput}>
                    <TextInput style={styles.textInput} placeholder="Enter email address"/>

                </View>
                <View style={styles.formInput}>
                    <TextInput style={styles.textInput} placeholder="Enter password" secureTextEntry={true}/>

                </View>
                <TouchableOpacity style={styles.loginbutton} onPress={()=>{navigation.navigate("Main")}}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{navigation.navigate("Reset")}}>
                    <Text style={styles.forgotPass}>Forgot Password?</Text>
                </TouchableOpacity>
                <Text style={{textAlign:'center' ,padding:10}}>Or</Text>
                <Text style={{textAlign:"left",paddingLeft:10}}>No account?</Text>
                <TouchableOpacity onPress={()=>{navigation.navigate("Signup")}} >
                    <Text style={styles.signup}>Create a new account</Text>
                </TouchableOpacity>

                </View>
            </View>
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
    loginbutton:{
        padding:15,
        marginTop:15,
        borderRadius:15,
        backgroundColor:'#c179e0',
        width:'100%',
        
    },
    loginText:{
        color:'#0a181a',
        textAlign:'center',
        fontWeight:'bold'

    },
    forgotPass:{
        color:'#c7e079',
        textAlign:'left',
        fontWeight:'bold',
        padding:10,
        marginTop:15
    },
    signup:{
        color: '#063b1a',
        fontWeight:'bold',
        padding:10
    }
        
    


})

export default Login;