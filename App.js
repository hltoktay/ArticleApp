import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

import { RootNavigator } from "./src/routes/index";

class App extends Component {
  render() {
    const Nav = RootNavigator();

    return (
      <View style={styles.container}>
        <Nav />
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
