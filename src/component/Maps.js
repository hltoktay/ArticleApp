import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { TextInput } from "react-native-gesture-handler";

import ImageCarousel from "./ImageCarousel";
import Carousel from "./index";

import { Icon } from "react-native-elements";

const Maps = () => {
  const [value, onChangeText] = React.useState("Useless Placeholder");
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 51.507351,
          longitude: -0.127758,
          latitudeDelta: 0.09,
          longitudeDelta: 0.0921
        }}
      ></MapView>
      <View style={styles.title}>
        <Text style={styles.titleText}>Choose location</Text>
        <View style={styles.searchSection}>
          <Icon
            style={styles.searchIcon}
            name="search"
            size={20}
            color="#000"
          />
          <TextInput
            style={styles.textInput}
            placeholder="Location"
            onChangeText={text => onChangeText(text)}
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.postSection}>
          <TouchableOpacity>
            <Text style={styles.postText}>POSTS</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.postText}>See All</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.carousel}>
        {/* <ImageCarousel /> */}
        <Carousel layout="default" layoutCardOffset={`9`} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#d2d1d0"
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.5
  },
  title: {
    marginTop: 125,
    marginLeft: 50
  },
  titleText: {
    fontSize: 18,
    fontWeight: "500"
  },
  searchSection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    width: "85%",
    opacity: 0.7,
    borderRadius: 10,
    paddingLeft: 10,
    marginTop: 10
  },
  textInput: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: "#fff",
    color: "#000",
    borderRadius: 10
  },
  searchIcon: {
    padding: 20,
    paddingLeft: 5
  },
  postSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 150,
    width: "85%"
  },
  postText: {
    fontWeight: "500"
  },
  carousel: {
    marginLeft: 40,
    marginTop: 20,
    width: 300,
    height: 325
  }
});

export default Maps;
