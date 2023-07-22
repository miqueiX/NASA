import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
  ImageBackground,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MapView, { Marker } from "react-native-maps";
import axios from "axios";

export default class Rastreador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {},
    };
  }

  getlocation = () => {
    axios.get("https://api.wheretheiss.at/v1/satellites/25544").then((response)=>{this.setState({location:response.data})})
  }


  componentDidMount() {
  this.getlocation()
  }

  render() {
    if (Object.keys(this.state.location).length === 0) {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "black",
          }}
        >
          <Text style={{ color: "white", fontSize: 50 }}>Carregando...</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />
          <ImageBackground
            source={require("../assets/bg.png")}
            style={styles.bgImage}
          >
            <View style={styles.title}>
              <Text style={styles.titleText}>Localizar Estação Espacial</Text>
            </View>

            <View style={styles.mapContainer}>
              <MapView
                style={styles.map}
                region={{
                  latitude: this.state.location.latitude,
                  longitude: this.state.location.longitude,
                  latitudeDelta: 100,
                  longitudeDelta: 100,
                }}
              >
                <Marker
                  coordinate={{
                    latitude: this.state.location.latitude,
                    longitude: this.state.location.longitude,
                  }}
                >
                  <Image
                    source={require("../assets/iss_icon.png")}
                    style={{ height: 50, width: 50 }}
                  />
                </Marker>
              </MapView>

              <View style={styles.infoContainer}>
                <Text style={styles.infoText}>
                  Latitude: {this.state.location.latitude}
                </Text>
                <Text style={styles.infoText}>
                  Longitude: {this.state.location.longitude}
                </Text>
                <Text style={styles.infoText}>
                  Altitude (KM): {this.state.location.altitude}
                </Text>
                <Text style={styles.infoText}>
                  Velocidade (KM/H): {this.state.location.velocity}
                </Text>
              </View>
            </View>
          </ImageBackground>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "rgba(0,0,0,0.3)" },
  title: {
    flex: 0.1,

    justifyContent: "center",
    alignItems: "center",
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "rgba(0,0,100,0.8)",
  },

  titleText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },

  bgImage: {
    flex: 1,
    resizeMode: "cover",
  },

  mapContainer: {
    flex: 0.6,
  },
  map: {
    width: "95%",
    height: "100%",
    alignSelf: "center",
  },
  infoContainer: {
    backgroundColor: "rgba(0,0,100,0.8)",
    marginTop: -10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 30,
  },
  infoText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});

