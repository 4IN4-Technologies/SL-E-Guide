import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Text, Image,Linking} from "react-native";
import MaterialButtonViolet from "./components/MaterialButtonViolet";


function Guides() {
  return (
    <View style={styles.container}>
      <StatusBar animated />
      <View style={styles.rectStackStack}>
        <View style={styles.rectStack}>
          <View style={styles.title}>
          <Text style={styles.texttitle}>HIRE A SAFETY GUIDE</Text>
          </View>
          <Image
            source={require("./assets/images/A.jpg")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
          <Image
            source={require("./assets/images/ad80c017-9a61-4e0b-9908-793970d2f708.jpg")}
            resizeMode="contain"
            style={styles.image2}
          ></Image>
          <Image
            source={require("./assets/images/Isuru-Jayasundara.jpg")}
            resizeMode="contain"
            style={styles.image3}
          ></Image>
          <Image
            source={require("./assets/images/King-Coconut-Holidays-1.jpg")}
            resizeMode="contain"
            style={styles.image4}
          ></Image>
        </View>
        <Text style={styles.vishwaLakshan}>VISHWA LAKSHAN</Text>
        <Text style={styles.loremIpsum}></Text>
        <Text style={styles.loremIpsum2}></Text>
        <View style={styles.athulaChandradasaStack}>
          <Text style={styles.athulaChandradasa}>A.CHANDRADASA</Text>
          <Text style={styles.text}>12+ Exp</Text>
          <Text style={styles.topRated2}>TOP RATED</Text>
        </View>
        <View style={styles.loremIpsum3Stack}>
          <Text style={styles.loremIpsum3}>10+ Exp</Text>
          <Text style={styles.topRated}>TOP RATED</Text>
        </View>
        <MaterialButtonViolet phoneNumber="+94764895686"
          style={styles.materialButtonViolet}
        ></MaterialButtonViolet>
        <MaterialButtonViolet
          style={styles.materialButtonViolet1}
        ></MaterialButtonViolet>
        <View style={styles.isuruJayasundaraStack}>
          <Text style={styles.isuruJayasundara}>ISURU JAYASUNDARA</Text>
          <Text style={styles.text2}>17+ Exp</Text>
        </View>
        <Text style={styles.topRated3}>TOP RATED</Text>
        <MaterialButtonViolet
          style={styles.materialButtonViolet2}
        ></MaterialButtonViolet>
        <View style={styles.hasankaDamithStack}>
          <Text style={styles.hasankaDamith}>HASANKA DAMITH</Text>
          <Text style={styles.text3}>17+ Exp</Text>
          <Text style={styles.topRated4}>TOP RATED</Text>
        </View>
        <MaterialButtonViolet
          style={styles.materialButtonViolet3}
        ></MaterialButtonViolet>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(247,247,247,1)"
  },
  title:{
    flexDirection:"row",
    justifyContent:"center",
    backgroundColor:"#0099ff",
    borderRadius:10

  },
  texttitle: {
    color: "rgba(235,222,222,1)",
    fontSize: 25
  },
  image: {
    top: 23,
    width: 189,
    height: 194,
    position: "absolute",
    left: 3
  },
  image2: {
    top: 202,
    left: 0,
    width: 195,
    height: 174,
    position: "absolute"
  },
  image3: {
    top: 371,
    left: 3,
    width: 189,
    height: 164,
    position: "absolute"
  },
  image4: {
    top: 511,
    left: 3,
    width: 189,
    height: 192,
    position: "absolute"
  },
  rectStack: {
    top: 0,
    left: 0,
    width: 339,
    height: 703,
    position: "absolute"
  },
  vishwaLakshan: {
    top: 60,
    position: "absolute",
    fontFamily: "basic-regular",
    color: "#121212",
    height: 28,
    width: 255,
    textDecorationLine: "underline",
    left: 211
  },
  loremIpsum: {
    top: 246,
    left: 26,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  loremIpsum2: {
    top: 380,
    left: 141,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  athulaChandradasa: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "basic-regular",
    color: "#121212",
    height: 36,
    width: 143,
    textDecorationLine: "underline"
  },
  text: {
    top: 29,
    left: 22,
    position: "absolute",
    fontFamily: "roboto-700italic",
    color: "rgba(26,11,97,1)",
    height: 35,
    width: 130
  },
  topRated2: {
    top: 57,
    left: 12,
    position: "absolute",
    fontFamily: "alfa-slab-one-regular",
    color: "rgba(157,21,157,1)",
    height: 15,
    width: 119
  },
  athulaChandradasaStack: {
    top: 217,
    left: 211,
    width: 152,
    height: 72,
    position: "absolute"
  },
  loremIpsum3: {
    top: 0,
    left: 7,
    position: "absolute",
    fontFamily: "roboto-700italic",
    color: "rgba(26,11,97,1)",
    height: 35,
    width: 130
  },
  topRated: {
    top: 28,
    left: 0,
    position: "absolute",
    fontFamily: "alfa-slab-one-regular",
    color: "rgba(157,21,157,1)",
    height: 15,
    width: 119
  },
  loremIpsum3Stack: {
    top: 88,
    left: 223,
    width: 137,
    height: 43,
    position: "absolute"
  },
  materialButtonViolet: {
    height: 36,
    width: 100,
    position: "absolute",
    left: 218,
    top: 142
  },
  materialButtonViolet1: {
    height: 36,
    width: 100,
    position: "absolute",
    left: 223,
    top: 316
  },
  isuruJayasundara: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "basic-regular",
    color: "#121212",
    height: 36,
    width: 143,
    textDecorationLine: "underline"
  },
  text2: {
    top: 31,
    left: 16,
    position: "absolute",
    fontFamily: "roboto-700italic",
    color: "rgba(26,11,97,1)",
    height: 35,
    width: 130
  },
  isuruJayasundaraStack: {
    top: 387,
    left: 217,
    width: 146,
    height: 66,
    position: "absolute"
  },
  topRated3: {
    top: 453,
    left: 230,
    position: "absolute",
    fontFamily: "alfa-slab-one-regular",
    color: "rgba(157,21,157,1)",
    height: 15,
    width: 119
  },
  materialButtonViolet2: {
    height: 36,
    width: 100,
    position: "absolute",
    left: 223,
    top: 483
  },
  hasankaDamith: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "basic-regular",
    color: "#121212",
    height: 36,
    width: 143,
    textDecorationLine: "underline"
  },
  text3: {
    top: 30,
    left: 13,
    position: "absolute",
    fontFamily: "roboto-700italic",
    color: "rgba(26,11,97,1)",
    height: 35,
    width: 130
  },
  topRated4: {
    top: 57,
    left: 7,
    position: "absolute",
    fontFamily: "alfa-slab-one-regular",
    color: "rgba(157,21,157,1)",
    height: 15,
    width: 119
  },
  hasankaDamithStack: {
    top: 553,
    left: 217,
    width: 143,
    height: 72,
    position: "absolute"
  },
  materialButtonViolet3: {
    height: 36,
    width: 100,
    position: "absolute",
    left: 222,
    top: 637
  },
  rectStackStack: {
    width: 466,
    height: 703,
    marginTop: 72,
    marginLeft: 15
  }
});

export default Guides;
