import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Maps = () => {
  return (
    <View style={styles.container}>
      <Text>Maps Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 150,
    paddingLeft: 10
  }
});

export default Maps;
