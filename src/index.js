import React, { Component } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import firebase from "firebase";

import Loading from "./component/Loading";

import LoginForm from "./component/LoginForm";
import Articles from "./component/Articles";

import Bg from "./images/bg.png";

EStyleSheet.build({
  $primaryBlue: "#4f6d7a"
});

export class BookingApp extends Component {
  state = {
    loggedIn: null
  };

  componentDidMount() {
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyBwMVVXmp3hm74ckqkQxl5E5IhhGQSnYrg",
      authDomain: "plantapp-ba72f.firebaseapp.com",
      databaseURL: "https://plantapp-ba72f.firebaseio.com",
      projectId: "plantapp-ba72f",
      storageBucket: "plantapp-ba72f.appspot.com",
      messagingSenderId: "532896721850",
      appId: "1:532896721850:web:7aad244891b40ba8bdcb83",
      measurementId: "G-7X551PMCZ1"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          loggedIn: true
        });
      } else {
        this.setState({
          loggedIn: false
        });
      }
    });
  }

  renderContent = () => {
    switch (this.state.loggedIn) {
      case false:
        return (
          <ImageBackground style={styles.container} source={Bg}>
            <LoginForm />
          </ImageBackground>
        );

      case true:
        return <Articles />;

      default:
        return <Loading />;
    }
  };

  render() {
    return <View style={styles.container}>{this.renderContent()}</View>;
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

export default BookingApp;
