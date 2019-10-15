import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Logo = () => {
  return (
    <View style={styles.container}>
      <Image
        style={{ height: 200, width: 200 }}
        source={{
          uri: "https://i.dlpng.com/static/png/430658_preview.png"
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50
  }
});

export default Logo;
