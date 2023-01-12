import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text, ImageBackground } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

function placelist(props) {
  return (
    <ImageBackground source={require('../../src/bg.png')} style={[styles.container, props.style]}>
      <View style={styles.leftWrapper}>
        <TouchableOpacity style={styles.leftIconButton}>
          <Icon name="ios-arrow-back" style={styles.leftIcon}></Icon>
          <Text style={styles.leftText}>Back</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.textWrapper}>
        <Text numberOfLines={1} style={styles.places}>
          Places
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#EFEFF4",
    paddingRight: 8,
    paddingLeft: 8
  },
  leftWrapper: {
    flex: 0.17,
    alignItems: "flex-start",
    justifyContent: "center"
  },
  leftIconButton: {
    flexDirection: "row"
  },
  leftIcon: {
    color: "Black",
    fontSize: 32
  },
  leftText: {
    alignSelf: "center",
    fontSize: 17,
    paddingLeft: 5,
    color: "Black"
  },
  textWrapper: {
    flex: 0.83,
    alignItems: "center",
    justifyContent: "center"
  },
  places: {
    fontSize: 18,
    lineHeight: 17,
    color: "#000"
  }
});

export default placelist;
