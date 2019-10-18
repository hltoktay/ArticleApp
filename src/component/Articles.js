import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import * as firebase from "firebase";

export class Articles extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.articleContainer}>
          <Text style={styles.heading}>Welcome Articles Page</Text>

          <Text style={styles.content}>
            You are logged in from Content Page
          </Text>

          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={
              () => firebase.auth().signOut()
              // .then(() => {
              //   this.props.navigation.navigate("Home");
              // })
            }
          >
            <Text style={{ color: "#fff" }}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 150,
    paddingLeft: 10
  },
  articleContainer: {
    padding: 10,
    borderBottomColor: "rgba(255,255,255, 0.7)",
    borderBottomWidth: 2
  },
  heading: {
    fontSize: 22,
    color: "#000",
    marginBottom: 10
  },
  content: {
    marginTop: 10,
    fontSize: 16
  },
  buttonContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#ffa500",
    width: "30%",
    borderRadius: 20
  }
});

export default Articles;

//
