import { useNavigation } from "@react-navigation/native";
import React, { Component } from "react";
import { SafeAreaView,ScrollView,StyleSheet, View, Image, ImageBackground } from "react-native";
import CupertinoHeaderWithAddButton from "./components/CupertinoHeaderWithAddButton";
import HospitalButton from "./components/MaterialButtonPrimary"
import MaterialButtonPrimary1 from "./components/MaterialButtonPrimary1";
import MaterialButtonPrimary2 from "./components/MaterialButtonPrimary2";
import MaterialIconTextButtonsFooter from "./components/MaterialIconTextButtonsFooter";

function Emergency() {
    const navigation=useNavigation();
  return (
    <ScrollView>
    <SafeAreaView style={{flex:1}}>
    <View style={styles.container}>

      <CupertinoHeaderWithAddButton style={styles.cupertinoHeaderWithAddButton} ></CupertinoHeaderWithAddButton>
     
      <ImageBackground source={require('../src/bg.png')}>
      <Image
        source={require("../src/emergency.png")}
        resizeMode="contain"
        style={styles.image}></Image>

    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.policeService}>Police Service</Text>
    </TouchableOpacity>
      <MaterialButtonPrimary1 style={styles.materialButtonPrimary1} ></MaterialButtonPrimary1>
      <MaterialButtonPrimary2 style={styles.materialButtonPrimary2} ></MaterialButtonPrimary2>

      
      
      
      <MaterialIconTextButtonsFooter style={styles.materialIconTextButtonsFooter}></MaterialIconTextButtonsFooter>
      </ImageBackground>
    </View>
    </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"column"
  },
  cupertinoHeaderWithAddButton: {
    height: 44,
    width: 400,
    opacity: 0.55,
    marginTop: 10,
    backgroundColor:"#ffffff",
    alignSelf: "center"
  },
  image: {
    width: 375,
    height: 200,
    marginTop: 10
  },
  materialButtonPrimary: {
    height: 36,
    width: 296,
    borderRadius: 80,
    marginTop: 198,
    marginLeft: 40
  },
  materialButtonPrimary1: {
    height: 36,
    width: 296,
    borderRadius: 80,
    marginTop: -106,
    marginLeft: 40
  },
  materialButtonPrimary2: {
    height: 36,
    width: 296,
    borderRadius: 80,
    marginTop: 100,
    marginLeft: 39
  },
  materialIconTextButtonsFooter: {
    height: 60,
    width: 400,
    marginBottom:10,
    marginTop:210
  }
});

export default Emergency;