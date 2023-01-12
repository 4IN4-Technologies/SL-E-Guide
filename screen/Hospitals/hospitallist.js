import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import CupertinoSearchBarWithMic from "./components/CupertinoSearchBarWithMic";
import MaterialButtonPink from "./components/MaterialButtonPink";
import MaterialButtonSuccess1 from "./components/MaterialButtonSuccess1";

function Hospitallist(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <Text style={styles.loremIpsum}>HOSPITAL AND MEDICAL CENTERS</Text>
      </View>
      <CupertinoSearchBarWithMic
        style={styles.cupertinoSearchBarWithMic}
      ></CupertinoSearchBarWithMic>
      <View style={styles.rect3Stack}>
        <View style={styles.rect3}>
          <Text style={styles.asiriHospitals4}>ASIRI HOSPITALS</Text>
          <View style={styles.materialButtonPinkRow}>
            <MaterialButtonPink
              style={styles.materialButtonPink}
            ></MaterialButtonPink>
            <MaterialButtonSuccess1
              style={styles.materialButtonSuccess1}
            ></MaterialButtonSuccess1>
          </View>
        </View>
        <Image
          source={require("./assets/images/ASIRI_HOSPITAL1.jpg")}
          resizeMode="contain"
          style={styles.image3}
        ></Image>
      </View>
      <View style={styles.rect5Stack}>
        <View style={styles.rect5}>
          <Text style={styles.sethSewanaHospital}>SETH SEWANA HOSPITAL</Text>
          <View style={styles.materialButtonPink2Row}>
            <MaterialButtonPink
              style={styles.materialButtonPink2}
            ></MaterialButtonPink>
            <MaterialButtonSuccess1
              style={styles.materialButtonSuccess12}
            ></MaterialButtonSuccess1>
          </View>
        </View>
        <Image
          source={require("./assets/images/seth_sewana.jpg")}
          resizeMode="contain"
          style={styles.image4}
        ></Image>
      </View>
      <View style={styles.rect7Stack}>
        <View style={styles.rect7}>
          <Text style={styles.miracleHosptal2}>MIRACLE HOSPTAL</Text>
          <View style={styles.materialButtonPink3Row}>
            <MaterialButtonPink
              style={styles.materialButtonPink3}
            ></MaterialButtonPink>
            <MaterialButtonSuccess1
              style={styles.materialButtonSuccess13}
            ></MaterialButtonSuccess1>
          </View>
        </View>
        <Image
          source={require("./assets/images/MIRACAL.jpg")}
          resizeMode="contain"
          style={styles.image5}
        ></Image>
      </View>
      <View style={styles.rect8Stack}>
        <View style={styles.rect8}>
          <Text style={styles.hemasHospital}>HEMAS HOSPITAL</Text>
          <View style={styles.materialButtonPink4Row}>
            <MaterialButtonPink
              style={styles.materialButtonPink4}
            ></MaterialButtonPink>
            <MaterialButtonSuccess1
              style={styles.materialButtonSuccess14}
            ></MaterialButtonSuccess1>
          </View>
        </View>
        <Image
          source={require("./assets/images/HEMAS.jpg")}
          resizeMode="contain"
          style={styles.image6}
        ></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  rect: {
    width: 278,
    height: 46,
    backgroundColor: "rgba(142,6,113,1)",
    borderRadius: 33,
    marginTop: 67,
    marginLeft: 63
  },
  loremIpsum: {
    color: "rgba(255,255,255,1)",
    height: 25,
    width: 220,
    fontSize: 17,
    marginTop: 12,
    marginLeft: 36
  },
  cupertinoSearchBarWithMic: {
    height: 32,
    width: 359,
    marginTop: 7,
    alignSelf: "center"
  },
  rect3: {
    top: 0,
    left: 12,
    width: 343,
    height: 115,
    position: "absolute",
    backgroundColor: "#E6E6E6"
  },
  asiriHospitals4: {
    color: "#121212",
    height: 32,
    width: 117,
    marginTop: 17,
    marginLeft: 146
  },
  materialButtonPink: {
    height: 36,
    width: 100
  },
  materialButtonSuccess1: {
    height: 36,
    width: 80,
    marginLeft: 6,
    marginTop: 1
  },
  materialButtonPinkRow: {
    height: 37,
    flexDirection: "row",
    marginTop: 6,
    marginLeft: 143,
    marginRight: 14
  },
  image3: {
    top: 17,
    left: 0,
    width: 158,
    height: 87,
    position: "absolute"
  },
  rect3Stack: {
    width: 355,
    height: 115,
    marginTop: 13,
    marginLeft: 10
  },
  rect5: {
    top: 0,
    left: 12,
    width: 343,
    height: 125,
    position: "absolute",
    backgroundColor: "#E6E6E6"
  },
  sethSewanaHospital: {
    color: "#121212",
    height: 32,
    width: 164,
    marginTop: 23,
    marginLeft: 145
  },
  materialButtonPink2: {
    height: 36,
    width: 100
  },
  materialButtonSuccess12: {
    height: 36,
    width: 80,
    marginLeft: 4
  },
  materialButtonPink2Row: {
    height: 36,
    flexDirection: "row",
    marginTop: 7,
    marginLeft: 146,
    marginRight: 13
  },
  image4: {
    top: 9,
    left: 0,
    width: 148,
    height: 98,
    position: "absolute"
  },
  rect5Stack: {
    width: 355,
    height: 125,
    marginTop: 22,
    marginLeft: 9
  },
  rect7: {
    top: 0,
    left: 19,
    width: 342,
    height: 129,
    position: "absolute",
    backgroundColor: "#E6E6E6"
  },
  miracleHosptal2: {
    color: "#121212",
    height: 32,
    width: 164,
    marginTop: 16,
    marginLeft: 145
  },
  materialButtonPink3: {
    height: 36,
    width: 100
  },
  materialButtonSuccess13: {
    height: 36,
    width: 80,
    marginLeft: 5
  },
  materialButtonPink3Row: {
    height: 36,
    flexDirection: "row",
    marginTop: 16,
    marginLeft: 144,
    marginRight: 13
  },
  image5: {
    top: 7,
    left: -1,
    width: 165,
    height: 114,
    position: "absolute"
  },
  rect7Stack: {
    width: 361,
    height: 129,
    marginTop: 25,
    marginLeft: 3
  },
  rect8: {
    top: 8,
    left: 0,
    width: 342,
    height: 132,
    position: "absolute",
    backgroundColor: "#E6E6E6"
  },
  hemasHospital: {
    fontFamily: "alata-regular",
    color: "#121212",
    height: 32,
    width: 164,
    marginTop: 25,
    marginLeft: 146
  },
  materialButtonPink4: {
    height: 36,
    width: 100
  },
  materialButtonSuccess14: {
    height: 36,
    width: 80,
    marginLeft: 5
  },
  materialButtonPink4Row: {
    height: 36,
    flexDirection: "row",
    marginTop: 13,
    marginLeft: 144,
    marginRight: 13
  },
  image6: {
    top: 0,
    left: 10,
    width: 109,
    height: 156,
    position: "absolute"
  },
  rect8Stack: {
    width: 342,
    height: 156,
    marginTop: 21,
    marginLeft: 22
  }
});

export default Hospitallist;
