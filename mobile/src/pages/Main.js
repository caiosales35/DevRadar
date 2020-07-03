import React, { useState, useEffect } from "react";
import { StyleSheet, Image, View, Text } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import {
  requestPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";

function Main({ navigation }) {
  const [currentRegion, setCurrentRegion] = useState(null);

  useEffect(() => {
    async function loadInitialPosition() {
      const { granted } = await requestPermissionsAsync();
      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true,
        });
        const { latitude, longitude } = coords;
        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.04,
          longitudeDelta: 0.04,
        });
      }
    }
    loadInitialPosition();
  }, []);

  if (!currentRegion) {
    return null;
  }

  return (
    <MapView initialRegion={currentRegion} style={styles.map}>
      <Marker coordinate={{}}>
        <Image
          style={styles.avatar}
          source={{
            uri:
              "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
          }}
        />
        <Callout
          onPress={() => {
            navigation.navigate("Profile", { github_username: "caiosales35" });
          }}
        >
          <View style={styles.callout}>
            <Text style={styles.devName}>Caio Sales</Text>
            <Text style={styles.devBio}>Bio</Text>
            <Text style={styles.devTechs}>Tecnologias</Text>
          </View>
        </Callout>
      </Marker>
    </MapView>
  );
}

export default Main;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 4,
    borderWidth: 4,
    borderColor: "#FFF",
  },
  callout: {
    width: 260,
  },
  devName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  devBio: {
    color: "#666",
    marginTop: 5,
  },
  devTechs: {
    marginTop: 5,
  },
});
