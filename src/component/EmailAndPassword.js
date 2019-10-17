import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";

import firebase from "firebase";

class EmailAndPassword extends Component {
  state = {
    email: "",
    password: "",
    error: "",
    loading: false
  };

  onBottomPress = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(this.onLoginSuccess)
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  };

  onLoginSuccess = () => {
    this.setState({
      error: "",
      loading: false
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={this.state.email}
          placeholder="email"
          autoCapitalize="none"
          onChangeText={email => this.setState({ email })}
        />
        <TextInput
          style={styles.input}
          value={this.state.password}
          secureTextEntry
          placeholder="password"
          autoCapitalize="none"
          onChangeText={password => this.setState({ password })}
        />

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={this.onBottomPress}
        >
          <Text style={styles.button}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.errorText}>{this.state.error}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    marginTop: 20
  },
  input: {
    height: 40,
    backgroundColor: "#bce6ff",
    paddingLeft: 20,
    marginBottom: 15,
    borderRadius: 10,
    fontSize: 15
  },
  errorText: {
    fontSize: 14,
    color: "red",
    alignSelf: "center",
    marginTop: 20,
    justifyContent: "center"
  },
  buttonContainer: {
    backgroundColor: "#a5669f",
    padding: 15,
    borderRadius: 8
  },
  button: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20
  }
});

export default EmailAndPassword;
