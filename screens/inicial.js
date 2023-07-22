import React, { Component } from "react";
import {
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";

export default class Inicial extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.dsa} />
        <ImageBackground source={require("../assets/bg.png")} style={styles.bg}>
          <View style={styles.title}>
            <Text style={styles.titleText}>Spacial</Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate("Rastreador EEI")}
          >
            <Text style={styles.buttonText}>Rastreador EEI</Text>
            <Image
              source={require("../assets/iss_icon.png")}
              style={styles.buttonImage}
            ></Image>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate("meteoros")}
          >
            <Text style={styles.buttonText}>Meteoros</Text>
            <Image
              source={require("../assets/meteor_icon.png")}
              style={styles.buttonImage}
            ></Image>
          </TouchableOpacity>

        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bg: { flex: 1, resizeMode: "cover" },
  container: { flex: 1 },
  dsa: {marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0},
  title: { flex: 0.15, justifyContent: "center", alignItems: "center" },
  titleText: {
    fontSize: 50,
    fontWeight: "bold",
    fontFamily: "fantasy",
    color: "white",
    textShadowColor: "black",
    textShadowOffset: { width: 4, height: 4 },
    textShadowRadius: 10,
  },
  button: {
    flex: 0.25,
    backgroundColor: "white",
    marginHorizontal: 50,
    borderRadius: 27,
    marginTop: 80,
  },
  buttonText: {
    fontSize: 35,
    fontWeight: "bold",
    color: "black",
    marginTop: 75,
    paddingLeft: 30,
  },
  buttonImage: {
    position: "absolute",
    height: 200,
    width: 200,
    resizeMode: "contain",
    right: 10,
    top: -90,
  },
});
