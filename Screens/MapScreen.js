import React from "react";
import { Text, View, StyleSheet } from "react-native";
import MapView, {Marker} from 'react-native-maps';


export default function MapScreen () {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{ latitude: "50.4272084", longitude: "30.5607937", latitudeDelta: "0.1", longitudeDelta: "0.1" }}>
         <Marker coordinate={{latitude: "50.4272084", longitude: "30.5607937"}}/> 
      </MapView>
           
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  }
})