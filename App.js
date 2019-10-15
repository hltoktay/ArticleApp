import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

import AppNavigator from "./src/routes/index";

export class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AppNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    height: "100%",
    width: "100%"
  }
});

export default App;
