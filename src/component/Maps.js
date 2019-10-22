import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { TextInput } from "react-native-gesture-handler";

import Carousel from "./index";
import styles from "../styles/Map.style";

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
        <Carousel layout="default" layoutCardOffset={`9`} />
      </View>
    </View>
  );
};

export default Maps;
