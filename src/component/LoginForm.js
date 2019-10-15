import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Logo from "./Logo";
import EmailAndPassword from "./EmailAndPassword";

const LoginForm = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Logo />
      </View>

      <View style={styles.loginContainer}>
        <EmailAndPassword />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  logoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  loginContainer: {
    flex: 2
  }
});

export default LoginForm;
